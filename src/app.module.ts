import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UserModule } from './modules/user/user.module';
import { PrismaModule } from './prisma/prisma.module';
import { AuthModule } from './modules/auth/auth.module';
import { PrismaService } from './prisma/prisma.service';
import { UserController } from './modules/user/user.controller';
import { UserService } from './modules/user/user.service';
import { ValidationPipe } from '@nestjs/common';
import { APP_PIPE } from '@nestjs/core';



@Module({
  imports: [UserModule, PrismaModule, AuthModule],
  controllers: [AppController, UserController],
  providers: [
    AppService,
    PrismaService,
    UserService,
    {
      provide: APP_PIPE,                           // Cấu hình ValidationPipe để kiểm tra dữ liệu
      useClass: ValidationPipe,
    },
  ],
})
export class AppModule { }
