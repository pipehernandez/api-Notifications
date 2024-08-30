import { Injectable } from '@nestjs/common';
import { CreateTelegramMessageDto } from './dto/create-telegram-message.dto';
import { TelegramClient } from 'telegram';
import {StringSession} from 'telegram/sessions';
import input from 'input';
import { message } from 'telegram/client';

@Injectable()
export class TelegramMessageService {
  private readonly apiId:number=parseInt(process.env.API_ID);
  private readonly hash_id:string= process.env.HASH_ID;
  private readonly phoneNumber:string=process.env.PHONE_NUMBER;
  private client:TelegramClient;
  private session:StringSession=new StringSession("");

  async connect():Promise<void>{
    this.client=new TelegramClient(this.session,this.apiId,this.hash_id,{connectionRetries:5})
    await this.client.start({
      phoneNumber:this.phoneNumber,
      phoneCode:async()=>await input.text("Code :"),
      onError:(err)=>console.log(err)
    });
    this.client.session.save();
    await this.client.sendMessage("me",{message:"hola mijo"})
  }

  async sendMessage(data:CreateTelegramMessageDto){
    try{
      await this.client.sendMessage(data.contact,{message:`
      ${data.message} 
      Mi telefono es ${data.phoneNumber}`});
    }catch(err:any){
      console.log(err);
    }
  }
}
