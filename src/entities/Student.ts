import {Entity,Column, PrimaryGeneratedColumn, OneToMany, BaseEntity} from 'typeorm'
import { Gender } from '../utils/EnumGender'
import { Status } from '../utils/EnumStatus'
import { Mark } from './Mark'

@Entity()
export class Student extends BaseEntity{
    @PrimaryGeneratedColumn('identity', {
        generatedIdentity: 'ALWAYS'
      })
    id: number

    @Column()
    first_name: string

    @Column()
    last_name: string

    @Column()
    birth_day: Date

    @Column({
        enum: Gender
    })
    gender: Gender

    @Column()
    birth_place: string

    @Column()
    address: string

    @Column()
    phone: String

    @Column()
    entry_point: number

    @Column({
        enum: Status,
        default: 'active'
    })
    status: Status

    @OneToMany(
        () => Mark,
        mark => mark.student,
        {
            cascade: true,
            onDelete: 'CASCADE',
            onUpdate: 'CASCADE'
        }
    )
    marks: Mark[]
}