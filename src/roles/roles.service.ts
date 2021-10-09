import { Injectable } from '@nestjs/common';
import {Roles} from "./roles.model";
import {InjectModel} from "@nestjs/sequelize";
import {RolesCreateDto} from "./dto/roles-create-dto";

@Injectable()
export class RolesService {

  constructor(
    @InjectModel(Roles)
    private roleRepository: typeof Roles
  ) {}


  async createRole(dto: RolesCreateDto) {
    const role = await this.roleRepository.create(dto)

    return role
  }


  async getRoleByValue(value: string) {
    const role = await this.roleRepository.findOne({where: {value}})

    return role
  }

}
