const title = document.getElementById('title1');

console.log(title);

const subtitulo = document.getElementsByClassName('Subtítulo');

const secondTitle = document = document.querySelector('.subtitulo');
const subtitles = document = document.querySelectorAll('.subtitulo');

console.log(title, subtitulo, subtitles);

secondTitle.value = "DOM API";

//Creación del perfil de usuario
const user = {
    name: 'Mary Jane',
    age: 25,
    email: 'maryjane@spider.com',
    favFilms: ['A prueba de fuego', 'Spider Man', 'Avengers', 'El multiverso', 'SAW']
}

function createUser (user) {
    document.getElementById('username').textContent = user.name;
    document.getElementById('age').textContent = user.age;
    document.getElementById('mail').textContent = user.email;

    const ul = document.getElementById('fav-films');

    user.favFilms.forEach(film => {
    const li = document.createElement('li');
    li.textContent = film;
    ul.appendChild(li);
    })
}

createUser (user);

//Eventoss
const inputName = document.getElementById ('name');
const userName = document.getElementById('username');
const inputedad = document.getElementById('edad');
const age= document.getElementById('age');
/*
inputName.addEventListener('input', e => {
    console.log(e.target.value);
    userName.textContent = e.target.value;
})*/

const profileBtn = document.getElementById('profilebtn');
profileBtn.addEventListener('click', () => {
    
    userName.textContent = inputName.value;
})
profileBtn.addEventListener('click', () => {
    inputedad.textContent = age.value;
})

const createCard = () =>{
    const card = document.createElement('div');
    card.classList.add('profile','container');
}