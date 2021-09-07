const grid = document.querySelector(".grid");
let squares = Array.from(document.querySelectorAll(".grid div"));
const scoreDisplay = document.querySelector("#score");
const startBtn = document.querySelector("#start-btn");
const width = 10;
let nextRandom = 0;
let timerId;
let score = 0;
const colors = ["orange", "red", "purple", "green", "blue"];

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
    squares[currentPosition + index].style.backgroundColor = colors[random];
  });
}

function undraw() {
  current.forEach((index) => {
    squares[currentPosition + index].classList.remove("tetromino");
    squares[currentPosition + index].style.backgroundColor = "";
  });
}

//도형이 매초마다 아래로 떨어지게
// timerId = setInterval(moveDown, 1000);

//키보드로 움직이기
function control(e) {
  if (e.keyCode === 37) {
    moveLeft();
  } else if (e.keyCode === 38) {
    rotate();
  } else if (e.keyCode === 39) {
    moveRight();
  } else if (e.keyCode === 40) {
    moveDown();
  }
}
document.addEventListener("keyup", control);

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
    random = nextRandom;
    nextRandom = Math.floor(Math.random() * theTetrominoes.length);
    current = theTetrominoes[random][currentRotation];
    currentPosition = 4;
    draw();
    displayShape();
    addScore();
    gameOver();
  }
}
//왼쪽으로 움직일때 끝에서 넘어가지 않도록

function moveLeft() {
  undraw();
  const isAtLeftEdge = current.some(
    (index) => (currentPosition + index) % width === 0
  );

  if (!isAtLeftEdge) currentPosition -= 1;

  if (
    current.some((index) =>
      squares[currentPosition + index].classList.contains("taken")
    )
  ) {
    currentPosition += 1;
  }

  draw();
}

//오른쪽으로 움직일때 끝에서 넘어가지 않도록

function moveRight() {
  undraw();
  const isAtRightEdge = current.some(
    (index) => (currentPosition + index) % width === width - 1
  );

  if (!isAtRightEdge) currentPosition += 1;

  if (
    current.some((index) =>
      squares[currentPosition + index].classList.contains("taken")
    )
  ) {
    currentPosition -= 1;
  }

  draw();
}

//도형 회전
function rotate() {
  undraw();
  currentRotation++;
  if (currentRotation === current.length) {
    currentRotation = 0;
  }
  current = theTetrominoes[random][currentRotation];
  draw();
}

//다음 도형 미리보기
const displaySquares = document.querySelectorAll(".mini-grid div");
const displayWidth = 4;
const displayIndex = 0;

const upNextTetrominoes = [
  [1, displayWidth + 1, displayWidth * 2 + 1, 2], //lTetromino
  [0, displayWidth, displayWidth + 1, displayWidth * 2 + 1], //zTetromino
  [1, displayWidth, displayWidth + 1, displayWidth + 2], //tTetromino
  [0, 1, displayWidth, displayWidth + 1], //oTetromino
  [1, displayWidth + 1, displayWidth * 2 + 1, displayWidth * 3 + 1], //iTetromino
];

function displayShape() {
  displaySquares.forEach((square) => {
    square.classList.remove("tetromino");
    square.style.backgroundColor = "";
  });
  upNextTetrominoes[nextRandom].forEach((index) => {
    displaySquares[displayIndex + index].classList.add("tetromino");
    displaySquares[displayIndex + index].style.backgroundColor =
      colors[nextRandom];
  });
}

startBtn.addEventListener("click", () => {
  if (timerId) {
    clearInterval(timerId);
    timerId = null;
  } else {
    draw();
    timerId = setInterval(moveDown, 1000);
    nextRandom = Math.floor(Math.random() * theTetrominoes.length);
    displayShape();
  }
});

function addScore() {
  for (let i = 0; i < 199; i += width) {
    const row = [
      i,
      i + 1,
      i + 2,
      i + 3,
      i + 4,
      i + 5,
      i + 6,
      i + 7,
      i + 8,
      i + 9,
    ];

    if (row.every((index) => squares[index].classList.contains("taken"))) {
      score += 10;
      scoreDisplay.innerHTML = score;
      row.forEach((index) => {
        squares[index].classList.remove("taken");
        squares[index].classList.remove("tetromino");
        squares[index].style.backgroundColor = "";
      });
      const squaresRemoved = squares.splice(i, width);
      squares = squaresRemoved.concat(squares);
      squares.forEach((cell) => grid.appendChild(cell));
    }
  }
}

function gameOver() {
  if (
    current.some((index) =>
      squares[currentPosition + index].classList.contains("taken")
    )
  ) {
    scoreDisplay.innerHTML = "END";
    clearInterval(timerId);
  }
}
