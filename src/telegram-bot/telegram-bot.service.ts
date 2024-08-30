import { Injectable } from '@nestjs/common';
import { CreateTelegramBotDto } from './dto/create-telegram-bot.dto';
import { Ctx, On, Update } from 'nestjs-telegraf';
import { Context } from 'telegraf';

@Update()
@Injectable()
export class TelegramBotService {

  @On("text")
  create(@Ctx() ctx:Context) {
    const expression:RegExp=/$[a-z][A-Z]^/;
    if(expression.test(ctx.text) || (ctx.text!=="1" && ctx.text!=="2")){
      ctx.reply(`
        !Hola Usuario Bienvenido a Inmueblerias don pancho, Selecciona alguna opcion para ayudarte

        1-Ver los inmuebles menos vistos
        2-Ver los inmuebels mas vistos
      `);
    }
    else if(ctx.text=="1"){
      ctx.reply("SOn la propiedad de javier y todo")
    }
    else if(ctx.text=="2"){
      ctx.reply("SOn la propiedad mia papa");
    }
  }

}
