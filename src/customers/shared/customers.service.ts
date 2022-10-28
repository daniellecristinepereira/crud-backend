// 3- service do produto (Crud)

import { Inject, Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Customers } from './customers';

@Injectable()
export class customersService {
  constructor(
    @InjectModel('customers') private readonly customersModel: Model<Customers>,
  ) {}

  async getAll() {
    const customers = await this.customersModel.find()
    return customers
  }

  async getByAny(id: string) {
    const product = await this.customersModel.findOne({_id: id})
    return product 
  }
  
  async create(customers: Customers) {
    const create = await this.customersModel.create(customers);
    return create
  }

  async update(id: string, customers: Customers) {
    const update = await this.customersModel.updateOne({_id:id}, customers);
    return update 
  }

  async delete(id: string) {
    return await this.customersModel.deleteOne({_id:id}).exec()
  }
}