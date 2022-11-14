import {Entity,Column, PrimaryGeneratedColumn,BaseEntity, CreateDateColumn} from 'typeorm'
import {Status} from '../utils/EnumStatus'
import {Roles} from '../utils/EnumRoles'
import * as bcrypt from "bcryptjs";

@Entity()
export class User extends BaseEntity { 
    @PrimaryGeneratedColumn('identity', {
        generatedIdentity: 'ALWAYS'
      })
    id: number

    @Column({
        nullable: false,
        unique: true,
    })
    user_name: string

    @Column({
        nullable: false,
        type: 'text',
    })
    password: string

    @Column()
    full_name: string
    
    @Column({
        enum: Status,
        default: 'active'
    })
    status: Status

    @CreateDateColumn()
    create_at: Date

    @Column({
        enum: Roles,
    })
    role: Roles
}