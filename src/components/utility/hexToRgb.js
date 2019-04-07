export default hex => {
  const shorthandRegex = /^#?([a-f\d])([a-f\d])([a-f\d])$/i,
    exe = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i;
  hex = hex.replace(shorthandRegex, (m, r, g, b) => r + r + g + g + b + b);

  const result = exe.exec(hex);
  return result
    ? [
        `rgb(${parseInt(result[1], 16)},${parseInt(result[2], 16)},${parseInt(
          result[3],
          16
        )})`,
        [
          parseInt(result[1], 16),
          parseInt(result[2], 16),
          parseInt(result[3], 16)
        ]
      ]
    : null;
};
