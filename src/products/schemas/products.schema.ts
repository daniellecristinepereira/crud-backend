// 1- schema banco de dados

import * as mongoose from "mongoose";
export const ProductsSchema = new mongoose.Schema({
    name: String,
    price: mongoose.Schema.Types.Decimal128,
    stock: Number,
    
}, { collection: 'products' })

// valores Decimal/inteiro