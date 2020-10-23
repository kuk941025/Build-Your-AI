import { BLACK_STONE, WHITE_STONE, BOARD_SIZE } from '@/const/Game';

export const getCoord = ({ mouseCoord, boxCoord, boxSize, pad }) => Math.round((mouseCoord - boxCoord - pad) / boxSize);
export const getOppStone = (stone) => (stone === BLACK_STONE ? WHITE_STONE : BLACK_STONE);
export const validatePos = (board, pos, stone) => {
  const { x, y } = pos;
  if (x < 0 || y < 0) return false;
  if (x >= BOARD_SIZE || y >= BOARD_SIZE) return false;

  if (board[y][x] !== stone) return false;
  return true;
};

export const initBoardData = () =>
  Array(BOARD_SIZE)
    .fill(0)
    .map((_) =>
      Array(BOARD_SIZE)
        .fill(0)
        .map((__) => __)
    );

export const randomPlace = (board) => {
  const rndNum = () => Math.floor(Math.random() * BOARD_SIZE);
  while (true) {
    const rndX = rndNum();
    const rndY = rndNum();

    if (board[rndY][rndX] === 0)
      return {
        x: rndX,
        y: rndY,
      };
  }
};
