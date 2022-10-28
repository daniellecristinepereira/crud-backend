// 4- Controlador de Rotas

import { Body, Controller, Delete, Get, Param, Post, Put } from "@nestjs/common";
import { Products } from "./shared/product";
import { ProductsService } from "./shared/products.service";

@Controller('products')
export class ProductsController {
    constructor( 
        private productsService: ProductsService
    ){}

    @Get('/')
    async getAll(){ 
      return await this.productsService.getAll();
    }

    @Get('/:id')
    async getByAny(@Param('id') id: string){
        return await this.productsService.getByAny(id);

    }

    @Post('/')
    async create(@Body() product: Products) : Promise<Products>{
        return await this.productsService.create(product)
    }

    @Put('/:id')
    async update(
        @Param('id') id: string, 
        @Body() product: Products
        ) : Promise<any>{
            return await this.productsService.update(id, product);
            
    }

    @Delete('/:id')
    async delete(@Param('id') id: string) : Promise<any>{
        return await this.productsService.delete(id);

    }
}