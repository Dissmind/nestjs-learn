import { Module } from '@nestjs/common';
import { RolesService } from './roles.service';
import {SequelizeModule} from "@nestjs/sequelize";
import {User} from "../users/users.model";
import {RolesController} from "./roles.controller";
import {Roles} from "./roles.model";
import {UserRoles} from "./user-roles.model";



@Module({
  providers: [

    RolesService
  ],
  controllers: [
    RolesController
  ],
  imports: [
    SequelizeModule.forFeature([
      Roles,
      User,
      UserRoles
    ])
  ]
})
export class RolesModule {}
