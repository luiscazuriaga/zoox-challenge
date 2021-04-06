import SessionSI from "@interfaces/sessionInterface";
import SessionModel from "@models/Session";
import mongoose from "src/database";
import { injectable } from "tsyringe";

@injectable()
export default class SessionService {
  model: mongoose.Model<any, any>;
  constructor(modelI?: SessionModel) {
    this.model = modelI.model;
  }

  post = async (data: SessionSI) => {
    const resourse = await this.model.create(data);
    return resourse;
  };

  getByEmail = async (email: string): Promise<SessionSI> => {
    const resource = (await this.model.find({ email: email })) as SessionSI;
    return resource[0];
  };
}
