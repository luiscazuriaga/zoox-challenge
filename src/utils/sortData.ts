const sortBy = {
  alf: (a: any, b: any) => (a.nome > b.nome ? 1 : -1),
  alfdesc: (a: any, b: any) => (a.nome < b.nome ? 1 : -1),
};

const sortData = (data: Array<object>, ordBy: any) => {
  return data.sort(sortBy[ordBy]);
};

export default sortData;
