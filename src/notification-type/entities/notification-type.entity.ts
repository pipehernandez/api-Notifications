import { Template } from "src/templates/entities/template.entity";
import { Column, Entity, JoinColumn, ManyToOne, PrimaryColumn } from "typeorm";

@Entity('notificationTypes')
export class NotificationType {
    @PrimaryColumn()
    id: number;

    @Column()
    name: string;

    @Column()
    templateId:number;

    @ManyToOne(() => Template, template => template.id)
    @JoinColumn({name:"templateId"})
    template: Template;
}
