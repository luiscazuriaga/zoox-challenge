import sortData from "../sortData";

const data = [{ nome: "Abadiel" }, { nome: "Uriel" }, { nome: "Bardock" }];
const expected = [{ nome: "Abadiel" }, { nome: "Bardock" }, { nome: "Uriel" }];

test("Sort data on alfabetic way", () => {
  const sortAlfabetic = sortData(data, "alf");

  expect(sortAlfabetic).toEqual(expected);
});

test("Sort data on alfabetic reverse way", () => {
  const sortAlfabeticReverse = sortData(data, "alfdesc");

  expect(sortAlfabeticReverse).toEqual(expected.reverse());
});
