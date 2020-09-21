export const convert2Img = (img) => {
  const imgTag = new Image();
  imgTag.src = img;

  return imgTag;
};
