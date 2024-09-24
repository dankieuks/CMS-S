import { IsEmail, IsNotEmpty, IsOptional, IsString, MinLength } from 'class-validator';
export class CreateUserDto {
    @IsEmail()
    email: string;

    @MinLength(6)
    password: string;

    @IsNotEmpty()
    name: string;
}

export class LoginUserDto {
    email: string;
    password: string;
}
export class UpdateUserDto {

    @IsOptional()
    @IsString()
    name?: string;

    @IsOptional()
    @IsEmail()
    email?: string;

    @IsOptional()
    @MinLength(6)
    password?: string;

}