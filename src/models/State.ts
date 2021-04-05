import { Schema, Model as ModelInterface, model } from "mongoose";
import { singleton } from "tsyringe";

import StateSI from "@interfaces/stateInterface";
import ModelI from "@interfaces/modelInterface";

@singleton()
export default class StateModel implements ModelI {
  schema: Schema<any> = new Schema(
    {
      nome: {
        type: String,
        require: true,
        required: [true, "O campo 'nome' é obrigatorio"],
        unique: true,
      },

      abreviacao: {
        type: String,
        ref: "Estate",
        require: true,
        required: [true, "O campo 'abreviacao' é obrigatorio"],
        uppercase: true,
        unique: true,
        minLength: 2,
        maxLength: 2,
      },
    },
    {
      timestamps: {
        createdAt: "data_de_criacao",
        updatedAt: "data_de_ultima_alteracao",
      },
    }
  );
  model: ModelInterface<any, any> = model<StateSI>("State", this.schema);
}
