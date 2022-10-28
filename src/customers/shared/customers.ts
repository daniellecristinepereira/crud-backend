//2- interface do nestjs

import { IsNotEmpty, IsNumber, IsString } from "class-validator"

export class Customers{
    // campos verificadores

    @IsString()
    @IsNotEmpty()
    name: string

    @IsNumber()
    @IsNotEmpty()
    phone: number

    @IsString()
    @IsNotEmpty()
    email: string

}