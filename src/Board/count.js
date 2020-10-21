import { BOARD_SIZE, DIRECTIONS } from '@/const/Game';

export default function count(board, pos, stone) {
  const { dir } = pos;
  if (dir === DIRECTIONS.VERT) return vert(board, pos, stone);
  if (dir === DIRECTIONS.HORI) return hori(board, pos, stone);
  if (dir === DIRECTIONS.DIAG) return diag(board, pos, stone);
  return diagLeft(board, pos, stone);
}

const vert = (board, { x, y }, stone) => {
  let cnt = 0;
  while (y < BOARD_SIZE && board[y][x] === stone) {
    cnt++;
    y++;
  }

  return {
    cnt,
    end_x: x,
    end_y: y >= BOARD_SIZE ? BOARD_SIZE - 1 : y - 1,
  };
};

const hori = (board, { x, y }, stone) => {
  let cnt = 0;
  while (x < BOARD_SIZE && board[y][x] === stone) {
    cnt++;
    x++;
  }

  return {
    cnt,
    end_x: x >= BOARD_SIZE ? BOARD_SIZE - 1 : x - 1,
    end_y: y,
  };
};

const diag = (board, { x, y }, stone) => {
  let cnt = 0;
  while (x < BOARD_SIZE && y < BOARD_SIZE && board[y][x] === stone) {
    cnt++;
    y++;
    x++;
  }

  return {
    cnt,
    end_x: x >= BOARD_SIZE ? BOARD_SIZE - 1 : x - 1,
    end_y: y >= BOARD_SIZE ? BOARD_SIZE - 1 : y - 1,
  };
};

const diagLeft = (board, { x, y }, stone) => {
  let cnt = 0;
  while (x >= 0 && y < BOARD_SIZE && board[y][x] === stone) {
    cnt++;
    y++;
    x--;
  }

  return {
    cnt,
    end_x: x < 0 ? 0 : x + 1,
    end_y: y >= BOARD_SIZE ? BOARD_SIZE - 1 : y - 1,
  };
};