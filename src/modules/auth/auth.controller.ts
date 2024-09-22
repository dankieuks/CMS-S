import { Body, Controller, Post } from '@nestjs/common';
import { AuthService } from './auth.service';
import { CreateUserDto } from '../../shared/dto/CreateUser.dto';

@Controller('auth')
export class AuthController {
    constructor(private authService: AuthService) { }
    @Post('register')
    async register(@Body() createUserDto: CreateUserDto) {
        return this.authService.register(createUserDto)
    }

}
