// Obtener elementos
// ID 
// Clase <-- obtenemos varios elementos que coincidan
// querySelector solo regresa el primer nodo que coincide (ID, Clase)
// querySelectorAll obtiene una lista de nodos.

const title = document.getElementById('title1');

const subtitle = document.getElementsByClassName('subtitulo');

const secondTitle = document.querySelector('.subtitulo');
const subtitles = document.querySelectorAll('.subtitulo');

console.log(title, subtitle, subtitles);


secondTitle.innerHTML = "DOM API";

// Creacion del perfil de usuario

const user = {
    name: 'Jane Doe',
    age: 25,
    email: 'jane@mail.com',
    favFilms: ['Spencer', 'Ice Age 3', 'Se7en', 'Inception', 'SAW'],
}

function createUser(user) {

    document.getElementById('username').textContent = user.name;
    document.getElementById('age').textContent = user.age;
    document.getElementById('mail').textContent = user.email;

    const ul = document.getElementById('fav-films');

    user.favFilms.forEach((film) => {
        const li = document.createElement('li');
        li.textContent = film;
        ul.appendChild(li);
    })
}

createUser(user);


// Eventos

const inputName = document.getElementById('name');
const userName = document.getElementById('username');

/*
inputName.addEventListener('input', e => {
    console.log(e.target.value);
    userName.textContent = e.target.value;
})
*/


const profileBtn = document.getElementById('ProfileBtn');

profileBtn.addEventListener('click', () => {
    userName.textContent = inputName.value;
})

const users = [
    {
        id: 1,
        user_name: 'Zabdiel Diaz',
        description: 'Me gustan los conejos',
        age: '25',
        fav_music: {
            bands: [
                'Rammstein', 'Interpol', 'TOOL', 'Black Sabbath'
            ]
        }
    },
    {
        id: 2,
        user_name: 'Fernando Aguilar',
        description: 'Me gusta el calor',
        age: '22',
        fav_music: {
            bands: [
                'Los Temerarios', 'Grupo Frontera', 'Conjunto Primavera', 'Tigres del Norte'
            ]
        }
    }
]

const CARD_SECTION = document.getElementById('profiles');

////////////////////////////////////////
// - Obtener la info
// - Crear un contenedor para perfil clase = profile
// - Crear elemento para user_name
// - "" "" para description 
// - "" "" age
///  - "" " " lista de bandas. --> iterar por cada banda

const createCard = () => {
    const card = document.createElement('div');
    card.classList.add('profile', 'container');
    return card;
}


const createDescription = () => {
    const userElements = {
        user_name: document.createElement('h2'),
        age: document.createElement('h3'),
        description: document.createElement('p'),
        bands: [],
    }
    return userElements;
}

const populateElements = (user, userElements) => {
    userElements.user_name.textContent = user.user_name;
    userElements.age.textContent = user.age;
    userElements.description.textContent = user.description;

    const bandList = user.fav_music.bands.map(e => {
        const pElement = document.createElement('p');
        pElement.textContent = e;
        return pElement;
    })

    userElements.bands = bandList;
    return userElements;
}


const renderElements = (card, elements) => {
    card.append(elements.user_name, elements.age, elements.description);
}

users.forEach(user => {
    const card = createCard();
    const userElements = createDescription();

    const elementsWithData = populateElements(user, userElements);
    renderElements(card, elementsWithData);
    CARD_SECTION.append(card);

})


// EGERSISIO
// 1. Agregar las bandas
// PUSH 
// EVITAR LAS BANDAS PARA EL EJERCICIO 2
// 2. Obtener la info del usuario desde inputs y mostrar en tarjetas
// Al menos deben tener 2 commits











