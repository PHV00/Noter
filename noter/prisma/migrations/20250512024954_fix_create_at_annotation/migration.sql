/*
  Warnings:

  - You are about to drop the column `creeatAt` on the `annotation` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE `annotation` DROP COLUMN `creeatAt`,
    ADD COLUMN `creatAt` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3);
