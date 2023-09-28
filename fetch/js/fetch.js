//Fetch
//
//POST

const BASE_URL= 'https://pokeapi.co/api/v2/';

//Fetch no async
fetch(BASE_URL + 'pokemon/ditto')
        .then(res=>res.json())
        .then(data=>console.log(data));

//Fetch async
//El await siempre va a hacer q espere a q se complete lo solicitado para continuar la linea de abajo solo para este caso
//Parsear es formatear

const fetchPokemon = async (pokemon) => {
    try {
        //const response = await fetch(BASE_URL + 'pokemon/ditto');
        const response = await fetch(`${BASE_URL}pokemon/${pokemon}`);
        const parsedResponse = await response.json();
        return parsedResponse;
    } catch (err) {
        console.error(err);
    }
}

//Obtener pokemon 
document.getElementById('get-btn')
    .addEventListener('click', async () => {
        const text = document.getElementById('poke-name').value.toLowerCase();
        const pokemon = await fetchPokemon(text);
        localStorage.setItem('currentPokeId', pokemon.id,);

        console.log(pokemon.name);
        tarjeta_p(pokemon);
        

    })

document.addEventListener('DOMContent.Loaded', async ()=>{
    const storedId = localStorage.getItem('currentPokeId',pokemon.id);
    const initialId = storedId ? parseInt(storedId) : 1;
    const pokemon = await fetchPokemon(initialId);
    console.log(pokemon);
    tarjeta_p(pokemon);
})

//OBTENER EL ANTERIOR

document.getElementById('previous-btn')
    .addEventListener('click', async () =>{
        const currentPokeId = parseInt(localStorage.getItem('currentPokeId'))
        const newId = Math.max(1, currentPokeId-1);
        const pokemon = await fetchPokemon(newId);
        localStorage.setItem('currentPokeId', pokemon.id);
        console.log(pokemon.name); 
        tarjeta_p(pokemon);
        return; 
    })


   

//OBTENER EL SIGUIENTE

document.getElementById('next-btn')
.addEventListener('click', async () =>{
    const currentPokeId = parseInt(localStorage.getItem('currentPokeId'))
    const newId = currentPokeId+1;
    const pokemon = await fetchPokemon(newId);
    localStorage.setItem('currentPokeId', pokemon.id);
    console.log(pokemon.name); 
    tarjeta_p(pokemon);
})

function tarjeta_p (pokemon){
    document.getElementById('nombre_p').textContent = 'nombre:' + pokemon.name;
    document.getElementById('id_p').textContent = 'ID:' + pokemon.id;
    document.getElementById('pokeweight').textContent = 'peso:' + pokemon.weight;
    document.getElementById('imagen_p').src = pokemon.sprites.front_shiny; 
   
}

////////////////////////////////////////
// - Obtener la info
// - Crear un contenedor para perfil clase = profile
// - Crear elemento para user_name
// - "" "" para description
// - "" "" age
///  - "" " " lista de bandas. --> iterar por cada banda


/*
inputName.addEventListener('input', e => {
    console.log(e.target.value);
    userName.textContent = e.target.value;
})*/





    // // const bandList = user.fav_music.bands.map(e => {
    // //     const pElement = document.createElement('p');
    // //     pElement.textContent = e;
    // //     return pElement;
    // // })

    // // userElements.bands = bandList;

////////////////// POST
//

// fetch('https://jsonplaceholder.typicode.com/posts', {
//     method: 'POST',
//     body: JSON.stringify({
//         title: 'title1',
//         body: 'Lorem ipsum dolor sit amet',
//         userId: 1,
//     }),
//     headers: {
//         'Content-type': 'application/json; charset=UTF-8',
//     }
// }).then(res => res.json())
//     .then(json => console.log(json))


    //ARREGLAR EL POKEMON EN LOCAL STORAGE
    //MANIPULAR EL DOM Y AGREGAR UNA TARJETA DEL POQUEMON, EL TAMAÑO ES A CONSIDERACIÓN PERSONAL
    //NOMBRE, ID Y PESO  (INFO DEBE VENIR DE LOCAL STORAGE NO DE FETCH)

    /// CREANDO TARJETA // 
