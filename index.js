function validation(){
    const name = document.getElementById("name").value;
    const subject = document.getElementById("subject").value;
    const phone = document.getElementById("phone").value;
    const email = document.getElementById("email").value;
    const message = document.getElementById("message").value;
    const error_message = document.getElementById("error_message");
    let text;

    error_message.style.padding = "15px";

if(name.length < 1){
    text = "Please Enter Valid Name";
    error_message.innerHTML = text;
    return false;
}

if(subject.length < 10){
    text = "Please Enter Valid Correct Subject";
    error_message.innerHTML = text;
    return false;
}

if(isNaN(phone) || phone.length != 11){
    text = "Please Enter Phone Number";
    error_message.innerHTML = text;
    return false;
}

if(email.indexOf("@") == -1 || email.length < 6 ){
    text = "Please Enter Email";
    error_message.innerHTML = text;
    return false;
}

if(message.length <= 140){
    text = "Please Enter More Than 140 Characters";
    error_message.innerHTML = text;
    return false;
}
alert("Form Submitted Successfully!")

return true;

}

