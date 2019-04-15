export let temp = 1;
export const temp1 = 2;
export const temp2 = 3;

const sum = (a, b) => a + b;
export default sum;

export const update = (a) => { temp = a; }

export const formatPrettyDate = utcDate => {
  const date = new Date(utcDate);
  const zeroPad = aNumber => {
    return ('0' + aNumber).slice(-2);
  };
  const now = new Date();
  const diff = now - date;
  const m = [
    'Jan',
    'Feb',
    'Mar',
    'Apr',
    'May',
    'Jun',
    'Jul',
    'Aug',
    'Sep',
    'Oct',
    'Nov',
    'Dec',
  ];
  const dow = [
    'Sunday',
    'Monday',
    'Tuesday',
    'Wednesday',
    'Thursday',
    'Friday',
    'Saturday',
  ];
  let tempTime;
  const minute = 60000;
  const hour = 3600000;
  const day = 86400000;
  const week = 604800000;
  const year = 31536000000;
  let prettyDate = 'No date available';
  if (diff < hour) {
    tempTime = Math.floor(diff / minute);
    if (tempTime === 1) {
      prettyDate = tempTime + ' minute ago';
    } else {
      prettyDate = tempTime + ' minutes ago';
    }
  } else if (diff < day) {
    tempTime = Math.floor(diff / hour);
    if (tempTime === 1) {
      prettyDate = tempTime + ' hour ago';
    } else {
      prettyDate = tempTime + ' hours ago';
    }
  } else if (diff < week) {
    tempTime = new Date(date);
    prettyDate =
      dow[tempTime.getDay()] +
      ' at ' +
      tempTime.getHours() +
      ':' +
      zeroPad(tempTime.getMinutes());
  } else if (diff < year) {
    tempTime = new Date(date);
    prettyDate =
      tempTime.getDate() +
      ' ' +
      m[tempTime.getMonth()] +
      ' at ' +
      tempTime.getHours() +
      ':' +
      zeroPad(tempTime.getMinutes());
  }
  return prettyDate;
};
