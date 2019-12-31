const MONTHS = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun',
 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
const Days =['Sun','Mon','Tue','Wen','Thu','Fri','Sat'];


const getAlphaMonth = (value) => {
  return MONTHS.find((month) => {
    return month.toLowerCase().includes(value.slice(0,3).toLowerCase());
  });
}

module.exports = (value) => {
  const parsedDate = new Date(Number(value));
  if(isFinite(parsedDate)) {
    let currentDay = Days[parsedDate.getDay()];
    let day = parsedDate.getUTCDate();
    let month = MONTHS[parsedDate.getUTCMonth()];
    let year = parsedDate.getUTCFullYear();
    let hour = (parsedDate.getHours()===0)?'00':parsedDate.getHours();
    let min = (parsedDate.getMinutes()===0)?'00':parsedDate.getMinutes();
    let sec = (parsedDate.getSeconds()===0)?'00':parsedDate.getSeconds();
    return {unix: Number(value), utc: `${currentDay}, ${day} ${month} ${year} ${hour}:${min}:${sec} GMT`};
  }else{

    var naturalDate = new Date(value);
      naturalDate = naturalDate.toUTCString();
        var unixDate = new Date(value).getTime();
    return {unix :unixDate , utc:naturalDate};
  }
  throw new Error('Invalid Format');
}
 
 