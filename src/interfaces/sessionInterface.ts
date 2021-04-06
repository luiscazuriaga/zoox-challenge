import mongoose from "../database";

export interface SessionI {
  email: string;
  password: string;
}

export default interface SessionSI extends SessionI, mongoose.Document {}
