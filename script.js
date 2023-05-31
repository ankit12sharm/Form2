let msg = document.getElementById("msg");
let form = document.getElementById("form");
let username = document.getElementById("username");
let pass = document.getElementById("password");
let msg2 = document.getElementById("msg2");
form.addEventListener('submit',(e)=>{
    e.preventDefault();
    if(username.value.length != 0 && pass.value.length != 0){
    msg.innerText="SucessFully login";
    msg2.innerText="";
    }else{
        msg.innerText="";
        msg2.innerText = "Invaild input field";
        
    }
})