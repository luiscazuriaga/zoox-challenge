import StateController from "@controllers/stateController";
import { Router } from "express";

const stateRouter = Router();
const stateController = new StateController();

stateRouter.post("/", stateController.post);
stateRouter.get("/", stateController.get);
stateRouter.get("/:id", stateController.getById);
stateRouter.put("/:id", stateController.update);
stateRouter.delete("/:id", stateController.delete);

export default stateRouter;
