const button = document.querySelector('#searchButton')
const textInput = document.querySelector('#inputBar')
const pokemonName = document.querySelector('#pokemonName')
const pokemonImage = document.querySelector('#pokemonImage')


button.addEventListener('click', async () => {
    //Remove elements with ability id
    let toRemove = document.querySelectorAll('.blue')
    if(toRemove){
        toRemove.forEach((el) => el.remove())
    }
    //Text value from input bar
    let pokeInput = textInput.value.toLowerCase()
    let response = await axios.get(`https://pokeapi.co/api/v2/pokemon/${pokeInput}`)
    console.log(response)
    //name code
    let pokeName = response.data.name
    pokemonName.innerHTML = pokeName
    //image code
    let pokeImage = response.data.sprites.front_default
    pokemonImage.innerHTML = `<img src=${pokeImage}>`
    //stats
    //stats header
    let statsHeader = document.createElement('h3')
    statsHeader.setAttribute('class', 'blue')
    statsHeader.append(`stats`)
    //height div
    let pokeHeight = response.data.height
    let heightDiv = document.createElement('div')
    heightDiv.setAttribute('class', 'blue stats')
    heightDiv.append(`${pokeHeight} poke-units tall`)
    //weight div
    let pokeWeight = response.data.weight
    let weightDiv = document.createElement('div')
    weightDiv.setAttribute('class', 'blue stats')
    weightDiv.append(`weighs ${pokeWeight} poke-units`)
    document.body.append(statsHeader, heightDiv, weightDiv)
    //abilities div creation
    let pokeAbilities = response.data.abilities
    if (pokeAbilities.length > 0){
        let newHeader = document.createElement('h3')
        newHeader.setAttribute('class', 'blue')
        newHeader.append(`${pokeName}'s abilities`)
        document.body.append(newHeader)
    }
    pokeAbilities.forEach((ab) => {
        let abilityName = ab.ability.name
        let newDiv =  document.createElement('div')
        newDiv.setAttribute('class', 'abilities blue')
        newDiv.append(abilityName)
        document.body.append(newDiv)
    })
    //held items
    let pokeHeld = response.data.held_items
    if (pokeHeld.length > 0){
        let newHeader = document.createElement('h3')
        newHeader.setAttribute('class', 'blue')
        newHeader.append(`${pokeName}'s held items`)
        document.body.append(newHeader)
    }
    pokeHeld.forEach((itm) => {
        let itemHeld = itm.item.name
        let newDiv = document.createElement('div')
        newDiv.setAttribute('class', 'held-item blue')
        newDiv.append(itemHeld)
        document.body.append(newDiv)
    })
})
