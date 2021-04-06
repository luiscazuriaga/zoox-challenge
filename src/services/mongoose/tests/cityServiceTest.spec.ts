import CitySchema from "@models/City";
import mongoose from "src/database";
import City from "../cityService";

describe("Change Contact Subscription Status", () => {
  beforeAll(async () => {
    //utilizar jest-mongodb para mockar o banco
    // await mongoose.connect();
  });

  afterAll(async () => {
    await mongoose.disconnect();
  });

  beforeEach(async () => {
    const city = await new CitySchema();
    city.model.deleteMany({});
  });

  it("should be able to import new citys", async () => {});
});
