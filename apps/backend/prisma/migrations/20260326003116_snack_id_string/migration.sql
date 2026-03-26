/*
  Warnings:

  - The primary key for the `Snack` table will be changed. If it partially fails, the table could be left without primary key constraint.

*/
-- AlterTable
ALTER TABLE "Snack" DROP CONSTRAINT "Snack_pkey",
ALTER COLUMN "id" DROP DEFAULT,
ALTER COLUMN "id" SET DATA TYPE TEXT,
ADD CONSTRAINT "Snack_pkey" PRIMARY KEY ("id");
DROP SEQUENCE "Snack_id_seq";
