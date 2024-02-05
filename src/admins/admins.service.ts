import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateAdminDto } from './dto/create-admin.dto';
import { UpdateAdminDto } from './dto/update-admin.dto';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class AdminsService {
  constructor(private readonly prisma:PrismaService){}
  async CreateAdmin(createAdminDto:CreateAdminDto){
    const CreatedAdmin = await this.prisma.admin.create({
      data: createAdminDto,
    });
    return CreatedAdmin;
  }

  async getAllCreateAdmin() {
    const allAdmins = await this.prisma.admin.findMany();
    return allAdmins;
  }

  async getAdminById(adminId:number){
    const admin = await this.prisma.admin.findUnique({
      where:{Id:adminId},
    });
    if(!admin){
      throw new NotFoundException(`Admin with ID  "${adminId}" not found`);
    }
    return admin;

  }

  async updateAdmin(adminId: number, updateAdminDto: UpdateAdminDto) {
    const updatedAdmin = await this.prisma.admin.update({
      where: { Id: adminId },
      data: updateAdminDto,
    });

    if (!updatedAdmin) {
      throw new NotFoundException(`Admin with ID ${adminId} not found`);
    }

    return updatedAdmin;
  }

  async patchAdmin(adminId: number, updateAdminDto: UpdateAdminDto) {
    const patchedAdmin = await this.prisma.admin.update({
      where: { Id:adminId },
      data: updateAdminDto
    });
    if (!patchedAdmin) {
      throw new NotFoundException(`Admin with Id ${adminId} not found`);
    }
    return patchedAdmin;
  }

  async deleteAdmin(adminId: number, ) {
    const deleteAdmin = await this.prisma.admin.delete({
      where: { Id: adminId },
    });
    if (!deleteAdmin) {
      throw new NotFoundException(`Admin with ID  ${adminId} not found`);
    }
    return deleteAdmin;
  }


}
