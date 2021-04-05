import mongoose from "../database";

export interface StateI {
  nome: string;
  abreviacao: string;
}

export default interface StateSI extends StateI, mongoose.Document {}
