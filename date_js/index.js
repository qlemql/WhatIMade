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

//날짜계산

var 날수 = new Date("2020-08-11") - new Date("1994-09-13");
console.log(날수);

var 하루초 = 24 * 60 * 60 * 1000;
//86400000

console.log("일수 차이 : " + parseInt(날수 / 86400000) + "일");
console.log("월수 차이 : " + parseInt(날수 / (86400000 * 30)) + "월");
console.log("년수 차이 : " + parseInt(날수 / (86400000 * 30 * 12)) + "년");

//D-day 계산
var Dday = new Date(2020, 12, 25);
var now = new Date();

var gap = now.getTime() - Dday.getTime();
var result = Math.floor(gap / (1000 * 60 * 60 * 24)) * -1;

document.write("남은 날은 " + result + " 일 입니다.");
