import mongoose from "src/database";

export default interface ModelI {
  schema: mongoose.Schema<any>;
  model: mongoose.Model<any, any>;
}
