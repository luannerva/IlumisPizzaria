const btn2 = document.querySelector('#btn2');

let usuario = {
    user: "",
    email: "",
    password: ""
}

btn2.addEventListener('click', function (event){
    event.preventDefault();

    usuario.email = document.querySelector('.email').value;
    usuario.user = document.querySelector('.user').value;
    usuario.password = document.querySelector('.password').value;
    
    localStorage.setItem("usuario",JSON.stringify(usuario));
});