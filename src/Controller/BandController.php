<?php

namespace App\Controller;

use App\Entity\Band;
use App\Entity\Musician;
use App\Form\Type\BandCategoryType;
use App\Form\Type\BandDetailType;
use App\Repository\BandRepository;
use App\Repository\MusicianRepository;
use Doctrine\Persistence\ManagerRegistry;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\JsonResponse;

class BandController extends AbstractController
{
    #[Route('/bands', name: 'bands', methods: ['GET'])]
    public function bands(Request $request, ManagerRegistry $doctrine): Response
    {
        $entityManager = $doctrine->getManager();

        $bandName = $request->get('q');

        /** @var BandRepository $bandRepository */
        $bandRepository = $entityManager->getRepository(Band::class);


        $bands = $bandRepository->findByBandName($bandName);

        $adjustedBands = array();

        foreach ($bands as $band) {
            $adjustedBands[] = array(
                'id' => $band->getId(),
                'bandName' => $band->getBandName()
            );
        }

        return new JsonResponse(array(
            'status' => 'OK',
            'message' => $adjustedBands),
            200);

    }

    #[Route('/band', name: 'band_category')]
    public function bandCategory(Request $request): Response
    {
        $form = $this->createForm(BandCategoryType::class);

        return $this->renderForm('band_category.html.twig', [
            'form' => $form,
        ]);
    }

    #[Route('/band-listing', name: 'band_listing', methods: ['POST'])]
    public function bandListing(Request $request, ManagerRegistry $doctrine): JsonResponse
    {
        if (!$request->isXmlHttpRequest()) {
            return new JsonResponse(array(
                'status' => 'Error',
                'message' => 'Error'),
                400);
        }

        $entityManager = $doctrine->getManager();

        if (isset($request->request)) {
            $start = $request->get('start');
            $limit = $request->get('limit');

            $start = intval($start);
            $limit = intval($limit);

            /** @var BandRepository $bandRepository */
            $bandRepository = $entityManager->getRepository(Band::class);


            $bands = $bandRepository->findAllLimited($start, $limit);

            if ($bands === null) {
                return new JsonResponse(array(
                    'status' => 'Error',
                    'message' => 'Error'),
                    400);
            }

            $adjustedBands = array();
            foreach ($bands as $band) {
                $adjustedBands[] = array(
                    'id' => $band->getId(),
                    'bandName' => $band->getBandName()
                );
            }

            return new JsonResponse(array(
                'status' => 'OK',
                'message' => $adjustedBands),
                200);
        }

        return new JsonResponse(array(
            'status' => 'Error',
            'message' => 'Error'),
            400);
    }

    #[Route('/band/{id}', name: 'band_detail', methods: ['GET'])]
    public function bandDetail(string $id, ManagerRegistry $doctrine): Response
    {
        $entityManager = $doctrine->getManager();

        /** @var BandRepository $bandRepository */
        $bandRepository = $entityManager->getRepository(Band::class);

        $band = $bandRepository->find($id);
        $bandMusicians = [];

        if ($band) {
            $bandMusicians = $band->getMusicians()->map(function ($band) {
                return [
                    'id' => $band->getId(),
                    'artistName' => $band->getArtistName()
                ];
            })->toArray();
        }

        $form = $this->createForm(BandDetailType::class, [$band]);

        return $this->renderForm('band_detail.html.twig', [
            'form' => $form,
            'bandMusicians' => $bandMusicians
        ]);
    }

    #[Route('/band/{id}', name: 'band_detail_save', methods: ['POST'])]
    public function bandDetailSave(string $id, Request $request, ManagerRegistry $doctrine): Response
    {
        $bandData = $request->request->all('band_detail');

        $entityManager = $doctrine->getManager();

        /** @var MusicianRepository $musicianRepository */
        $musicianRepository = $entityManager->getRepository(Musician::class);
        $bandRepository = $entityManager->getRepository(Band::class);

        $band = $bandRepository->find($id);

        if (!$band) {
            $band = new Band();
        }

        $band->setBandName($bandData['bandName']);

        $currentMusicians = $band->getMusicians();

        foreach ($currentMusicians as $currentMusician) {
            $band->removeMusician($currentMusician);
        }

        $bandMusicians = [];

        if (is_array($bandData['musicians'])) {
            $newMusicians = $musicianRepository->findBy(array('id' => array_keys($bandData['musicians'])));

            foreach ($newMusicians as $newMusician) {
                $band->addMusician($newMusician);
                $bandMusicians[] = [
                    'id' => $newMusician->getId(),
                    'artistName' => $newMusician->getArtistName()
                ];
            }
        }

        $bandRepository->save($band, true);

        $form = $this->createForm(BandDetailType::class, [$band]);

        return $this->renderForm('band_detail.html.twig', [
            'form' => $form,
            'bandMusicians' => $bandMusicians
        ]);
    }

    #[Route('/band/create', name: 'band_create', methods: ['GET'])]
    public function bandCreate(ManagerRegistry $doctrine): Response
    {
        $form = $this->createForm(BandDetailType::class, [null]);

        return $this->renderForm('band_detail.html.twig', [
            'form' => $form,
            'bandMusicians' => []
        ]);
    }
}