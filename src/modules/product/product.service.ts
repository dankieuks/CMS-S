import { Injectable } from '@nestjs/common';
import { Product } from '@prisma/client';
import { PrismaService } from '../../prisma/prisma.service';
import { UpdateProductDto } from 'shared/dto/product.dto';

@Injectable()
export class ProductService {
    constructor(private prisma: PrismaService) { }
    async getAllProducts(): Promise<Product[]> {
        return await this.prisma.product.findMany();
    }
    async createProduct(proData: {
        name: string,
        description: string,
        price: number,
        stock: number
    }): Promise<any> {
        const product = await this.prisma.product.create({
            data: {
                name: proData.name,
                description: proData.description,
                price: proData.price,
                stock: proData.stock,
            },
        });
        return product;
    }

    async updateProduct(id: string, updateDataProduct: UpdateProductDto): Promise<Product> {
        const product = await this.prisma.product.findUnique({ where: { id } });
        if (!product) {
            throw new Error(`Product with id ${id} not found`);
        }
        return this.prisma.product.update({
            where: { id },
            data: updateDataProduct,
        });
    }
    async deleteProduct(id: string): Promise<Product> {
        const product = await this.prisma.product.findUnique({ where: { id } });
        if (!product) {
            throw new Error(`Product with id ${id} not found`);
        }
        return this.prisma.product.delete({ where: { id } })
    }
}
