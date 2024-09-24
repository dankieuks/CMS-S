import { Body, Controller, Delete, Get, Param, Patch, Post } from '@nestjs/common';
import { ProductService } from '../product/product.service';
import { Product } from '@prisma/client';
import { CreateProduct, UpdateProductDto } from '../../shared/dto/product.dto';

@Controller('product')
export class ProductController {
    constructor(public productService: ProductService) { }

    @Get('')
    async getAllProduct(): Promise<Product[]> {
        return this.productService.getAllProducts();
    }
    @Post('')
    async createProduct(@Body() createProduct: CreateProduct) {
        return this.productService.createProduct(createProduct);
    }
    @Patch(":id")
    async updateProduct(@Param('id') id: string, @Body() updateDataProduct: UpdateProductDto): Promise<Product> {
        return this.productService.updateProduct(id, updateDataProduct);
    }
    @Delete(':id')
    async deleteProduct(@Param('id') id: string): Promise<Product> {
        return this.productService.deleteProduct(id);
    }


}
