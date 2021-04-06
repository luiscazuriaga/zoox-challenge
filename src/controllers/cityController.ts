import { autoInjectable } from "tsyringe";
import BaseController from "./baseController";
import CityService from "@services/mongoose/cityService";

@autoInjectable()
export default class CityController extends BaseController {
  constructor(service?: CityService) {
    super(service);
  }
}
