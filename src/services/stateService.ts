import StateSI from "@interfaces/stateInterface";
import StateModel from "@models/State";
import { injectable } from "tsyringe";
import BaseService from "./baseService";

@injectable()
export default class StateService extends BaseService<StateSI> {
  constructor(modelI: StateModel) {
    super(modelI);
  }
}
