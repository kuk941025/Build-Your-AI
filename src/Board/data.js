import { BOARD_SIZE, BLACK_STONE } from '@/const/Game';

export const tempData = [
  [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 1, 1, 2, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
];


export const generateData = (inputs = []) => {
  const tempData = Array(BOARD_SIZE)
    .fill(0)
    .map((_) =>
      Array(BOARD_SIZE)
        .fill(0)
        .map((__) => __)
    );
  inputs.forEach(([row, col, value]) => (tempData[row][col] = value));

  return tempData;
};

export const makeOmok = () => {
  const startPos = Math.floor(Math.random() * 13);
  const dir = Math.floor(Math.random() * 2);

  if (dir)
    return Array(5)
      .fill(0)
      .map((_, idx) => [startPos, startPos + idx, BLACK_STONE]);

  return Array(5)
    .fill(0)
    .map((_, idx) => [startPos + idx, startPos, BLACK_STONE]);
};

export const makeFourFour = () => {
  const startPos = Math.floor(Math.random() * 15);
  const dir = Math.floor(Math.random() * 4);

  // ㄴ
  if (dir === 0)
    return [].concat(
      Array(4)
        .fill(0)
        .map((_, idx) => [startPos + idx, startPos, BLACK_STONE]),
      Array(3)
        .fill(0)
        .map((_, idx) => [startPos + 3, startPos + idx + 1, BLACK_STONE])
    );

  // ㄴ 반대
  if (dir === 1) {
    return [].concat(
      Array(4)
        .fill(0)
        .map((_, idx) => [startPos + 3, startPos + idx, BLACK_STONE]),
      Array(3)
        .fill(0)
        .map((_, idx) => [startPos + 3 - idx - 1, startPos + 3, BLACK_STONE])
    );
  }

  // ㄱ
  if (dir === 2) {
    return [].concat(
      Array(4)
        .fill(0)
        .map((_, idx) => [startPos, startPos + idx, BLACK_STONE]),
      Array(3)
        .fill(0)
        .map((_, idx) => [startPos + idx + 1, startPos + 3, BLACK_STONE])
    );
  }

  // ㄱ 반대
  if (dir === 3)
    return [].concat(
      Array(4)
        .fill(0)
        .map((_, idx) => [startPos, startPos + idx, BLACK_STONE]),
      Array(3)
        .fill(0)
        .map((_, idx) => [startPos + idx + 1, startPos, BLACK_STONE])
    );
};

export const makeFourThree = () => {};
