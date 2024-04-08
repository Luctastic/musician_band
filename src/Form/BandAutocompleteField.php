<?php

namespace App\Form;

use App\Entity\Band;
use App\Repository\BandRepository;
use Symfony\Component\Form\AbstractType;
use Symfony\Component\OptionsResolver\OptionsResolver;
use Symfony\UX\Autocomplete\Form\AsEntityAutocompleteField;
use Symfony\UX\Autocomplete\Form\ParentEntityAutocompleteType;

#[AsEntityAutocompleteField]
class BandAutocompleteField extends AbstractType
{
    public function configureOptions(OptionsResolver $resolver)
    {
        $resolver->setDefaults([
            'class' => Band::class,
            'placeholder' => 'Bandname ...',
            'searchable_fields' => ['band_name'],

            'query_builder' => function (BandRepository $bandRepository) {
                return $bandRepository->createQueryBuilder('band');
            },
            'no_results_found_text' => 'Keine Bands gefunden',
            'no_more_results_text' => ''
        ]);
    }

    public function getParent(): string
    {
        return ParentEntityAutocompleteType::class;
    }
}
