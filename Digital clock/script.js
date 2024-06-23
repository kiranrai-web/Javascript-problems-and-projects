console.log("Javascript is running");

const hour = document.getElementById("hour");
const minute = document.getElementById("minute");
const second = document.getElementById("second");
const year = document.getElementById("year");
const month = document.getElementById("month");
const day = document.getElementById("day");

const monthName = (month) => {
  switch (month) {
    case 0:
      return `January`;
      break;
    case 1:
      return `February`;
      break;
    case 2:
      return `March`;
      break;
    case 3:
      return `April`;
      break;
    case 4:
      return `May`;
      break;
    case 5:
      return `June`;
      break;
    case 6:
      return `July`;
      break;
    case 7:
      return `August`;
      break;
    case 8:
      return `September`;
      break;
    case 9:
      return `October`;
      break;
    case 10:
      return `November`;
      break;
    case 11:
      return `December`;
      break;
    default:
        return 'none';
        break;
  }
};

const dayName =(day)=>{
    switch (day) {
        case 0:
          return `Sunday`;
          break;
        case 1:
          return `Monday`;
          break;
        case 2:
          return `Tuesday`;
          break;
        case 3:
          return `Wednesday`;
          break;
        case 4:
          return `Thursday`;
          break;
        case 5:
          return `Friday`;
          break;
        case 6:
            return `Saturday`
            break;
        default:
            return `None`;
            break;
    }
}

const updateTime = () => {
  const time = new Date();

  year.innerHTML = time.getFullYear();
  month.innerHTML = monthName(time.getMonth());
  day.innerHTML = dayName(time.getDay());

  hour.innerHTML = time.getHours();
  minute.innerHTML = time.getMinutes();
  second.innerHTML = time.getSeconds();
};

updateTime();
setInterval(updateTime, 1000);
