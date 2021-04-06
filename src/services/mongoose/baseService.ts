import ModelI from "@interfaces/modelInterface";
import mongoose from "src/database";

export default class BaseService<T> {
  model: mongoose.Model<any, any>;
  constructor(modelI?: ModelI) {
    this.model = modelI.model;
  }

  post = async (data: T) => {
    const resourse = await this.model.create(data);
    return resourse;
  };

  get = async (filters = {}): Promise<T[]> => {
    const resource = (await this.model.find(filters)) as T[];
    return resource;
  };

  getById = async (id: string): Promise<T> => {
    const resource = (await this.model.findById(id)) as T;
    return resource;
  };

  update = (id: string, updates: object) => {
    const resource = this.model.findByIdAndUpdate(id, updates, {
      new: true,
    }) as T;
    return resource;
  };

  delete = (id: string) => {
    return this.model.findByIdAndDelete(id);
  };
}
