<?php

namespace App\Form\Type;

use App\Form\BandAutocompleteField;
use Symfony\Component\Form\AbstractType;
use Symfony\Component\Form\FormBuilderInterface;

class BandCategoryType extends AbstractType
{
    public function buildForm(FormBuilderInterface $builder, array $options): void
    {
        $builder
            ->add('Band', BandAutocompleteField::class)
        ;
    }
}