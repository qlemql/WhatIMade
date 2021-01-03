const accrodion = document.getElementsByClassName('contentBx');

for(i = 0; i < accrodion.length; i++){
    accrodion[i].addEventListener('click', function(){
        this.classList.toggle('active')
    })
}