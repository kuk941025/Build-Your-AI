import React, { useRef, useEffect } from 'react';
import { BOARD_SIZE, BLACK_STONE, WHITE_STONE } from '@/const/Game';
import { convert2Img } from '@/utils/converter';
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

const Board = ({ size = 600, onClick = null }) => {
  const canv = useRef(null);
  const blackStone = useRef(convert2Img(BlackStoneImg));
  const whiteStone = useRef(convert2Img(WhiteStoneImg));
  const boxSize = Math.floor(size / BOARD_SIZE);
  const pad = Math.floor(boxSize / 4);

  // Initialize
  useEffect(() => {
    if (!canv) return;
    const ctx = canv.current.getContext('2d');
    ctx.canvas.width = size;
    ctx.canvas.height = size;

    const boardImg = convert2Img(BoardImg);
    boardImg.onload = () => {
      ctx.drawImage(boardImg, 0, 0, size, size);
      drawLines({ ctx, boxSize, pad });
    };
  }, [boxSize, pad, size]);

  const handleOnClick = (e) => {
    e.stopPropagation();

    const rect = canv.current.getBoundingClientRect();
    const x = Math.round((e.clientX - rect.left - pad) / (boxSize));
    const y = Math.round((e.clientY - rect.top - pad) / (boxSize));

    if (x < 0 || y < 0) return;
    onClick && onClick(x, y);
    
    placeStone(whiteStone.current, x, y);
    // ctx.drawImage(blackStone.current, x * boxSize + pad, y * boxSize + pad, boxSize - pad, boxSize - pad);
  };

  const placeStone = (stoneImg, x, y) => {
    const minusPos = Math.floor((boxSize - pad) / 2);
    const ctx = canv.current.getContext('2d');
    ctx.drawImage(stoneImg, x * boxSize + pad - minusPos, y * boxSize + pad - minusPos, boxSize - pad, boxSize - pad); 
  }
  return <canvas ref={canv} onClick={handleOnClick} />;
};

export default Board;
