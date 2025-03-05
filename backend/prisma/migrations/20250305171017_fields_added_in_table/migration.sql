/*
  Warnings:

  - Added the required column `description` to the `Jobs` table without a default value. This is not possible if the table is not empty.
  - Added the required column `bio` to the `Profile` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Jobs" ADD COLUMN     "description" TEXT NOT NULL;

-- AlterTable
ALTER TABLE "Profile" ADD COLUMN     "achievements" TEXT[],
ADD COLUMN     "bio" TEXT NOT NULL;
