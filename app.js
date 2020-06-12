const grid = document.querySelector(".grid");
let squares = Array.from(document.querySelectorAll(".grid div"));
const ScoreDisplay = document.querySelector("#score");
const StartBtn = document.querySelector("start-btn");
const width = 10;

//테트리스 도형
const lTetromino = [
  [1, width + 1, width * 2 + 1, 2],
  [width, width + 1, width + 2, width * 2 + 2],
  [1, width + 1, width * 2 + 1, width * 2],
  [width, width * 2, width * 2 + 1, width * 2 + 2],
];

const zTetrominoe = [
  [0, width, width + 1, width * 2 + 1],
  [width + 1, width + 2, width * 2, width * 2 + 1],
  [0, width, width + 1, width * 2 + 1],
  [width + 1, width + 2, width * 2, width * 2 + 1],
];

const tTetrominoe = [
  [1, width, width + 1, width + 2],
  [1, width + 1, width + 2, width * 2 + 1],
  [width, width + 1, width + 2, width * 2 + 1],
  [1, width, width + 1, width * 2 + 1],
];

const oTetrominoe = [
  [0, 1, width, width + 1],
  [0, 1, width, width + 1],
  [0, 1, width, width + 1],
  [0, 1, width, width + 1],
];

const iTetrominoe = [
  [1, width + 1, width * 2 + 1, width * 3 + 1],
  [width, width + 1, width + 2, width + 3],
  [1, width + 1, width * 2 + 1, width * 3 + 1],
  [width, width + 1, width + 2, width + 3],
];

const theTetrominoes = [
  lTetromino,
  zTetrominoe,
  tTetrominoe,
  oTetrominoe,
  iTetrominoe,
];

let currentPosition = 4;
let currentRotation = 0;

//도형 랜덤 선택
let random = Math.floor(Math.random() * theTetrominoes.length);
let current = theTetrominoes[random][0];

function draw() {
  current.forEach((index) => {
    squares[currentPosition + index].classList.add("tetromino");
  });
}

function undraw() {
  current.forEach((index) => {
    squares[currentPosition + index].classList.remove("tetromino");
  });
}

//도형이 매초마다 아래로 떨어지게
timerId = setInterval(moveDown, 1000);

//떨어지는 함수
function moveDown() {
  undraw();
  currentPosition += width;
  draw();
  freeze();
}

//멈추게하는 함수
function freeze() {
  if (
    current.some((index) =>
      squares[currentPosition + index + width].classList.contains("taken")
    )
  ) {
    current.forEach((index) =>
      squares[currentPosition + index].classList.add("taken")
    );
    //새로운 도형이 떨어지게
    random = Math.floor(Math.random() * theTetrominoes.length);
    current = theTetrominoes[random][currentRotation];
    currentPosition = 4;
    draw();
  }
}
