import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();
async function seed(){
    const saadmin = await prisma.admin.create({
        data:{
            name: 'heiddy ',
            email:'hp@gmail.com',
            password: 'saAdmin'
        }
    })

    const users = await prisma.users.create({
      data:{
        name : "Lali", 
        lastname:"Lopez",
        email:"csdc@gmail.com",
        password: "siaja",
        rol:"invitado"
      }
    })
    const AccessLogs = await prisma.accessLogs.create({
      data:{
        idUser: 15,
        Successfullogin: true,
        
      }
    })
    console.log('Seeded admin account with id :', saadmin.Id);
}

 


seed()
  .catch((error) => {
    throw error;
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
