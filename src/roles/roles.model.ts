import {BelongsToMany, Column, DataType, HasMany, Model, Table} from "sequelize-typescript";
import {ApiProperty} from "@nestjs/swagger";
import {User} from "../users/users.model";
import {UserRoles} from "./user-roles.model";


interface RolesCreationAttrs {
  value: string
  description: string
}

@Table({tableName: 'roles'})
export class Roles extends Model<Roles, RolesCreationAttrs>  {

  @ApiProperty({
    example: '1',
    description: 'Уникальный идентификатор'
  })
  @Column({
    type: DataType.INTEGER,
    unique: true,
    autoIncrement: true,
    primaryKey: true
  })
  id: number

  @ApiProperty({
    example: 'admin',
    description: 'Роль пользователя'
  })
  @Column({
    type: DataType.STRING,
    unique: true,
    allowNull: false
  })
  value: string

  @ApiProperty({
    example: 'Администратор',
    description: 'Описание роли пользователя'
  })
  @Column({
    type: DataType.STRING,
    allowNull: false
  })
  description: string


  @BelongsToMany(() => User, () => UserRoles)
  users: Array<User>


}

// BelongsTo
// HasMany

/*

 Для User
 @HasMany(() => Post)
 posts: Post[]

 User имеет много Post



 Для Post
 @BelongsTo(() => User)
 author: User
 Post имеет один User


*/