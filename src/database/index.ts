import mongoose from "mongoose";

import mongoConfig from "@configs/mongo";

const mongoUserPass = mongoConfig.username
  ? `${mongoConfig.username}:${mongoConfig.password}@`
  : "";

const mongoURL = `mongodb://${mongoUserPass}${mongoConfig.host}:${mongoConfig.port}/${mongoConfig.database}`;

mongoose.connect(mongoURL, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useCreateIndex: true,
  useFindAndModify: false,
});

export default mongoose;
