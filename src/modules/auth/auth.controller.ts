import { Body, Controller, Post, UnauthorizedException } from '@nestjs/common';
import { AuthService } from './auth.service';
import { CreateUserDto, LoginUserDto } from '../../shared/dto/User.dto';

@Controller('auth')
export class AuthController {
    constructor(private authService: AuthService) { }
    @Post('register')
    async register(@Body() createUserDto: CreateUserDto) {
        return this.authService.register(createUserDto)
    }
    @Post('login')
    async login(@Body() loginUserDto: LoginUserDto) {
        const result = await this.authService.login(loginUserDto.email, loginUserDto.password);
        if (!result) {
            throw new UnauthorizedException('Invalid credentials');
        }
        return result;
    }


}
