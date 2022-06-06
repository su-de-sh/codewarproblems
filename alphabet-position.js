function alphabetPosition(text) {
  text = text.toLowerCase();
  posStr = "";
  let positions = "0abcdefghijklmnopqrstuvwxyz";
  for (i = 0; i < text.length; i++) {
    if (positions.indexOf(text[i]) > 0) {
      posStr += positions.indexOf(text[i]) + " ";
    }
  }

  return posStr.trim();
}
console.log(alphabetPosition("Sjlf"));
