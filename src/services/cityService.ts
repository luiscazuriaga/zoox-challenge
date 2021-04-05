import CitySI from "@interfaces/cityInterface";
import CityModel from "@models/City";
import { injectable } from "tsyringe";
import BaseService from "./baseService";

@injectable()
export default class CityService extends BaseService<CitySI> {
  constructor(modelI: CityModel) {
    super(modelI);
  }
}
