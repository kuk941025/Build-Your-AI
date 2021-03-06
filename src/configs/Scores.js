const SCORES = {
  OMOK: 100,
  FOURFOUR: 95,
  THREEFOUR: 90,
  THREEFOUR_DEFENDED: 70,
  FOUR: 70,
  FOUR_DEFENDED: 9,
  ONETHREE: 33,
  ONETHREE_DEFENDED: 32,
  ONETHREE_SIDE_DEFENDED: 31,
  THREETHREE: 30,
  THREETHREE_DEFENDED: 8,
  THREETWO: 25,
  THREE: 20,
  THREE_DEFENDED: 6,
  TWOONE: 15,
  TWOONE_DEFENDED: 14,
  TWOTWO: 10,
  TWO: 6,
  TWO_DEFENDED: 5,
  DEFAULT: 1,
};

export const SCORE_TYPES = {
  OMOK: 'omok',
  FOURFOUR: 'fourfour',
  THREEFOUR: 'threefour',
  THREEFOUR_DEFENDED: 'threefour_defended',
  FOUR: 'four',
  FOUR_DEFENDED: 'four_defended',
  ONETHREE: 'onethree',
  ONETHREE_DEFENDED: 'onethree_defended',
  ONETHREE_SIDE_DEFENDED: 'onethree_side_defended',
  THREETHREE: 'threethree',
  THREETHREE_DEFENDED: 'threethree_defended',
  THREETWO: 'twotwo',
  THREE: 'three',
  THREE_DEFENDED: 'three_defended',
  TWOONE: 'twoone',
  TWOONE_DEFENDED: 'twoone_defended',
  TWOTWO: 'twotwo',
  TWO: 'two',
  TWO_DEFENDED: 'two_defended',
  DEFAULT: 'default',
};

export const updateScores = (scores = {}) => {
  Object.keys(scores).forEach((key) => {
    SCORES[key] = scores[key];
  });

  console.log(SCORES);
};
export default SCORES;
