<?php

namespace App\Repository;

use App\Entity\Musician;
use Doctrine\Bundle\DoctrineBundle\Repository\ServiceEntityRepository;
use Doctrine\Persistence\ManagerRegistry;

/**
 * @extends ServiceEntityRepository<Musician>
 *
 * @method Musician|null find($id, $lockMode = null, $lockVersion = null)
 * @method Musician|null findOneBy(array $criteria, array $orderBy = null)
 * @method Musician[]    findAll()
 * @method Musician[]    findBy(array $criteria, array $orderBy = null, $limit = null, $offset = null)
 */
class MusicianRepository extends ServiceEntityRepository
{
    public function __construct(ManagerRegistry $registry)
    {
        parent::__construct($registry, Musician::class);
    }

    public function save(Musician $entity, bool $flush = false): void
    {
        $this->getEntityManager()->persist($entity);

        if ($flush) {
            $this->getEntityManager()->flush();
        }
    }

    public function remove(Musician $entity, bool $flush = false): void
    {
        $this->getEntityManager()->remove($entity);

        if ($flush) {
            $this->getEntityManager()->flush();
        }
    }

    /**
     * @return Musician[] Returns an array of Band objects
     */
    public function findByArtistName(string $artistName): array
    {
        return $this->createQueryBuilder('m')
            ->andWhere('m.artist_name LIKE :val')
            ->setParameter('val', '%' . $artistName . '%')
            ->orderBy('m.id', 'ASC')
            ->getQuery()
            ->getResult()
            ;
    }

    /**
     * @return Musician[] Returns an array of Musician objects
     */
    public function findAllLimited(int $start, int $limit): array
    {
        return $this->createQueryBuilder('m')
            ->orderBy('m.artist_name', 'ASC')
            ->setFirstResult($start)
            ->setMaxResults($limit)
            ->getQuery()
            ->getResult()
        ;
    }
}
