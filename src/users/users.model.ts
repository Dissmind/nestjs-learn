import {BelongsToMany, Column, DataType, Model, Table} from "sequelize-typescript";
import {ApiProperty} from "@nestjs/swagger";
import {Roles} from "../roles/roles.model";
import {UserRoles} from "../roles/user-roles.model";


interface UserCreationAttrs {
  email: string
  password: string
}

@Table({tableName: 'users'})
export class User extends Model<User, UserCreationAttrs>  {

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
    example: 'user@gmail.com',
    description: 'Почтовый адрес'
  })
  @Column({
    type: DataType.STRING,
    unique: true,
    allowNull: false
  })
  email: string

  @ApiProperty({
    example: '123123',
    description: 'Пароль'
  })
  @Column({
    type: DataType.STRING,
    allowNull: false
  })
  password: string

  @ApiProperty({
    example: false,
    description: 'Статус бана'
  })
  @Column({
    type: DataType.BOOLEAN,
    defaultValue: false
  })
  banned: boolean

  @ApiProperty({
    example: 'Флуд',
    description: 'Причина бана'
  })
  @Column({
    type: DataType.STRING,
    allowNull: true
  })
  badReason: string


  @BelongsToMany(() => Roles, () => UserRoles)
  roles: Array<Roles>
}