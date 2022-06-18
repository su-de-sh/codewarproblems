function rgb(r, g, b) {
  r = r > 255 ? 255 : r;
  g = g > 255 ? 255 : g;
  b = b > 255 ? 255 : b;
  r = r < 0 ? 0 : r;
  g = g < 0 ? 0 : g;
  b = b < 0 ? 0 : b;
  let rInHex = convert(r.toString(16));
  let gInHex = convert(g.toString(16));
  let bInHex = convert(b.toString(16));

  function convert(hexcode) {
    if (hexcode.length < 2) {
      return "0" + hexcode.toUpperCase();
    } else return hexcode.toUpperCase();
  }

  return rInHex + gInHex + bInHex;
}
console.log(rgb(-255, 275, 255));
