//시간 계산

var 시간1 = new Date("2020-08-11 11:16");
var 시간2 = new Date("2020-08-12 00:00");
var 간격 = 시간2 - 시간1;
console.log(간격);
//간격=45840000(밀리초)

var 시 = Math.floor((45840000 % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
var 분 = Math.floor((45840000 % (1000 * 60 * 60)) / (1000 * 60));
var 초 = Math.floor((45840000 % (1000 * 60)) / 1000);

console.log(시 + "시간" + 분 + "분" + 초 + "초");
