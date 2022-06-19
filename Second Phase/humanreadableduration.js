function formatDuration(seconds) {
  let year = Math.floor(seconds / (3.154 * Math.pow(10, 7)));
  let remSec = seconds % (3.154 * Math.pow(10, 7));
  let day = Math.floor(remSec / 86400);
  remSec = remSec % 86400;
  let hour = Math.floor(remSec / 3600);
  remSec = remSec % 3600;
  let minute = Math.floor(remSec / 60);
  let second = remSec % 60;

  return `${year} ${day} ${hour} ${minute} ${second} `;
}

console.log(formatDuration(233662));
