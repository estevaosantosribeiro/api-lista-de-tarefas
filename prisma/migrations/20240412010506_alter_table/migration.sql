/*
  Warnings:

  - You are about to drop the `tests` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropTable
DROP TABLE "tests";

-- CreateTable
CREATE TABLE "tasks" (
    "id" SERIAL NOT NULL,
    "title" TEXT NOT NULL,
    "status" TEXT NOT NULL,

    CONSTRAINT "tasks_pkey" PRIMARY KEY ("id")
);
