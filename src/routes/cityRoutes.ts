import CityController from "@controllers/cityController";
import { Router } from "express";

const cityRouter = Router();
const cityController = new CityController();

cityRouter.post("/", cityController.post);
cityRouter.get("/", cityController.get);
cityRouter.get("/:id", cityController.getById);
cityRouter.put("/:id", cityController.update);
cityRouter.delete("/:id", cityController.delete);

export default cityRouter;
