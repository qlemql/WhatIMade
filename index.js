function add(char) {
  var display = document.getElementById("display");
  //display.value는 input 태그 안에 들어 있는 값을 의미.
  display.value = display.value + char;
  //input 태그의 값 뒤에 char 문자를 추가해 주는 역할.
}

function calculate() {
  var display = document.getElementById("display");
  var result = eval(display.value);
  document.getElementById("result").value = result;
}

function reset() {
  document.getElementById("display").value = "";
  document.getElementById("result").value = "";
}
