import {Body, Controller, Get, Injectable, Param, Post} from '@nestjs/common';
import {RolesService} from "./roles.service";
import {RolesCreateDto} from "./dto/roles-create-dto";


@Controller('roles')
export class RolesController {

  constructor(
    private rolesService: RolesService
  ) {}



  @Get('/:value')
  getByValue(@Param('value') value: string) {
    return this.rolesService.getRoleByValue(value)
  }


  @Post()
  createRoles(@Body() rolesDto: RolesCreateDto) {
    return this.rolesService.createRole(rolesDto)
  }

}
