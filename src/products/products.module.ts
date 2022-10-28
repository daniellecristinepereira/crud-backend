// 4- importação e gerenciamento dos modulos (produtos)

import { Module } from "@nestjs/common";
import { MongooseModule } from "@nestjs/mongoose";
import { ProductsController } from "./products.controller";
import { ProductsSchema } from "./schemas/products.schema";
import { ProductsService } from "./shared/products.service";

@Module({
    imports: [MongooseModule.forFeature([{ name: 'Products', schema: ProductsSchema }])],
    controllers: [ProductsController],
    providers: [ProductsService],
    exports: [ProductsService],

})
export class ProductsModule { }