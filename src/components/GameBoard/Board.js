import React, { useRef, useEffect, useCallback } from 'react';
import { BOARD_SIZE, BLACK_STONE } from '@/const/Game';
import { convert2Img, getCoord } from '@/utils';
import BoardImg from './images/Board.png';
import BlackStoneImg from './images/BlackStone.png';
import WhiteStoneImg from './images/WhiteStone.png';

const drawLines = ({ ctx, boxSize, pad }) => {
  for (let i = 0; i < BOARD_SIZE; i++) {
    for (let j = 0; j < BOARD_SIZE; j++) {
      ctx.strokeRect(i * boxSize + pad, j * boxSize + pad, boxSize, boxSize);
    }
  }
};

const Board = ({ size = 600, onClick = null, board }) => {
  const canv = useRef(null);
  const stoneType = useRef(1);
  const blackStone = useRef(convert2Img(BlackStoneImg));
  const whiteStone = useRef(convert2Img(WhiteStoneImg));
  const boxSize = Math.floor(size / BOARD_SIZE);
  const pad = Math.floor(boxSize / 4);

  const handleOnClick = (e) => {
    e.stopPropagation();

    const rect = canv.current.getBoundingClientRect();
    const x = getCoord({ mouseCoord: e.clientX, boxCoord: rect.left, pad, boxSize });
    const y = getCoord({ mouseCoord: e.clientY, boxCoord: rect.top, pad, boxSize });

    if (x < 0 || y < 0) return;
    if (board[y][x] > 0) return;
    onClick && onClick(x, y, stoneType.current);

    stoneType.current = (stoneType.current % 2) + 1;
  };

  const placeStone = useCallback(
    (stoneNum, x, y) => {
      const stoneImg = stoneNum === BLACK_STONE ? blackStone.current : whiteStone.current;
      const minusPos = Math.floor((boxSize - pad) / 2);
      const ctx = canv.current.getContext('2d');
      ctx.drawImage(stoneImg, x * boxSize + pad - minusPos, y * boxSize + pad - minusPos, boxSize - pad, boxSize - pad);
    },
    [boxSize, pad]
  );

  // Initialize
  useEffect(() => {
    if (!canv) return;
    const ctx = canv.current.getContext('2d');
    ctx.canvas.width = boxSize * BOARD_SIZE + pad * 2;
    ctx.canvas.height = boxSize * BOARD_SIZE + pad * 2;

    const boardImg = convert2Img(BoardImg);
    boardImg.onload = () => {
      ctx.drawImage(boardImg, 0, 0, size, size);
      drawLines({ ctx, boxSize, pad });
    };
  }, [boxSize, pad, size]);

  useEffect(() => {
    board.forEach((row, y) => {
      row.forEach((stoneType, x) => {
        if (stoneType > 0) placeStone(stoneType, x, y);
      });
    });
  }, [board, placeStone]);

  return <canvas ref={canv} onClick={handleOnClick} />;
};

export default Board;
