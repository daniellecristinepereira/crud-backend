//2- interface do nestjs

import { IsNotEmpty, IsNumber, IsString } from "class-validator"

export class Products{
    // campos verificadores

    @IsString()
    @IsNotEmpty()
    name: string

    @IsNumber()
    @IsNotEmpty()
    price: number
    
    @IsNumber()
    @IsNotEmpty()
    stock: number

}
