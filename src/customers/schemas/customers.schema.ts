// 1- schema banco de dados

import * as mongoose from "mongoose";
export const CustomersSchema = new mongoose.Schema({
    name: String,
    phone: Number,
    email: String,
    
}, { collection: 'customers' })