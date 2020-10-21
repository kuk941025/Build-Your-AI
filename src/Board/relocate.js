import { DIRECTIONS, BOARD_SIZE } from '@/const/Game';

export const vert = (board, pos, stone) => {
  let x = pos.x;
  let y = pos.y;

  while (y - 1 >= 0 && board[y - 1][x] === stone) {
    y--;
  }

  return {
    x,
    y,
    dir: DIRECTIONS.VERT,
  };
};

export const hor = (board, pos, stone) => {
  let x = pos.x;
  let y = pos.y;

  while (x - 1 >= 0 && board[y][x - 1] === stone) {
    x--;
  }

  return {
    x,
    y,
    dir: DIRECTIONS.HORI,
  };
};

export const diag = (board, pos, stone) => {
  let x = pos.x;
  let y = pos.y;

  while (x - 1 >= 0 && y - 1 >= 0 && board[y - 1][x - 1] === stone) {
    y--;
    x--;
  }

  return {
    x,
    y,
    dir: DIRECTIONS.DIAG,
  };
};

export const diagLeft = (board, pos, stone) => {
  let x = pos.x;
  let y = pos.y;

  while (x + 1 < BOARD_SIZE && y - 1 >= 0 && board[y - 1][x + 1] === stone) {
    y--;
    x++;
  }

  return {
    x,
    y,
    dir: DIRECTIONS.DIAG_LEFT,
  };
};
