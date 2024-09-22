import { User } from '@prisma/client';
import { UserService } from './user.service';
import { Controller, Get } from '@nestjs/common';

@Controller('user')
export class UserController {
    constructor(private readonly userService: UserService) { }
    @Get('')
    async getAllUser(): Promise<User[]> {
        return this.userService.getAllUser();
    }
}
