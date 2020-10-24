import count from './count';
import checkDefense from './defense';
import getNeighbors from './neighbors';
import * as Relocate from './relocate';

export default function check(board, last) {
  const startPos = relocateCursors(board, last, last.stone);

  const evaluatedStones = evaluateStone(board, startPos, last.stone);
  return setNeighbors(board, evaluatedStones, last.stone);
}



const evaluateStone = (board, startPos, stone) => checkDefenses(board, countStones(board, startPos, stone), stone);

const relocateCursors = (board = [[]], pos = { x: 0, y: 0 }, stone) => {
  if (!stone) return [];

  return [
    Relocate.vert(board, pos, stone),
    Relocate.hor(board, pos, stone),
    Relocate.diag(board, pos, stone),
    Relocate.diagLeft(board, pos, stone),
  ];
};

const countStones = (board, startPos = [], stone) =>
  startPos.map((pos) => ({
    ...pos,
    ...count(board, pos, stone),
  }));

const checkDefenses = (board = [[]], positions = [], stone) =>
  positions.map((pos) => ({
    ...pos,
    defenses: checkDefense(board, pos, stone),
  }));

// if next space is an empty space, start count from the next next stone
const setNeighbors = (board = [[]], positions = [], stone) => {
  const find = (pos) => getNeighbors(board, pos, stone);
  const evaluate = (emptyPos) => (!emptyPos.length ? [] : evaluateStone(board, emptyPos, stone));
  const attach = (evaluated, idx) => ({ ...positions[idx], neighbors: evaluated });

  return positions.map(find).map(evaluate).map(attach);
};
