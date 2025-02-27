/*
  Warnings:

  - Added the required column `contactInfo` to the `User` table without a default value. This is not possible if the table is not empty.
  - Added the required column `validProof` to the `User` table without a default value. This is not possible if the table is not empty.

*/
-- CreateEnum
CREATE TYPE "Role" AS ENUM ('applicant', 'hr');

-- AlterTable
ALTER TABLE "User" ADD COLUMN     "contactInfo" TEXT NOT NULL,
ADD COLUMN     "role" "Role" NOT NULL DEFAULT 'applicant',
ADD COLUMN     "validProof" TEXT NOT NULL;

-- CreateTable
CREATE TABLE "Profile" (
    "profileId" SERIAL NOT NULL,
    "hired" BOOLEAN NOT NULL DEFAULT false,
    "company" TEXT,
    "tech" TEXT[],
    "experience" INTEGER NOT NULL,
    "lastCompany" TEXT[],
    "interest" TEXT[],
    "updatedAt" TIMESTAMP(3) NOT NULL,
    "userId" INTEGER NOT NULL,

    CONSTRAINT "Profile_pkey" PRIMARY KEY ("profileId")
);

-- CreateIndex
CREATE UNIQUE INDEX "Profile_userId_key" ON "Profile"("userId");

-- AddForeignKey
ALTER TABLE "Profile" ADD CONSTRAINT "Profile_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("userId") ON DELETE RESTRICT ON UPDATE CASCADE;
