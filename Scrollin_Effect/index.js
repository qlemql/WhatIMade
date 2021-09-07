let bg = document.getElementById("bg"),
 moon = document.getElementById("moon"),
 mountain = document.getElementById("mountain"),
 road = document.getElementById("road"),
 txt = document.getElementById("txt");

window.addEventListener('scroll', function(){
    const value = window.scrollY;

    bg.style.top = value * 0.5 + 'px'
    moon.style.left = -value * 0.5 + 'px'
    mountain.style.top = -value * 0.15 + 'px'
    road.style.top = value * 0.15 + 'px'
    txt.style.top = value * 1 + 'px'
})