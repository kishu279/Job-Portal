-- CreateTable
CREATE TABLE "Jobs" (
    "jobId" SERIAL NOT NULL,
    "companyName" TEXT NOT NULL,
    "requirement" TEXT,
    "tech" TEXT[],
    "salary" DOUBLE PRECISION NOT NULL,
    "location" TEXT,
    "workingHours" INTEGER,
    "postedAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "hrId" INTEGER NOT NULL,

    CONSTRAINT "Jobs_pkey" PRIMARY KEY ("jobId")
);

-- AddForeignKey
ALTER TABLE "Jobs" ADD CONSTRAINT "Jobs_hrId_fkey" FOREIGN KEY ("hrId") REFERENCES "User"("userId") ON DELETE RESTRICT ON UPDATE CASCADE;
