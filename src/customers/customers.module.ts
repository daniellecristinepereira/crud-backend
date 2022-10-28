// 4- importação e gerenciamento dos modulos (produtos)

import { Module } from "@nestjs/common";
import { MongooseModule } from "@nestjs/mongoose";
import { customersService } from './shared/customers.service';
import { CustomersSchema } from './schemas/customers.schema';
import { CustomersController } from './customers.controller';

@Module({
    imports: [MongooseModule.forFeature([{ name: 'customers', schema: CustomersSchema}])],
    controllers: [CustomersController],
    providers: [customersService],
    exports: [customersService],

})
export class CustomersModule { }