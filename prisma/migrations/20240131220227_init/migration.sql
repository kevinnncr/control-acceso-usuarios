-- CreateTable
CREATE TABLE "admin" (
    "Id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "password" TEXT NOT NULL,
    "email" TEXT NOT NULL,

    CONSTRAINT "admin_pkey" PRIMARY KEY ("Id")
);

-- CreateTable
CREATE TABLE "Users" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "lastname" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "password" TEXT NOT NULL,
    "rol" TEXT NOT NULL,

    CONSTRAINT "Users_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "AccessLogs" (
    "ip" SERIAL NOT NULL,
    "idUser" INTEGER NOT NULL,
    "Successfullogin" BOOLEAN NOT NULL,

    CONSTRAINT "AccessLogs_pkey" PRIMARY KEY ("ip")
);

-- CreateIndex
CREATE UNIQUE INDEX "admin_password_key" ON "admin"("password");

-- CreateIndex
CREATE UNIQUE INDEX "Users_email_key" ON "Users"("email");

-- CreateIndex
CREATE UNIQUE INDEX "Users_password_key" ON "Users"("password");

-- AddForeignKey
ALTER TABLE "admin" ADD CONSTRAINT "admin_Id_fkey" FOREIGN KEY ("Id") REFERENCES "AccessLogs"("ip") ON DELETE RESTRICT ON UPDATE CASCADE;
