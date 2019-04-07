import hexToRgb from "./hexToRgb";

export default color => {
  color = hexToRgb(color)[1];
  let [R, G, B] = color;
  R = 255 - R;
  G = 255 - G;
  B = 255 - B;
  return `rgb(${R},${G},${B})`;
};
