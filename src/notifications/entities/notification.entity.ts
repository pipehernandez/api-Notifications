import { Template } from "src/templates/entities/template.entity";
import { Column, Entity, JoinColumn, JoinTable, ManyToMany, OneToOne, PrimaryGeneratedColumn } from "typeorm";

@Entity('notifications')
export class Register {
    @PrimaryGeneratedColumn('uuid')
    id: string;

    @Column()
    sentDate: Date;

    @Column()
    serverResponse: String;

    @Column()
    messageDescription: string;

    // @ManyToMany(() => User, user => user.id)
    // users: User[];

    @OneToOne(() => Template, template => template.id)
    @JoinColumn()
    template: Template;
}
