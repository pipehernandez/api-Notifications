import { IsNotEmpty, IsNumber, IsString } from "class-validator";


export class CreateTelegramMessageDto {
    @IsNotEmpty()
    @IsString()
    contact:string;

    @IsNotEmpty()
    @IsString()
    message:string;

    @IsNotEmpty()
    @IsString()
    phoneNumber:string;

}
