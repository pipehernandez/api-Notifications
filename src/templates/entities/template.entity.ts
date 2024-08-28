import { NotificationType } from "src/notification-type/entities/notification-type.entity";
import { Column, Entity, OneToMany, PrimaryColumn } from "typeorm";

@Entity('templates')
export class Template {
    @PrimaryColumn()
    id: number;

    @Column()
    body: Text;

    @OneToMany(() => NotificationType, notificationType => notificationType.id)
    notificationTypes: NotificationType[];
}
