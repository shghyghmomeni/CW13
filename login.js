const user = {
    username : "admin",
    fullname: "علی",
    phonenumber: "09125600000"
}

localStorage.setItem("user", JSON.stringify(user));

const username = document.getElementById("username");
const fullname = document.getElementById("fullname");
const phonenumber = document.getElementById("phonenumber");
const loginPage = document.querySelector(".login-container");
const loginbtn = document.getElementById("loginbtn");
const profileName = document.getElementById("profileName");

let error = 0

phonenumber.addEventListener("change",validation);
loginbtn.addEventListener("click",login);


function login(){

    const user = JSON.parse(localStorage.getItem("user"))
    // console.log(user)

    const personInfo = {
        username : username.value,
        fullname: fullname.value,
        phonenumber: phonenumber.value
    }

    // console.log(personInfo)

    if(user.username == personInfo.username
        && user.fullname == personInfo.fullname
        && user.phonenumber == personInfo.phonenumber
        && error == 0){
            loginPage.style.display = 'none';
            profileName.innerText = `سلام ${personInfo.fullname} !`
    }
}

function validation(){
    let phonenumberValue = phonenumber.value
    phonenumber.style.border = "none";
    error = 0;

    if(phonenumberValue.length != 11 
        && isNaN(Number(phonenumberValue))
        && phonenumberValue.substring(0,2) != "09"){
            phonenumber.style.border = "1px solid red"
            error = 1;
    }
}