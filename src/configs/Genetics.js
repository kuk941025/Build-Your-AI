const GENETICS = {
  MUTATION_RATE: 0.05,
  LIMIT_POPULATION: 1000,
};
export const GENETIC_TYPES = {
  MUTATION_RATE: 'MUTATION_RATE',
  LIMIT_POPULATION: 'LIMIT_POPULATION',
};

export const updateGenetics = (genetics) => {
  Object.keys(genetics).forEach((key) => {
    GENETICS[key] = genetics[key];
  });

  console.log(GENETICS);
};

export default GENETICS;
