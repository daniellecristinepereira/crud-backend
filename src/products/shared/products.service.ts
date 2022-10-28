// 3- service do produto (Crud)

import { Inject, Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Products } from './product';

@Injectable()
export class ProductsService {
  constructor(
    @InjectModel('Products') private readonly productsModel: Model<Products>,
  ) {}

  async getAll() {
    const products = await this.productsModel.find()
    return products
  }

  async getByAny(id: string) {
    const product = await this.productsModel.findOne({_id: id})
    return product 
  }
  
  async create(product: Products) {
    const create = await this.productsModel.create(product);
    return create
  }

  async update(id: string, product: Products) {
    const update = await this.productsModel.updateOne({_id:id}, product);
    return update 

    
  }

  async delete(id: string) {
    return await this.productsModel.deleteOne({_id:id}).exec()
  }
}