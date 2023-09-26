const title = document.getElementById('title1');

const subtitle = document.getElementsByClassName('subtitulo');

const secondTitle = document.querySelector('.subtitulo');
const subtitles = document.querySelectorAll('.subtitulo');

console.log(title, subtitle, subtitles);


secondTitle.innerHTML = "DOM API";

// Creacion del perfil de usuario

const user = {
    id: 1,
    user_name: 'Zabdiel Diaz',
    description: 'Me gustan los conejos',
    age: '25',
    fav_music: {
        bands: [
            'Rammstein', 'Interpol', 'TOOL', 'Black Sabbath'
        ]
    }
}




// Eventos

const inputName = document.getElementById ('name');
const userName = document.getElementById('username');
const inputedad = document.getElementById('edad');
const age= document.getElementById('age');
const inputcorreo = document.getElementById('correo');
const mail = document.getElementById('mail');

/*
inputName.addEventListener('input', e => {
    console.log(e.target.value);
    userName.textContent = e.target.value;
})*/

const profileBtn = document.getElementById('profilebtn');
profileBtn.addEventListener('click', () => {
    userName.textContent = inputName.value;
    age.textContent = inputedad.value;
    mail.textContent = inputcorreo.value;

    const ul = document.getElementById('fav-films');

    user.favFilms.forEach((film) => {
        const li = document.createElement('li');
        li.textContent = film;
        ul.appendChild(li);


    })
})





