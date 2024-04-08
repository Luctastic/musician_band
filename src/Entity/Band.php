<?php

namespace App\Entity;

use App\Repository\BandRepository;
use Doctrine\Common\Collections\ArrayCollection;
use Doctrine\Common\Collections\Collection;
use Doctrine\ORM\Mapping as ORM;

#[ORM\Entity(repositoryClass: BandRepository::class)]
class Band
{
    #[ORM\Id]
    #[ORM\GeneratedValue]
    #[ORM\Column]
    private ?int $id = null;

    #[ORM\Column(length: 50)]
    private ?string $band_name = null;

    #[ORM\ManyToMany(targetEntity: Musician::class, inversedBy: 'bands')]
    private Collection $musicians;

    public function __construct()
    {
        $this->musicians = new ArrayCollection();
    }

    public function getId(): ?int
    {
        return $this->id;
    }

    public function getBandName(): ?string
    {
        return $this->band_name;
    }

    public function setBandName(string $band_name): self
    {
        $this->band_name = $band_name;

        return $this;
    }

    /**
     * @return Collection<int, Musician>
     */
    public function getMusicians(): Collection
    {
        return $this->musicians;
    }

    public function addMusician(Musician $musician): self
    {
        if (!$this->musicians->contains($musician)) {
            $this->musicians->add($musician);
        }

        return $this;
    }

    public function removeMusician(Musician $musician): self
    {
        $this->musicians->removeElement($musician);

        return $this;
    }

    public function __toString(): string
    {
        return $this->getBandName();
    }
}
