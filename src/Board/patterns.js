import { BOARD_SIZE } from '@/const/Game';

export const check = (board = [[]], last = {}) => {
  const startPos = relocateCursors(board, last);
  const countedStones = countStones(board, startPos, last.stone);

  return countedStones;
};

const DIRECTIONS = {
  VERT: 0,
  HORI: 1,
  DIAG: 2,
};

//relocate cursor to possible starting points
const relocateCursors = (board = [[]], pos = { x: 0, y: 0, stone: 0 }) => {
  if (!pos.stone) return [];

  const results = [];
  let x = pos.x;
  let y = pos.y;

  while (y - 1 >= 0 && board[y - 1][x] === pos.stone) {
    y--;
  }
  results.push({ x, y, dir: DIRECTIONS.VERT });

  x = pos.x;
  y = pos.y;
  while (x - 1 >= 0 && board[y][x - 1] === pos.stone) {
    x--;
  }
  results.push({ x, y, dir: DIRECTIONS.HORI });

  x = pos.x;
  y = pos.y;
  while (x - 1 >= 0 && y - 1 >= 0 && board[y - 1][x - 1] === pos.stone) {
    y--;
    x--;
  }
  results.push({ x, y, dir: DIRECTIONS.DIAG });

  return results;
};

const countStones = (board, startPos = [], stone) => {
  const count = ({ x, y, dir }) => {
    let cnt = 0;

    if (dir === DIRECTIONS.VERT) {
      while (y + 1 < BOARD_SIZE && board[y][x] === stone) {
        cnt++;
        y++;
      }

      return {
        cnt,
        end_x: x,
        end_y: y === BOARD_SIZE ? y : y - 1,
      };
    }

    if (dir === DIRECTIONS.HORI) {
      while (x + 1 <= BOARD_SIZE && board[y][x] === stone) {
        cnt++;
        x++;
      }

      return {
        cnt,
        end_x: x === BOARD_SIZE ? x : x - 1,
        end_y: y,
      };
    }

    while (x + 1 < BOARD_SIZE && y + 1 < BOARD_SIZE && board[y][x] === stone) {
      cnt++;
      y++;
      x++;
    }

    return {
      cnt,
      end_x: x === BOARD_SIZE ? x : x - 1,
      end_y: y === BOARD_SIZE ? y : y - 1,
    };
  };

  return startPos
    .map((pos) => ({
      ...pos,
      ...count(pos),
    }))
    .filter((pos) => pos.cnt > 1);
};

const addDefended = (board, startPos = [], stone) => {};
