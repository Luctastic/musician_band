<?php

namespace App\Form;

use App\Entity\Musician;
use App\Repository\MusicianRepository;
use Symfony\Component\Form\AbstractType;
use Symfony\Component\OptionsResolver\OptionsResolver;
use Symfony\UX\Autocomplete\Form\AsEntityAutocompleteField;
use Symfony\UX\Autocomplete\Form\ParentEntityAutocompleteType;

#[AsEntityAutocompleteField]
class MusicianAutocompleteField extends AbstractType
{
    public function configureOptions(OptionsResolver $resolver)
    {
        $resolver->setDefaults([
            'class' => Musician::class,
            'placeholder' => 'Künstlername oder Nachname ...',
            'searchable_fields' => ['artist_name', 'last_name'],

            'query_builder' => function(MusicianRepository $musicianRepository) {
                return $musicianRepository->createQueryBuilder('musician');
            },
            'no_results_found_text' => 'Keine Musiker gefunden',
            'no_more_results_text' => ''
        ]);
    }

    public function getParent(): string
    {
        return ParentEntityAutocompleteType::class;
    }
}
