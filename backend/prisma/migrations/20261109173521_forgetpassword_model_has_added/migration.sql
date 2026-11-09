-- CreateTable
CREATE TABLE "Reset_token" (
    "id" SERIAL NOT NULL,
    "token" VARCHAR(255) NOT NULL,
    "userId" INTEGER NOT NULL,
    "expiresAt" TIMESTAMP(3) NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "Reset_token_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "Reset_token_token_key" ON "Reset_token"("token");

-- CreateIndex
CREATE UNIQUE INDEX "Reset_token_userId_key" ON "Reset_token"("userId");

-- AddForeignKey
ALTER TABLE "Reset_token" ADD CONSTRAINT "Reset_token_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE CASCADE ON UPDATE CASCADE;
