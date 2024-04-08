<?php

namespace App\Controller;

use App\Entity\Band;
use App\Entity\Musician;
use App\Form\Type\MusicianCategoryType;
use App\Form\Type\MusicianDetailType;
use App\Repository\MusicianRepository;
use Doctrine\Persistence\ManagerRegistry;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\JsonResponse;

class MusicianController extends AbstractController
{
    /**
     * @Route("/", name="index")
     * @return Response
     */
    public function index(): Response
    {
        return $this->render('homepage.html.twig');
    }

    #[Route('/musicians', name: 'musicians', methods: ['GET'])]
    public function musicians(Request $request, ManagerRegistry $doctrine): Response
    {
        $entityManager = $doctrine->getManager();

        $musicianArtistName = $request->get('q');

        /** @var MusicianRepository $musicianRepository */
        $musicianRepository = $entityManager->getRepository(Musician::class);

        $musicians = $musicianRepository->findByArtistName($musicianArtistName);

        $adjustedMusicians = array();

        foreach ($musicians as $musician) {
            $adjustedMusicians[] = array(
                'id' => $musician->getId(),
                'artistName' => $musician->getArtistName()
            );
        }

        return new JsonResponse(array(
            'status' => 'OK',
            'message' => $adjustedMusicians),
            200);

    }

    #[Route('/musician', name: 'musician_category')]
    public function musicianCategory(Request $request): Response
    {
        $form = $this->createForm(MusicianCategoryType::class);

        return $this->renderForm('musician_category.html.twig', [
            'form' => $form,
        ]);
    }

    #[Route('/musician-listing', name: 'musician_listing', methods: ['POST'])]
    public function musicianListing(Request $request, ManagerRegistry $doctrine): JsonResponse
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

            /** @var MusicianRepository $musicianRepository */
            $musicianRepository = $entityManager->getRepository(Musician::class);


            $musicians = $musicianRepository->findAllLimited($start, $limit);

            if ($musicians === null) {
                return new JsonResponse(array(
                    'status' => 'Error',
                    'message' => 'Error'),
                    400);
            }

            $adjustedMusicians = array();
            foreach ($musicians as $musician) {
                $adjustedMusicians[] = array(
                    'id' => $musician->getId(),
                    'artistName' => $musician->getArtistName(),
                    'lastName' => $musician->getLastName()
                );
            }

            return new JsonResponse(array(
                'status' => 'OK',
                'message' => $adjustedMusicians),
                200);
        }

        return new JsonResponse(array(
            'status' => 'Error',
            'message' => 'Error'),
            400);
    }

    #[Route('/musician/{id}', name: 'musician_detail', methods: ['GET'])]
    public function musicianDetail(string $id, ManagerRegistry $doctrine): Response
    {
        $entityManager = $doctrine->getManager();

        /** @var MusicianRepository $musicianRepository */
        $musicianRepository = $entityManager->getRepository(Musician::class);

        $musician = $musicianRepository->find($id);
        $musicianBands = [];

        if ($musician) {
            $musicianBands = $musician->getBands()->map(function ($band) {
                return [
                    'id' => $band->getId(),
                    'bandName' => $band->getBandName()
                ];
            })->toArray();
        }

        $form = $this->createForm(MusicianDetailType::class, [$musician]);

        return $this->renderForm('musician_detail.html.twig', [
            'form' => $form,
            'musicianBands' => $musicianBands
        ]);
    }

    #[Route('/musician/{id}', name: 'musician_detail_save', methods: ['POST'])]
    public function musicianDetailSave(string $id, Request $request, ManagerRegistry $doctrine): Response
    {
        $musicianData = $request->request->all('musician_detail');

        $entityManager = $doctrine->getManager();

        /** @var MusicianRepository $musicianRepository */
        $musicianRepository = $entityManager->getRepository(Musician::class);
        $bandRepository = $entityManager->getRepository(Band::class);

        $musician = $musicianRepository->find($id);

        if (!$musician) {
            $musician = new Musician();
        }

        $musician->setArtistName($musicianData['artistName']);
        $musician->setFirstName($musicianData['firstName']);
        $musician->setLastName($musicianData['lastName']);
        $musician->setAddress($musicianData['address']);
        $musician->setPhone($musicianData['telephone']);
        $musician->setHourlyFee($musicianData['hourlyFee']);

        $currentBands = $musician->getBands();

        foreach ($currentBands as $currentBand) {
            $musician->removeBand($currentBand);
        }

        $musicianBands = [];

        if (is_array($musicianData['bands'])) {
            $newBands = $bandRepository->findBy(array('id' => array_keys($musicianData['bands'])));

            foreach ($newBands as $newBand) {
                $musician->addBand($newBand);
                $musicianBands[] = [
                    'id' => $newBand->getId(),
                    'bandName' => $newBand->getBandName()
                ];
            }
        }

        $musicianRepository->save($musician, true);

        $form = $this->createForm(MusicianDetailType::class, [$musician]);

        return $this->renderForm('musician_detail.html.twig', [
            'form' => $form,
            'musicianBands' => $musicianBands
        ]);
    }

    #[Route('/musician/create', name: 'musician_create', methods: ['GET'])]
    public function musicianCreate(ManagerRegistry $doctrine): Response
    {
        $form = $this->createForm(MusicianDetailType::class, [null]);

        return $this->renderForm('musician_detail.html.twig', [
            'form' => $form,
            'musicianBands' => []
        ]);
    }
}