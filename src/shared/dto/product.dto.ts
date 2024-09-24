import { IsNumber, IsOptional, IsString } from "class-validator";

export class CreateProduct {

    name: string;
    description: string;
    price: number;
    stock: number;

}
export class UpdateProductDto {
    @IsOptional()
    @IsString()
    name?: string;

    @IsOptional()
    @IsString()
    description?: string;

    @IsOptional()
    @IsNumber()
    price?: number;

    @IsOptional()
    @IsNumber()
    stock?: number;

}