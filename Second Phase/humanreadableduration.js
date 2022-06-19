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
  let myDurationMap1 = [];
  let myDurationMap = ["year", "day", "hour", "minute", "second"];
  let myDuration1 = myDuration.filter((n, i) => {
    if (n !== 0) {
      myDurationMap1.push(myDurationMap[i]);
      return n;
    }
  });
  console.log(myDuration1);
  console.log(myDurationMap1);

  let myDurationFormat = "";
  myDuration1.forEach((time, i) => {
    if (time > 1) {
      if (i === myDuration1.length - 1) {
        myDurationFormat += `${time} ${myDurationMap1[i]}s`;
      } else if (i === myDuration1.length - 2) {
        myDurationFormat += `${time} ${myDurationMap1[i]}s and `;
      } else {
        myDurationFormat += `${time} ${myDurationMap1[i]}s, `;
      }
    }
    if (time === 1) {
      if (i === myDuration1.length - 1) {
        myDurationFormat += `${time} ${myDurationMap1[i]}`;
      } else if (i === myDuration1.length - 2) {
        myDurationFormat += `${time} ${myDurationMap1[i]} and `;
      } else {
        myDurationFormat += `${time} ${myDurationMap1[i]}, `;
      }
    }
  });
  return myDurationFormat.trim();
}

console.log(formatDuration(15171));

// Expected: '111 days, 22 hours and 27 seconds', instead got: '111 days and 22 hours27 seconds'
