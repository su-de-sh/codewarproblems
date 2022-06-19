function formatDuration(seconds) {
  console.log(seconds);
  if (!seconds) return "now";
  let year = Math.floor(seconds / (3600 * 24 * 365)); //(3.154 * Math.pow(10, 7)
  let remSec = seconds % (3600 * 24 * 365);
  let day = Math.floor(remSec / 86400);
  remSec = remSec % 86400;
  let hour = Math.floor(remSec / 3600);
  remSec = remSec % 3600;
  let minute = Math.floor(remSec / 60);
  let second = remSec % 60;
  let myDuration = [year, day, hour, minute, second];

  return convert(myDuration);
}

function convert(myDuration) {
  myDurationFormat = "";
  let myDurationMap = ["year", "day", "hour", "minute", "second"];
  myDuration.forEach((time, i) => {
    if (time > 1) {
      if (myDurationMap[i] === "second") {
        myDurationFormat += `${time} ${myDurationMap[i]}s`;
      } else {
        if (myDuration[i + 1] && !myDuration[i + 2]) {
          myDurationFormat += `${time} ${myDurationMap[i]}s and `;
        } else if (myDuration[i + 1] && myDuration[i + 2]) {
          myDurationFormat += `${time} ${myDurationMap[i]}s, `;
        } else {
          myDurationFormat += `${time} ${myDurationMap[i]}s`;
        }
      }
    }
    if (time === 1) {
      if (myDurationMap[i] === "second") {
        myDurationFormat += `${time} ${myDurationMap[i]} `;
      } else {
        if (myDuration[i + 1] && !myDuration[i + 2]) {
          myDurationFormat += `${time} ${myDurationMap[i]} and `;
        } else if (myDuration[i + 1] && myDuration[i + 2]) {
          myDurationFormat += `${time} ${myDurationMap[i]}, `;
        } else {
          myDurationFormat += `${time} ${myDurationMap[i]}`;
        }
      }
    }
  });
  return myDurationFormat.trim();
}

console.log(formatDuration(369121517));
