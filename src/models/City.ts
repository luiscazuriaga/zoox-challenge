import { Schema, Model as ModelInterface, model } from "mongoose";
import { singleton } from "tsyringe";

import CitySI from "@interfaces/cityInterface";
import ModelI from "@interfaces/modelInterface";

@singleton()
export default class CityModel implements ModelI {
  schema: Schema<any> = new Schema(
    {
      nome: {
        type: String,
        require: true,
        required: [true, "O campo 'Email' é obrigatorio"],
        lowercase: true,
      },

      estadoId: {
        type: Schema.Types.ObjectId,
        ref: "Estate",
        require: true,
        required: [true, "O campo 'estadoId' é obrigatorio"],
      },
    },
    {
      timestamps: {
        createdAt: "data_de_criacao",
        updatedAt: "data_de_ultima_alteracao",
      },
    }
  );
  model: ModelInterface<any, any> = model<CitySI>("City", this.schema);
}
