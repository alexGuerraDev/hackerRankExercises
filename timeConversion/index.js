/*
 * Complete the 'timeConversion' function below.
 *
 * The function is expected to return a STRING.
 * The function accepts STRING s as parameter.
 */

function timeConversion(s) {
  const abbrevation = s.substr(s.length - 2, s.length - 2)
  s = s.split(':')
  s[2] = s[2].split(/[A-Z]{2}/)[0]
  if (abbrevation === 'PM') {
    if (s[0] !== '12') s[0] = (parseInt(s[0]) + 12).toString()
  } else {
    if (s[0] === '12') {
      s[0] = (parseInt(s[0]) - 12).toString() + '0'
    }
  }
  return s.join(':')
}


timeConversion('12:40:22AM') // 00:40:22
timeConversion('07:05:45PM') // 19:05:45
timeConversion('12:01:00PM') // 12:01:00
timeConversion('12:01:00AM') // 00:01:00
timeConversion('07:05:45PM') // 19:05:45