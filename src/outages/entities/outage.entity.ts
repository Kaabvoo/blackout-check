import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class Outage {
    @PrimaryGeneratedColumn()
    id: number

    @Column()
    link?: string

    @Column({ nullable: true })
    http_code?: number

    @Column({ nullable: true })
    http_message?: string

    @Column({ type: Date })
    date: Date

    @Column()
    wasSuccessful: boolean

}
