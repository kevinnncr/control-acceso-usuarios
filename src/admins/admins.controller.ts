import { Controller, Get, Post, Body, Patch, Param, Delete, Put, Query } from '@nestjs/common';
import { AdminsService } from './admins.service';
import { CreateAdminDto } from './dto/create-admin.dto';
import { UpdateAdminDto } from './dto/update-admin.dto';

@Controller('admins')
export class AdminsController {
  constructor(private readonly adminsService: AdminsService) {}

  @Post()
  CreateAdmin(@Body() createAdminDto: CreateAdminDto) {
    return this.adminsService.CreateAdmin(createAdminDto);
  }

  @Get()
  getAllCreateAdmin() {
    return this.adminsService.getAllCreateAdmin();
  }

  @Get(':id')
  getAdminById(@Param('id') adminId: string) {
    return this.adminsService.getAdminById(+adminId);
  }
  @Put(':id')
  updateAdmin(@Param('id') adminId: string, @Body() updateAdminDto: UpdateAdminDto) {
    return this.adminsService.updateAdmin(+adminId, updateAdminDto);
  }

  @Patch(':id')
  patchAdmin(@Query('id') adminId: string, @Body() updateAdminDto: UpdateAdminDto) {
    return this.adminsService.patchAdmin(+adminId, updateAdminDto);
  }

  @Delete(':id')
   deleteAdmin(@Param('id') adminId: string) {
    return this.adminsService.deleteAdmin(+adminId);
  }
}
