import {Entity,Column, ManyToOne, PrimaryGeneratedColumn, BaseEntity, JoinColumn} from 'typeorm'
import { Student } from './Student'
import { Subject } from './Subject'

@Entity()
export class Mark extends BaseEntity{
    @PrimaryGeneratedColumn('identity', {
        generatedIdentity: 'ALWAYS'
      })
    id : number
    @Column({
        type:'int'
    })
    mark: number

    @ManyToOne(
        () => Subject,
        subject => subject.marks,
        {
            eager: true
        }
    )
    @JoinColumn()
    subject: Subject

    @ManyToOne(
        () => Student,
        student => student.marks,
        {
            eager: true
        }
    )
    @JoinColumn()
    student: Student
}