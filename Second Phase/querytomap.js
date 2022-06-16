// Converts a URL Query String into an object map
function convertQueryToMap(query) {
  let myObjArray = [];
  let queryArr = query.split("&");
  //   console.log(queryArr);

  for (let i = 0; i < queryArr.length; i++) {
    let keys = queryArr[i].split(".");
    let val = keys[keys.length - 1].split("=");
    keys.splice(keys.length - 1, 1, val[0], val[1]);
    keys.splice(
      keys.length - 1,
      1,
      keys[keys.length - 1].split("%20").join(" ")
    );

    const eachObject = keys.reduceRight((acc, curr) => ({ [curr]: acc }));

    myObjArray.push(eachObject);
  }

  let myObj = {};

  for (obj of myObjArray) {
    // console.log(obj);
    for (let keys in obj) {
      myObj[keys] = obj[keys];
    }
  }
  console.log(myObj);
}

convertQueryToMap(
  "user.name.firstname=Bob&user.name.lastname=Smith&user.favoritecolor=Light%20Blue"
);
