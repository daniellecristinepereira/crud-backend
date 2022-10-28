//2- interface do nestjs

import { IsNotEmpty, IsNumber, IsString } from "class-validator"

export class Products{
    // campos verificadores

    @IsString()
    @IsNotEmpty()
    name: string

    @IsString()
    @IsNotEmpty()
    price: string
    
    @IsNumber()
    @IsNotEmpty()
    stock: number

}
