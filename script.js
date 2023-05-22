console.log('working')
let button = document.querySelector("#searchButton")

button.addEventListener('click', async () => {

    let pokemonName = document.querySelector("#pokemonName")
    let pokemonImage = document.querySelector("#pokemonImage")
    let homeImage = document.querySelector('#homeImage')
    let textInput = document.querySelector("#inputBar").value
    let name = document.getElementById('name')
    let id = document.getElementById('id')
    let order = document.getElementById('order')
    let height = document.getElementById('height')
    let weight  = document.getElementById('weight')
    let base_experience = document.getElementById('base_experience')
    let pokemonAbility = document.querySelector(".ability")
    let pokemonMove = document.querySelector('.move')
        

    //Axios call goes here
    //remember to use Async and Await!
    //DOM Setters go here
    const pokemonRes = await axios.get(`https://pokeapi.co/api/v2/pokemon/${textInput}`)
    let pokemon = pokemonRes.data

    //Name
    pokemonName.innerText = pokemon.name.toUpperCase()
    
    //Picture
    let pic1 = `<img src="${pokemon.sprites.front_default}"/>`
    let pic2 = `<img src="${pokemon.sprites.front_shiny}"/>`
    let pic3 = `<img src="${pokemon.sprites.back_default}"/>`
    let pic4 = `<img src="${pokemon.sprites.back_shiny}"/>`
    pokemonImage.innerHTML = pic1 + pic2 + pic3 + pic4
    homeImage.src = `${pokemon.sprites.other.home.front_default}`
    
    //Basic info
    console.log(pokemon.order)
    id.innerHTML = `ID: <span>${pokemon.id}</span>`
    name.innerHTML = `Name: <span>${pokemon.name}</span>`
    order.innerHTML = `Order: <span>${pokemon.order}</span>`
    console.log(order)
    height.innerHTML = `Height:  <span>${pokemon.height} </span>`
    weight.innerHTML = `Weight:  <span>${pokemon.weight} </span>`
    base_experience.innerHTML = `Base Experience:  <span>${pokemon.base_experience} </span>`
    
    //Abilities
    let abilitiesData= pokemon.abilities
    let aTitle= `<p>Ability(ies):</p>`
    let aList = ``
    abilitiesData.forEach( (a) => {
        aList += `<li>${a.ability.name}</li>`
    })
    pokemonAbility.innerHTML = aTitle + aList

    //moves
    let moveData= pokemon.moves
    let mTitle= `<p>Move(s):</p>`
    let mList = ``
    for (let i = 0; i < 10; i++) {
        const move = moveData[i].move.name
        mList += `<li>${move}</li>`
    }
    pokemonMove.innerHTML = mTitle + mList
}
)