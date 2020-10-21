import { BOARD_SIZE, DIRECTIONS } from '@/const/Game';
import { getOppStone } from '@/utils/BoardUtils';

export default function checkDefense(board, pos, stone) {
  const { dir } = pos;

  if (dir === DIRECTIONS.VERT) return vert(board, pos, stone);
  if (dir === DIRECTIONS.HORI) return hori(board, pos, stone);
  if (dir === DIRECTIONS.DIAG) return diag(board, pos, stone);
  return diagLeft(board, pos, stone);
}

const vert = (board, { x, y, end_x, end_y }, stone) => {
  let defenses = 0;
  if (y === 0) defenses++;
  else board[y - 1][x] === getOppStone(stone) && defenses++;

  if (end_y + 1 >= BOARD_SIZE) defenses++;
  else board[end_y + 1][end_x] === getOppStone(stone) && defenses++;
  return defenses;
};

const hori = (board, { x, y, end_x, end_y }, stone) => {
  let defenses = 0;
  if (x === 0) defenses++;
  else board[y][x - 1] === getOppStone(stone) && defenses++;

  if (end_x + 1 >= BOARD_SIZE) defenses++;
  else board[end_y][end_x + 1] === getOppStone(stone) && defenses++;
  return defenses;
};

const diag = (board, { x, y, end_x, end_y }, stone) => {
  let defenses = 0;
  if (x === 0 || y === 0) defenses++;
  else x - 1 >= 0 && y - 1 >= 0 && board[y - 1][x - 1] === getOppStone(stone) && defenses++;

  if (end_x + 1 >= BOARD_SIZE || end_y + 1 >= BOARD_SIZE) defenses++;
  else
    end_x + 1 < BOARD_SIZE &&
      end_y + 1 < BOARD_SIZE &&
      board[end_y + 1][end_x + 1] === getOppStone(stone) &&
      defenses++;

  return defenses;
};

const diagLeft = (board, { x, y, end_x, end_y }, stone) => {
  let defenses = 0;

  if (x + 1 >= BOARD_SIZE || y === 0) defenses++;
  else x + 1 < BOARD_SIZE && y - 1 >= 0 && board[y - 1][x + 1] === getOppStone(stone) && defenses++;

  if (end_x - 1 >= BOARD_SIZE || end_y + 1 >= BOARD_SIZE) defenses++;
  else
    end_x - 1 < BOARD_SIZE &&
      end_y + 1 < BOARD_SIZE &&
      board[end_y + 1][end_x - 1] === getOppStone(stone) &&
      defenses++;

  return defenses;
};
