export const getCoord = ({ mouseCoord, boxCoord, boxSize, pad }) => Math.round((mouseCoord - boxCoord - pad) / boxSize);


