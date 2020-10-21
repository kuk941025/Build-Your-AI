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
