import { ObjectId } from "mongodb";
import ProductModel from "../schema/product-schema.js";

export class ProductService {
  async create(product) {
    await ProductModel.create(product);
  }

  async findAll() {
    return await ProductModel.find({});
  }

  async find(id) {
    const objId = new ObjectId(id);
    return await ProductModel.findById(objId);
  }
}
