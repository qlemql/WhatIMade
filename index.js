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


// Scrolling change folder size 

const home = document.querySelector('.folder__detail');
const homeHight = home.getBoundingClientRect().height

document.addEventListener('scroll',()=>{
    home.style.opacity = 1 - window.scrollY / homeHight;
});



// Scroll Animation

const hideTriggerMargin = 300;
const hideElementList = document.querySelectorAll('.hide__folder');

const hideFunc = function() {
  for (const element of hideElementList) {
    if (!element.classList.contains('show')) {
      if (window.innerHeight > element.getBoundingClientRect().top + hideTriggerMargin) {
        element.classList.add('show');
          }
        }
      }
    }

window.addEventListener('load', hideFunc);
window.addEventListener('scroll', hideFunc);


// Hide Folder

function slidePage(){
  var slidePage = document.getElementById("sidebar__container");
  if (slidePage.style.display === "none") {
      slidePage.style.display = "block";
    } else {
      slidePage.style.display = "none";
    }
}


// Show add when scrolling down

const add = document.querySelector(".add");

document.addEventListener("scroll",()=>{
    if(window.scrollY > homeHight / 3 ){
        add.classList.add("visible");
    } else{
        add.classList.remove('visible')
    }});




// Show Arrow up Button when scrolling down

const arrowUp = document.querySelector(".arrowBtn");

document.addEventListener("scroll",()=>{
    if(window.scrollY > homeHight / 2 ){
        arrowUp.classList.add("visible");
    } else{
        arrowUp.classList.remove('visible')
    }});

// Handle click on the ""arrow up" button

arrowUp.addEventListener("click",()=>{
    scrollIntoView('.folder');
})

function scrollIntoView(selector){
  const scrollTo = document.querySelector(selector);
  scrollTo.scrollIntoView({behavior:"smooth"});
}