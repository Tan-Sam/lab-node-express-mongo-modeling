const get1990RandomDate = {
  maxDaysFromMonth: function(month){
    switch (month) {
      case 2: return 28;
      case 4:
      case 6:
      case 9:
      case 11: return 30;
      case 1:
      case 3:
      case 5:
      case 7:
      case 8:
      case 10:
      case 12: return 31;
      default: return -1;
    }
  },
  randFlooredNum: function(monthOrDay){
    return Math.floor(Math.random() * monthOrDay);
  },
  result: function(){
    //  month is 0 indexed. Hence 11. (0-11).
    const randMonth = this.randFlooredNum(11);
    const maxDays = this.maxDaysFromMonth(randMonth + 1);
    let randomDay = this.randFlooredNum(maxDays);
    if(randomDay === 0) randomDay++;

    return new Date(1990,
                    randMonth,
                    randomDay);
  }
}

module.exports = get1990RandomDate;
