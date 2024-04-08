<?php

declare(strict_types=1);

namespace DoctrineMigrations;

use Doctrine\DBAL\Schema\Schema;
use Doctrine\Migrations\AbstractMigration;

/**
 * Auto-generated Migration: Please modify to your needs!
 */
final class Version20221202085759 extends AbstractMigration
{
    public function getDescription(): string
    {
        return '';
    }

    public function up(Schema $schema): void
    {
        // this up() migration is auto-generated, please modify it to your needs
        $this->addSql('CREATE TABLE band (id INT AUTO_INCREMENT NOT NULL, band_name VARCHAR(50) NOT NULL, PRIMARY KEY(id)) DEFAULT CHARACTER SET utf8 COLLATE `utf8_unicode_ci` ENGINE = InnoDB');
        $this->addSql('CREATE TABLE band_musician (band_id INT NOT NULL, musician_id INT NOT NULL, INDEX IDX_F13A002D49ABEB17 (band_id), INDEX IDX_F13A002D9523AA8A (musician_id), PRIMARY KEY(band_id, musician_id)) DEFAULT CHARACTER SET utf8 COLLATE `utf8_unicode_ci` ENGINE = InnoDB');
        $this->addSql('ALTER TABLE band_musician ADD CONSTRAINT FK_F13A002D49ABEB17 FOREIGN KEY (band_id) REFERENCES band (id) ON DELETE CASCADE');
        $this->addSql('ALTER TABLE band_musician ADD CONSTRAINT FK_F13A002D9523AA8A FOREIGN KEY (musician_id) REFERENCES musician (id) ON DELETE CASCADE');
    }

    public function down(Schema $schema): void
    {
        // this down() migration is auto-generated, please modify it to your needs
        $this->addSql('ALTER TABLE band_musician DROP FOREIGN KEY FK_F13A002D49ABEB17');
        $this->addSql('ALTER TABLE band_musician DROP FOREIGN KEY FK_F13A002D9523AA8A');
        $this->addSql('DROP TABLE band');
        $this->addSql('DROP TABLE band_musician');
    }
}
