// Get Cuurent Time 
const clockContainer = document.querySelector(".nav__time");
const clockTitle = clockContainer.querySelector("h1");

function getTime(){
  const date = new Date();
  const hours = date.getHours();
  const minutes = date.getMinutes();
  clockTitle.innerText = `${hours < 10 ? `0${hours}` : hours}:${minutes < 10 ? `0${minutes}` : minutes}`
}

function init(){
  getTime();
  setInterval(getTime, 1000);
}

init();

// Hide Folder

function slidePage(){
  var slidePage = document.getElementById("sidebar__container");
  if (slidePage.style.display === "none") {
      slidePage.style.display = "block";
    } else {
      slidePage.style.display = "none";
    }
}

// Scrolling change folder size 



const home = document.querySelector('.folder__detail');
const homeHight = home.getBoundingClientRect().height

document.addEventListener('scroll',()=>{
    home.style.opacity = 1 - window.scrollY / homeHight;
});





// Show add when scrolling down

const add = document.querySelector(".add");

document.addEventListener("scroll",()=>{
    if(window.scrollY > homeHight / 3 ){
        add.classList.add("visible");
    } else{
        add.classList.remove('visible')
    }});