function filter_list(l) {
  let myArray = [];
  l.forEach(myFunction);

  function myFunction(item, index, arr) {
    if (typeof item !== "string") {
      myArray.push(item);
    }
  }

  return myArray;
}

console.log(filter_list([1, 2, "sfsd", 4, "sdfdsjfl", "fsdjfls", 1]));
