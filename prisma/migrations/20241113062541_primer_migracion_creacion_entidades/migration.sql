-- CreateTable
CREATE TABLE "User" (
    "id" SERIAL NOT NULL,
    "id_type" TEXT NOT NULL,
    "id_number" INTEGER NOT NULL,
    "phone" TEXT NOT NULL,
    "address" TEXT NOT NULL,
    "city" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "password" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "User_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "User_id_number_key" ON "User"("id_number");

-- CreateIndex
CREATE UNIQUE INDEX "User_email_key" ON "User"("email");
