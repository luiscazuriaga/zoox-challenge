import { autoInjectable } from "tsyringe";
import BaseController from "./baseController";
import StateService from "@services/mongoose/stateService";

@autoInjectable()
export default class StateController extends BaseController {
  constructor(service?: StateService) {
    super(service);
  }
}
