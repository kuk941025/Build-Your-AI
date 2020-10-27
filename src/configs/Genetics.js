const GENETICS = {
  MUTATION_RATE: 0.05,
  LIMIT_POPULATION: 10000,
  INIT_POPULATION: 10,
  MAX_DNA_SIZE: 10,
};
export const GENETIC_TYPES = {
  MUTATION_RATE: 'MUTATION_RATE',
  LIMIT_POPULATION: 'LIMIT_POPULATION',
  INIT_POPULATION: 'INIT_POPULATION',
  MAX_DNA_SIZE: 'MAX_DNA_SIZE',
};

export const updateGenetics = (genetics) => {
  Object.keys(genetics).forEach((key) => {
    GENETICS[key] = genetics[key];
  });

  console.log(GENETICS);
};

export default GENETICS;
