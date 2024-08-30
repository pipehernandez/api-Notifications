import { NotificationType } from "src/notification-type/entities/notification-type.entity";
import { Register } from "src/notifications/entities/notification.entity";
import { Template } from "src/templates/entities/template.entity";
import { MysqlConnectionOptions } from "typeorm/driver/mysql/MysqlConnectionOptions";


export default ():MysqlConnectionOptions=>({
    type:"mysql",
    host:process.env.DB_HOST,
    port:+process.env.DB_PORT,
    username:process.env.DB_USERNAME,
    password:process.env.DB_PASSWORD,
    database:process.env.DB_DATABASE,
    entities:[Register,NotificationType,Template],
    synchronize:true
})