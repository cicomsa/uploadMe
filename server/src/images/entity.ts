import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm'
import { BaseEntity } from 'typeorm/repository/BaseEntity'

@Entity()
export default class Image extends BaseEntity {

  @PrimaryGeneratedColumn()
  id?: number
 
  @Column('text')
  image: string

}