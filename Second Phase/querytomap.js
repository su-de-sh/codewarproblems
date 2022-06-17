// Converts a URL Query String into an object map
function convertQueryToMap(query) {
  let myObjArray = [];
  let myObj = {};
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

  // for (obj of myObjArray) {
  //   console.log(obj);
  //   for (let keys in obj) {
  //     myObj[keys] = obj[keys];
  //     userObj = myObj[keys];
  //     // console.log(userObj);
  //     for (let key in userObj) {
  //       myObj[keys][key] = userObj[key];
  //       let nameObj = myObj[keys][key];
  //       for (let k in nameObj) {
  //         myObj[keys][key][k] = nameObj[k];
  //         // console.log(nameObj[k]);
  //       }
  //     }
  //   }
  // }
  // for (obj of myObjArray) {
  //   for (let keys in obj) {
  //     // myObj[keys] = obj[keys];
  //     // userObj = myObj[keys];
  //     // // console.log(userObj);
  //     for (let key in obj[keys]) {
  //       // myObj[keys][key] = userObj[key];
  //       // let nameObj = myObj[keys][key];
  //       for (let k in [obj[keys]][key]) {
  //         myObj[keys][key][k] = [[obj[keys]][key]][k];
  //         // console.log(nameObj[k]);
  //       }
  //     }
  //   }
  // }

  console.log(myObjArray);
}

convertQueryToMap(
  "user.name.firstname=Bob&user.name.lastname=Smith&user.favoritecolor=Light%20Blue"
);
