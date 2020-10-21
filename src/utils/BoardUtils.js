import { BLACK_STONE, WHITE_STONE } from '@/const/Game';

export const getCoord = ({ mouseCoord, boxCoord, boxSize, pad }) => Math.round((mouseCoord - boxCoord - pad) / boxSize);
export const getOppStone = (stone) => (stone === BLACK_STONE ? WHITE_STONE : BLACK_STONE);
