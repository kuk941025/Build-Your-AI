import { BOARD_SIZE, DIRECTIONS } from '@/const/Game';
import { getOppStone, validatePos } from '@/utils/BoardUtils';
import * as Relocate from './relocate';

export const check = (board = [[]], last = {}) => {
  const startPos = relocateCursors(board, last, last.stone);

  const evaluatedStones = evaluateStone(board, startPos, last.stone);
  const res = checkEmpty(board, evaluatedStones, last.stone);
  console.log(res);
  // return checkedDefense;
};

const evaluateStone = (board, startPos, stone) => checkDefenses(board, countStones(board, startPos, stone), stone);

//relocate cursor to possible starting points
const relocateCursors = (board = [[]], pos = { x: 0, y: 0 }, stone) => {
  if (!stone) return [];

  return [
    Relocate.vert(board, pos, stone),
    Relocate.hor(board, pos, stone),
    Relocate.diag(board, pos, stone),
    Relocate.diagLeft(board, pos, stone),
  ];
};

const countStones = (board, startPos = [], stone) => {
  const count = ({ x, y, dir }) => {
    let cnt = 0;

    if (dir === DIRECTIONS.VERT) {
      while (y < BOARD_SIZE && board[y][x] === stone) {
        cnt++;
        y++;
      }

      return {
        cnt,
        end_x: x,
        end_y: y >= BOARD_SIZE ? BOARD_SIZE - 1 : y - 1,
      };
    }

    if (dir === DIRECTIONS.HORI) {
      while (x < BOARD_SIZE && board[y][x] === stone) {
        cnt++;
        x++;
      }

      return {
        cnt,
        end_x: x >= BOARD_SIZE ? BOARD_SIZE - 1 : x - 1,
        end_y: y,
      };
    }

    if (dir === DIRECTIONS.DIAG) {
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
    }

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

    if (dir === DIRECTIONS.DIAG) {
      if (x === 0 || y === 0) defenses++;
      else x - 1 >= 0 && y - 1 >= 0 && board[y - 1][x - 1] === getOppStone(stone) && defenses++;

      if (end_x + 1 >= BOARD_SIZE || end_y + 1 >= BOARD_SIZE) defenses++;
      else
        end_x + 1 < BOARD_SIZE &&
          end_y + 1 < BOARD_SIZE &&
          board[end_y + 1][end_x + 1] === getOppStone(stone) &&
          defenses++;

      return defenses;
    }

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

  return positions.map((pos) => ({
    ...pos,
    defenses: checkDefense(pos),
  }));
};

// if next space is an empty space, start count from the next next stone
const checkEmpty = (board = [[]], positions = [], stone) => {
  const getPos = ({ x, y, end_x, end_y, dir }) => {
    const empty = [];
    if (dir === DIRECTIONS.VERT) {
      if (y > 0 && board[y - 1][x] === 0) {
        const newPos = { x: x, y: y - 2, dir };
        validatePos(board, newPos, stone) && empty.push(newPos);
      }
      if (end_y + 1 < BOARD_SIZE && board[end_y + 1][end_x] === 0) {
        const newPos = { x: end_x, y: end_y + 2, dir };
        validatePos(board, newPos, stone) && empty.push(newPos);
      }

      return empty.map((coord) => Relocate.vert(board, coord, stone));
    }

    if (dir === DIRECTIONS.HORI) {
      if (x > 0 && board[y][x - 1] === 0) {
        const newPos = { x: x - 2 ,y: y, dir };
        validatePos(board, newPos, stone) && empty.push(newPos);
      }
      if (end_x + 1 < BOARD_SIZE && board[end_y][end_x + 1] === 0) {
        const newPos = { x: end_x + 2, y: end_y, dir };
        validatePos(board, newPos, stone) && empty.push(newPos);
      }

      return empty.map((coord) => Relocate.hor(board, coord, stone));
    }

    if (dir === DIRECTIONS.DIAG) {
      if (x > 0 && y > 0 && board[y - 1][x - 1] === 0) {
        const newPos = { x: x - 2, y: y - 2, dir };
        validatePos(board, newPos, stone) && empty.push(newPos);
      }
      if (end_x + 1 < BOARD_SIZE && end_y + 1 < BOARD_SIZE && board[end_y + 1][end_x + 1] === 0) {
        const newPos = { x: end_x + 2, y: end_y + 2, dir };
        validatePos(board, newPos, stone) && empty.push(newPos);
      }

      return empty.map((coord) => Relocate.diag(board, coord, stone));
    }

    if (x + 1 < BOARD_SIZE && y > 0 && board[y - 1][x + 1] === 0) {
      const newPos = { x: x + 2, y: y - 2, dir };
      validatePos(board, newPos, stone) && empty.push(newPos);
    }

    if (end_x - 1 >= 0 && end_y + 1 < BOARD_SIZE && board[end_y + 1][end_x - 1] === 0) {
      const newPos = { x: end_x - 2, y: end_y + 2, dir };
      validatePos(board, newPos, stone) && empty.push(newPos);
    }

    return empty.map((coord) => Relocate.diagLeft(board, coord, stone));
  };

  return positions
    .map((pos) => getPos(pos))
    .map((emptyPos) => (!emptyPos.length ? [] : evaluateStone(board, emptyPos, stone)))
    .map((evaluated, idx) => ({
      ...positions[idx],
      neighbors: evaluated,
    }));
};
