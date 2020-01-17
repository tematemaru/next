export const jsImageCover = (image, innerWidth, innerHeight) => {
  if (!innerHeight) {
    const widthK = innerWidth / image.width;
    return {
      width: image.width * widthK,
      height: image.height * widthK,
    };
  }
  const screenAspect = innerWidth / innerHeight;
  const imageAspect = image.width / image.height;
  if (screenAspect > imageAspect) {
    return {
      width: innerWidth,
      height: (innerWidth / image.width) * image.height,
    };
  }
  return {
    width: (innerHeight / image.height) * image.width,
    height: innerHeight,
  };
};
