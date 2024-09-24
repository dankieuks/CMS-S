import { Injectable } from '@nestjs/common';
import { PrismaService } from '../../prisma/prisma.service';
import { JwtPayload } from './Jwt/jwt-payload.interface';
import { JwtService } from '@nestjs/jwt';

@Injectable()
export class AuthService {
    constructor(
        private prisma: PrismaService,
        private jwtService: JwtService
    ) { }

    async register(userData: { email: string, password: string, name: string }): Promise<any> {

        const user = await this.prisma.user.create({
            data: {
                email: userData.email,
                password: userData.password,
                name: userData.name,
            },
        });

        return user;
    }

    async login(email: string, password: string) {
        const user = await this.prisma.user.findUnique({ where: { email } });
        if (user && password === user.password) {
            const payload: JwtPayload = { email: user.email };
            return {
                data: {
                    accessToken: this.jwtService.sign(payload),
                    id: user.id,
                    name: user.name,
                    email: user.email,

                },
            };
        }
        return null;
    }



    async validateUser(email: string) {
        return await this.prisma.user.findUnique({ where: { email } });
    }
}
