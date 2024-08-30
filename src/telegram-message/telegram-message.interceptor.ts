import { CallHandler, ExecutionContext, Injectable, NestInterceptor } from '@nestjs/common';
import { Observable, tap } from 'rxjs';
import {Response,Request} from 'express';

@Injectable()
export class TelegramMessageInterceptor implements NestInterceptor {
  intercept(context: ExecutionContext, next: CallHandler): Observable<any> {
    const response:Response=context.switchToHttp().getResponse();
    const request:Request=context.switchToHttp().getRequest();

    return next.handle().pipe(
      tap(()=>{
        
      })
    )
  }
}
