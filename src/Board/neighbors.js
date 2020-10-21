import { BOARD_SIZE, DIRECTIONS } from '@/const/Game';
import { validatePos } from '@/utils/BoardUtils';
import * as Relocate from './relocate';

export default function getNeighbors(board, pos, stone) {
  const { dir } = pos;
  if (dir === DIRECTIONS.VERT) return vert(board, pos, stone);
  if (dir === DIRECTIONS.HORI) return hori(board, pos, stone);
  if (dir === DIRECTIONS.DIAG) return diag(board, pos, stone);
  return diagLeft(board, pos, stone);
}

const vert = (board, { x, y, end_x, end_y, dir }, stone) => {
  const empty = [];
  if (y > 0 && board[y - 1][x] === 0) {
    const newPos = { x: x, y: y - 2, dir };
    validatePos(board, newPos, stone) && empty.push(newPos);
  }
  if (end_y + 1 < BOARD_SIZE && board[end_y + 1][end_x] === 0) {
    const newPos = { x: end_x, y: end_y + 2, dir };
    validatePos(board, newPos, stone) && empty.push(newPos);
  }

  return empty.map((coord) => Relocate.vert(board, coord, stone));
};

const hori = (board, { x, y, end_x, end_y, dir }, stone) => {
  const empty = [];
  if (x > 0 && board[y][x - 1] === 0) {
    const newPos = { x: x - 2, y: y, dir };
    validatePos(board, newPos, stone) && empty.push(newPos);
  }
  if (end_x + 1 < BOARD_SIZE && board[end_y][end_x + 1] === 0) {
    const newPos = { x: end_x + 2, y: end_y, dir };
    validatePos(board, newPos, stone) && empty.push(newPos);
  }

  return empty.map((coord) => Relocate.hor(board, coord, stone));
};

const diag = (board, { x, y, end_x, end_y, dir }, stone) => {
  const empty = [];
  if (x > 0 && y > 0 && board[y - 1][x - 1] === 0) {
    const newPos = { x: x - 2, y: y - 2, dir };
    validatePos(board, newPos, stone) && empty.push(newPos);
  }
  if (end_x + 1 < BOARD_SIZE && end_y + 1 < BOARD_SIZE && board[end_y + 1][end_x + 1] === 0) {
    const newPos = { x: end_x + 2, y: end_y + 2, dir };
    validatePos(board, newPos, stone) && empty.push(newPos);
  }

  return empty.map((coord) => Relocate.diag(board, coord, stone));
};

const diagLeft = (board, { x, y, end_x, end_y, dir }, stone) => {
  const empty = [];
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
