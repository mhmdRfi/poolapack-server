-- DropForeignKey
ALTER TABLE `Kecamatan` DROP FOREIGN KEY `Kecamatan_cityId_fkey`;

-- DropForeignKey
ALTER TABLE `Siswa` DROP FOREIGN KEY `Siswa_kecamatanId_fkey`;

-- AlterTable
ALTER TABLE `City` ADD COLUMN `deletedAt` DATETIME(3) NULL;

-- AlterTable
ALTER TABLE `Kecamatan` ADD COLUMN `deletedAt` DATETIME(3) NULL,
    MODIFY `cityId` INTEGER NULL;

-- AlterTable
ALTER TABLE `Siswa` ADD COLUMN `deletedAt` DATETIME(3) NULL,
    MODIFY `kecamatanId` INTEGER NULL;

-- AddForeignKey
ALTER TABLE `Siswa` ADD CONSTRAINT `Siswa_kecamatanId_fkey` FOREIGN KEY (`kecamatanId`) REFERENCES `Kecamatan`(`id`) ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Kecamatan` ADD CONSTRAINT `Kecamatan_cityId_fkey` FOREIGN KEY (`cityId`) REFERENCES `City`(`id`) ON DELETE SET NULL ON UPDATE CASCADE;
