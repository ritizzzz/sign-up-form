
const password = document.querySelector('#password');
const confirmpassword = document.querySelector('#confirmpassword');
const errorMessage = document.querySelector('.error');
const button = document.querySelector('button');
document.querySelector('#confirmpassword').addEventListener('keyup', ()=>{
    toggleMessage()
})

document.querySelector('#password').addEventListener('keyup', ()=>{
if(confirmpassword.value !== ''){
    toggleMessage();
}
})

function toggleMessage(){
console.log(confirmpassword.value == password.value);
if(password.value === confirmpassword.value ){
    errorMessage.classList.remove('erron');
    button.disabled = false;
}else{
    errorMessage.classList.add('erron')
    button.disabled = true;
}
}