/*
  Warnings:

  - You are about to drop the column `siswaId` on the `City` table. All the data in the column will be lost.
  - You are about to drop the column `siswaId` on the `Kecamatan` table. All the data in the column will be lost.
  - Made the column `cityId` on table `Kecamatan` required. This step will fail if there are existing NULL values in that column.
  - Added the required column `kecamatanId` to the `Siswa` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE `City` DROP FOREIGN KEY `City_siswaId_fkey`;

-- DropForeignKey
ALTER TABLE `Kecamatan` DROP FOREIGN KEY `Kecamatan_cityId_fkey`;

-- DropForeignKey
ALTER TABLE `Kecamatan` DROP FOREIGN KEY `Kecamatan_siswaId_fkey`;

-- AlterTable
ALTER TABLE `City` DROP COLUMN `siswaId`;

-- AlterTable
ALTER TABLE `Kecamatan` DROP COLUMN `siswaId`,
    MODIFY `cityId` INTEGER NOT NULL;

-- AlterTable
ALTER TABLE `Siswa` ADD COLUMN `kecamatanId` INTEGER NOT NULL;

-- AddForeignKey
ALTER TABLE `Siswa` ADD CONSTRAINT `Siswa_kecamatanId_fkey` FOREIGN KEY (`kecamatanId`) REFERENCES `Kecamatan`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Kecamatan` ADD CONSTRAINT `Kecamatan_cityId_fkey` FOREIGN KEY (`cityId`) REFERENCES `City`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;
