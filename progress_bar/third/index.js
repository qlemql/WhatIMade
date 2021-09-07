let percent = document.querySelector('.percent');
let progress = document.querySelector('.progress');
let text = document.querySelector('.text');

let count = 4;
let per = 16;
let loading = setInterval(animate, 50);
// setInterval(함수명, 딜레이시간)

function animate() {
    if (count == 100 && per == 400) {
        percent.classList.add('text-blink')
        text.style.display = 'block';
        clearInterval(loading);
        // clearInterval() => 인자에 들어가는 변수의 실행 취소시킨다
    } else {
        per = per + 4;
        count = count + 1;
        progress.style.width = per + 'px';
        percent.textContent = count + '%';
    }
}