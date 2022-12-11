const form = document.getElementById('form');
const nameimp = document.getElementById('nameimp');
const email = document.getElementById('email');
const msg = document.getElementById('msg');

form.addEventListener('change', (e) => {
    e.preventDefault();
    checkInputs();
});


var textArea = document.querySelector('textarea');
textArea.addEventListener('input', function(){
var caraterMin = Number(200);
var digitando = textArea.value.length;
    document.getElementById('counter').innerHTML = (caraterMin - digitando)
    console.log();
});

function checkInputs() {
    const nameimpValue = nameimp.value;
    const emailValue = email.value;
    const msgValue = msg.value;
    

    if (nameimpValue == '') {
        setErrorFor(nameimp, "Por favor, digite o seu nome!");
    } else if (!checkName(nameimpValue)) {
        setErrorFor(nameimp, "Digite o seu nome e apelido.");
    } else {
        setSuccessFor(nameimp);
    }

    if (emailValue == '') {
        setErrorFor(email, "O email é obrigatório");
    } else if (!checkEmail(emailValue)) {
        setErrorFor(email, "Por favor, insira um email válido");
    }else {
        setSuccessFor(email);
    }

    if (msgValue == '') {
        setErrorFor(msg, "Por favor, digite a sua mensagem!")
    } else if (!checkMsg(msgValue)) {
        setErrorFor(msg, '');
    }else {
        setSuccessFor(msg);
    } 

    const formControls = form.querySelectorAll('.form-control');
    const formIsValid = [...formControls].every((formControl) => {
        return (formControl.className === "form-control sucess");
    });

    if (formIsValid) {
        window.alert("O formulário está 100% válido");
    }
}

function setErrorFor(input, message) {
    const formControl = input.parentElement;
    const small = formControl.querySelector("small");
    // mensagem de erro 
    small.innerText = message;
    // adicionar a classe do erro
    formControl.className = "form-control error";
}

function setSuccessFor(input) {
    const formControl = input.parentElement;
    // adicionar a classe do sucesso
    formControl.className = "form-control success";
}

function checkEmail(email) {
    return /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(email);
}

function checkName(nameimp) {
    return /^[a-z\d_]{5,50}$/i.test(nameimp);
}

 //contador de palavras 
 function checkMsg(checkMsg) {
    return (form.msg.value.length >= 200);
}

