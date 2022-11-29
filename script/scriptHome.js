let bemvindo = document.querySelector('.one-msg');
let usuariostring = localStorage.getItem('usuario');
let usuario = JSON.parse(usuariostring);
bemvindo.innerHTML = 'Seja Bem Vindo(a) ' + usuario.user;

