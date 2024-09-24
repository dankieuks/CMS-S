import { UpdateUserDto } from '../../shared/dto/User.dto';
import { Injectable, NotFoundException } from '@nestjs/common';
import { User } from '@prisma/client';
import { PrismaService } from '../../prisma/prisma.service';


@Injectable()
export class UserService {
    constructor(private prisma: PrismaService) {
    }
    async getAllUser(): Promise<User[]> {
        return await this.prisma.user.findMany();
    }
    async getUserById(id: string): Promise<User | null> {
        return this.prisma.user.findUnique({
            where: { id },
        });
    }

    async updateUser(id: string, updateUserData: UpdateUserDto): Promise<User> {
        const user = await this.prisma.user.findUnique({ where: { id } });
        if (!user) {
            throw new NotFoundException(`User with ID ${id} not found`);
        }
        return this.prisma.user.update({
            where: { id },
            data: updateUserData,
        });
    }
    async deleteUser(id: string): Promise<User> {
        const user = await this.prisma.user.findUnique({ where: { id } });
        if (!user) {
            throw new NotFoundException(`User with ID ${id} not found`);
        }

        return this.prisma.user.delete({
            where: { id },
        });
    }


}