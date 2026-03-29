/*
  Warnings:

  - You are about to drop the column `lasstName` on the `User` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "User" DROP COLUMN "lasstName",
ADD COLUMN     "lastName" TEXT;
