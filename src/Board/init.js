import { initBoardData } from '@/utils/BoardUtils';

export const initBoards = (size) =>
  Array(size)
    .fill(0)
    .map((_) => initBoardData());

export const initDNAs = (size) =>
  Array(size)
    .fill(0)
    .map((_) => []);
