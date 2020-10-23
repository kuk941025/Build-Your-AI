import Scores from '@/const/Scores';

const removeDefense = (result) => (result.defenses !== 2 ? true : false);
const removeCntOne = (result) => {
  if (result.cnt > 1) return true;

  const neighborCnts = result.neighbors.reduce(cntReducer, 0);
  if (neighborCnts) return true;
  return false;
};

const cntReducer = (acc, cur) => acc + cur.cnt;
const omok = (result) => (result.cnt === 5 ? true : false);

export default function evaluate(results = []) {
  if (results.find(omok)) return Scores.OMOK;
  console.log(results);
  const removed = results.filter(removeDefense).filter(removeCntOne);

  if (findFourFour(removed)) return Scores.FOURFOUR;

  const threefour = findThreeFour(removed);
  if (threefour.three && threefour.four) {
    if (threefour.four.defenses === 0 && threefour.three.defenses === 0) return Scores.THREEFOUR;
    return Scores.THREEFOUR_DEFENDED;
  }

  const straightFour = findFour(removed);
  if (straightFour) {
    if (straightFour.defenses === 0) return Scores.FOUR;
    return Scores.FOUR_DEFENDED;
  }

  const onethree = findOneThree(results);
  if (onethree) {
    const threeNeighbor = onethree.neighbors.find((neighbor) => neighbor.cnt === 4 - onethree.cnt);
    if (onethree.defenses === 0 && threeNeighbor.defenses === 0) return Scores.ONETHREE;
    if (onethree.defenses === 1 && threeNeighbor.defenses === 1) return Scores.ONETHREE_SIDE_DEFENDED;
    return Scores.ONETHREE_DEFENDED;
  }

  const threes = findThreeThree(results);
  if (threes) {
    const defended = threes.reduce((acc, cur) => acc + cur.defenses, 0);
    if (defended === 0) return Scores.THREETHREE;
    if (defended === 1) return Scores.THREETHREE_DEFENDED;
  }

  if (findThreeTwo(results)) return Scores.THREETWO;

  const three = findThree(results);
  if (three) {
    if (three.defenses === 0) return Scores.THREE;
    if (three.defenses === 1) return Scores.THREE_DEFENDED;
  } 

  const twoone = findTwoOne(results);
  if (twoone) {
    const defended = twoone.defenses + twoone.neighbors.reduce((acc, cur) => acc + cur.defenses, 0);
    if (defended === 0) return Scores.TWOONE;
    if (defended === 1) return Scores.TWOONE_DEFENDED;
  }

  if (findTwoTwo(results)) return Scores.TWOTWO;

  const two = findTwo(results);
  if (two) {
    if (two.defenses === 0) return Scores.TWO;
    if (two.defenses === 1) return Scores.TWO_DEFENDED;
  }

  return 0;
}

const findFourFour = (results = []) => (results.filter((result) => result.cnt === 4).length >= 2 ? true : false);

// what if multiple three/four?
const findThreeFour = (results = []) => {
  const four = results.find((result) => result.cnt === 4);
  const three = results.find((result) => result.cnt === 3);

  if (four && three)
    return {
      four,
      three,
    };
  return { four: null, three: null };
};

const findFour = (results) => {
  const four = results.find((result) => result.cnt === 4);
  return four;
};

const findOneThree = (results) => {
  const candidates = results.filter((result) => {
    const candNeighbor = result.neighbors.find((neighbor) => neighbor.cnt + result.cnt === 4);
    if (candNeighbor) return true;
    return false;
  });

  // evaluate only one combination
  return candidates.length ? candidates[0] : null;
};

const findThreeThree = (results) => {
  const threes = results.filter((result) => result.cnt === 3);
  if (!threes.length) return null;
  return threes;
};

const findThreeTwo = (results) => {
  const three = results.find((result) => result.cnt === 3);
  const two = results.find((result) => result.cnt === 2);

  if (three && two) return true;
  return false;
};

const findThree = (results) => results.find((result) => result.cnt === 3);

const findTwoOne = (results) => results.find((result) => result.cnt + result.neighbors.reduce(cntReducer, 0) === 3);

const findTwoTwo = (results) => (results.filter((result) => result.cnt === 2).length >= 2 ? true : false);

const findTwo = results => results.find(result => result.cnt === 2);
