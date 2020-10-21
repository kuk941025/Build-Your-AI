import { BOARD_SIZE, DIRECTIONS } from '@/const/Game';
import { getOppStone } from '@/utils/BoardUtils';

export const check = (board = [[]], last = {}) => {
  const startPos = relocateCursors(board, last);
  const countedStones = countStones(board, startPos, last.stone);

  const checkedDefense = checkDefenses(board, countedStones, last.stone);
  checkEmpty(board, checkedDefense, last.stone);
  return checkedDefense;
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

  return startPos.map((pos) => ({
    ...pos,
    ...count(pos),
  }));
};

const checkDefenses = (board = [[]], positions = [], stone) => {
  const checkDefense = ({ x, y, dir, end_x, end_y }) => {
    let defenses = 0;
    if (dir === DIRECTIONS.VERT) {
      if (y === 0) defenses++;
      else board[y - 1][x] === getOppStone(stone) && defenses++;

      if (end_y + 1 >= BOARD_SIZE) defenses++;
      else board[end_y + 1][end_x] === getOppStone(stone) && defenses++;
      return defenses;
    }
    if (dir === DIRECTIONS.HORI) {
      if (x === 0) defenses++;
      else board[y][x - 1] === getOppStone(stone) && defenses++;

      if (end_x + 1 >= BOARD_SIZE) defenses++;
      else board[end_y][end_x + 1] === getOppStone(stone) && defenses++;
      return defenses;
    }

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

  return positions.map((pos) => ({
    ...pos,
    defenses: checkDefense(pos),
  }));
};

// if next space is an empty space, start count from the next next stone
const checkEmpty = (board = [[]], positions = [], stone) => {
  const getEmptyPositions = ({ x, y, end_x, end_y, dir }) => {
    const empty = [];
    if (dir === DIRECTIONS.VERT) {
      y > 0 && board[y - 1][x] === 0 && empty.push({ x, y: y - 1 });
      end_y + 1 < BOARD_SIZE && board[end_y + 1][end_x] === 0 && empty.push({ x: end_x, y: end_y + 1 });
      return empty;
    }
    if (dir === DIRECTIONS.HORI) {
      x > 0 && board[y][x - 1] === 0 && empty.push({ x: x - 1, y });
      end_x + 1 < BOARD_SIZE && board[end_y][end_x + 1] === 0&& empty.push({ x: end_x + 1, y: end_y });
      return empty;
    }

    x > 0 && y > 0 && board[y - 1][x - 1] === 0 && empty.push({ x: x - 1, y: y - 1 });
    end_x + 1 < BOARD_SIZE &&
      end_y + 1 < BOARD_SIZE &&
      board[end_y + 1][end_x + 1] === 0 &&
      empty.push({ x: end_x + 1, y: end_y + 1 });

    return empty;
  };

  const emptyPositions = positions.map((pos) => ({ dir: pos.dir, empty: getEmptyPositions(pos) }));
  console.log(emptyPositions);
};
