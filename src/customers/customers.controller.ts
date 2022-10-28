// 4- Controlador de Rotas

import { Body, Controller, Delete, Get, Param, Post, Put } from "@nestjs/common";
import { Customers } from "./shared/customers";
import { customersService } from "./shared/customers.service";

@Controller('customers')
export class CustomersController {
    constructor( 
        private customersService: customersService
    ){}

    @Get('/')
    async getAll(){ 
      return await this.customersService.getAll();
    }

    @Get('/:id')
    async getByAny(@Param('id') id: string){
        return await this.customersService.getByAny(id);

    }

    @Post('/')
    async create(@Body() product: Customers) : Promise<Customers>{
        return await this.customersService.create(product)
    }

    @Put('/:id')
    async update(
        @Param('id') id: string, 
        @Body() product: Customers
        ) : Promise<any>{
            return await this.customersService.update(id, product);
            
    }

    @Delete('/:id')
    async delete(@Param('id') id: string) : Promise<any>{
        return await this.customersService.delete(id);

    }
}