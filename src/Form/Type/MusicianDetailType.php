<?php

namespace App\Form\Type;

use App\Entity\Musician;
use Symfony\Component\Form\AbstractType;
use Symfony\Component\Form\Extension\Core\Type\NumberType;
use Symfony\Component\Form\Extension\Core\Type\SubmitType;
use Symfony\Component\Form\Extension\Core\Type\TextType;
use Symfony\Component\Form\FormBuilderInterface;

class MusicianDetailType extends AbstractType
{
    public function buildForm(FormBuilderInterface $builder, array $options): void
    {
        /** @var Musician $musician */
        $musician = $options['data'][0];

        $builder->add('submit', SubmitType::class, [
            'label' => 'Speichern'
        ]);

        $builder->add('artistName', TextType::class, [
            'label' => 'Künstlername',
            'data' => $musician ? $musician->getArtistName() : '',
            'required' => true
        ]);

        $builder->add('firstName', TextType::class, [
            'label' => 'Vorname',
            'data' => $musician ? $musician->getFirstName() : '',
            'required' => true
        ]);

        $builder->add('lastName', TextType::class, [
            'label' => 'Nachname',
            'data' => $musician ? $musician->getLastName() : '',
            'required' => true
        ]);

        $builder->add('address', TextType::class, [
            'label' => 'Adresse',
            'data' => $musician ? $musician->getAddress() : '',
            'required' => true
        ]);

        $builder->add('telephone', TextType::class, [
            'label' => 'Telefon',
            'data' => $musician ? $musician->getPhone() : '',
            'required' => true
        ]);

        $builder->add('hourlyFee', NumberType::class, [
            'label' => 'Stundenhonorar',
            'data' => $musician ? $musician->getHourlyFee() : 0,
            'required' => true,
            'attr' => [
                'steps' => '.01',
                'min' => '0',
                'max' => '10000',
                'pattern' => '^\d*(\.\d{0,2})?$'
            ],
            'scale' => 2
        ]);
    }
}