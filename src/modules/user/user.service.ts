import { Injectable } from '@nestjs/common';
import { User } from '@prisma/client';
import { PrismaService } from '../../prisma/prisma.service';


@Injectable()
export class UserService {
    constructor(private prisma: PrismaService) {
    }
    async getAllUser(): Promise<User[]> {
        return await this.prisma.user.findMany();
    }
}
