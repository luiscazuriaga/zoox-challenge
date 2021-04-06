import { Schema, Model as ModelInterface, model } from "mongoose";
import { singleton } from "tsyringe";

import SessionSI from "@interfaces/sessionInterface";
import ModelI from "@interfaces/modelInterface";

@singleton()
export default class SessionModel implements ModelI {
  schema: Schema<any> = new Schema(
    {
      email: {
        type: String,
        require: true,
        required: [true, "O campo 'email' é obrigatorio"],
        unique: true,
      },

      password: {
        type: String,
        require: true,
        required: [true, "O campo 'password' é obrigatorio"],
        select: true,
      },
    },
    {
      timestamps: {
        createdAt: "data_de_criacao",
        updatedAt: "data_de_ultima_alteracao",
      },
    }
  );
  model: ModelInterface<any, any> = model<SessionSI>("Session", this.schema);
}
