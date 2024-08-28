import { Template } from "src/templates/entities/template.entity";
import { Column, Entity, ManyToOne, PrimaryColumn } from "typeorm";

@Entity('notificationTypes')
export class NotificationType {
    @PrimaryColumn()
    id: number;

    @Column()
    name: string;

    @ManyToOne(() => Template, template => template.id)
    template: Template;
}
