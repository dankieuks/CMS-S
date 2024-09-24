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
import { ProductModule } from './modules/product/product.module';
import { OrderService } from './modules/order/order.service';
import { OrderModule } from './modules/order/order.module';
import { SalaryModule } from './modules/salary/salary.module';



@Module({
  imports: [UserModule, PrismaModule, AuthModule, ProductModule, OrderModule, SalaryModule],
  controllers: [AppController, UserController],
  providers: [
    AppService,
    PrismaService,
    UserService,
    {
      provide: APP_PIPE,                           // Cấu hình ValidationPipe để kiểm tra dữ liệu
      useClass: ValidationPipe,
    },
    OrderService,
  ],
})
export class AppModule { }
