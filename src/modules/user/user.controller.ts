import { User } from '@prisma/client';
import { UserService } from './user.service';
import { Body, Controller, Delete, Get, NotFoundException, Param, Patch, } from '@nestjs/common';
import { UpdateUserDto } from '../../shared/dto/User.dto';

@Controller('user')
export class UserController {
    constructor(private readonly userService: UserService) { }
    @Get('')
    async getAllUser(): Promise<User[]> {
        return this.userService.getAllUser();
    }

    @Get(':id')
    async getUserById(@Param('id') id: string): Promise<User> {
        return this.userService.getUserById(id);
    }
    @Patch(':id')
    async updateUser(@Param('id') id: string, @Body() updateUserData: UpdateUserDto
    ): Promise<User> {
        return this.userService.updateUser(id, updateUserData);

    }


    @Delete(':id')
    async deleteUser(@Param('id') id: string): Promise<User> {
        return this.userService.deleteUser(id);
    }

}
