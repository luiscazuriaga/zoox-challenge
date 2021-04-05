import mongoose from "../database";

export interface CityI {
  nome: string;
  estadoId: string;
}

export default interface CitySI extends CityI, mongoose.Document {}
