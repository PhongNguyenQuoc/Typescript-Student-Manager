import {Entity,Column, PrimaryGeneratedColumn, OneToMany, BaseEntity} from 'typeorm'
import { Status } from '../utils/EnumStatus'
import { Mark } from './Mark'

@Entity()
export class Subject extends BaseEntity{
    @PrimaryGeneratedColumn('identity', {
        generatedIdentity: 'ALWAYS'
      })
    id : number

    @Column({
        unique: true
    })
    name: string

    @Column({
        type: 'int'
    })
    credits: number

    @Column({
        type:"int"
    })
    semester: number

    @Column({
        enum: Status,
        default: 'active'
    })
    status: Status

    @OneToMany(
        () => Mark,
        mark => mark.subject,
        {
            cascade: true,
            onDelete: 'CASCADE',
            onUpdate: 'CASCADE'
        }
    )
    marks: Mark[]

}