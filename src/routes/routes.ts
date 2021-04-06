import { Router } from "express";

import cityRoutes from "./cityRoutes";
import stateRoutes from "./stateRoutes";
import sessionRoutes from "./sessionRoutes";

const v1Router = Router();

v1Router.use("/session", sessionRoutes);
v1Router.use("/cidades", cityRoutes);
v1Router.use("/estados", stateRoutes);

export default v1Router;
