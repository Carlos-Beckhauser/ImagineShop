import { ObjectId } from "mongodb";
import UserModel from "../schema/user-schema.js";

export class UserService {
  async create(user) {
    await UserModel.create(user);
  }

  async findAll() {
    return await UserModel.find({});
  }

  async find(id) {
    const objId = new ObjectId(id);
    return await UserModel.findById(objId);
  }

  async delete(id) {
    const objId = new ObjectId(id);
    await UserModel.deleteOne(objId);
  }

  async update(id, user) {
    const objId = new ObjectId(id);
    return await UserModel.findByIdAndUpdate({ _id: objId }, user);
  }

  async findByEmail(email) {
    return await UserModel.findOne({ email });
  }

  async login(email, password) {
    if ((email, password)) {
      const user = await this.findByEmail(email);
      if (user) {
        const auth = user.password === password;
        if (auth) {
          return user;
        }
        return null;
      }
      return null;
    }
    return null;
  }
}
