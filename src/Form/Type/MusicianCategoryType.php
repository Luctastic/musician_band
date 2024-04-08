<?php

namespace App\Form\Type;

use App\Form\MusicianAutocompleteField;
use Symfony\Component\Form\AbstractType;
use Symfony\Component\Form\FormBuilderInterface;

class MusicianCategoryType extends AbstractType
{
    public function buildForm(FormBuilderInterface $builder, array $options): void
    {
        $builder
            ->add('Musiker', MusicianAutocompleteField::class)
        ;
    }
}