<?php

namespace App\Form\Type;

use App\Entity\Band;
use Symfony\Component\Form\AbstractType;
use Symfony\Component\Form\Extension\Core\Type\SubmitType;
use Symfony\Component\Form\Extension\Core\Type\TextType;
use Symfony\Component\Form\FormBuilderInterface;

class BandDetailType extends AbstractType
{
    public function buildForm(FormBuilderInterface $builder, array $options): void
    {
        /** @var Band $band */
        $band = $options['data'][0];

        $builder->add('submit', SubmitType::class, [
            'label' => 'Speichern'
        ]);

        $builder->add('bandName', TextType::class, [
            'label' => 'Bandname',
            'data' => $band ? $band->getBandName() : '',
            'required' => true
        ]);
    }
}