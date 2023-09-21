//placeholders for HTML divs
const body = document.getElementsByTagName('body')
//Header
const inputButton = document.querySelector(`#searchButton`)
//Text Input
let pName = document.querySelector("#pokeName")
let pTypes = document.querySelector("#types")
let pHeightWeight = document.querySelector("#height-weight")
let pAbilities = document.querySelector("#abilities")
let pStats = document.querySelector("#stats")
//male images
let mStdFrt = document.querySelector(`#male-images`).querySelector('#standard-front')
let mStdBck = document.querySelector(`#male-images`).querySelector('#standard-back')
let mShnyFrt = document.querySelector(`#male-images`).querySelector('#shiny-front')
let mShnyBck = document.querySelector(`#male-images`).querySelector('#shiny-back')
//female images
let fStdFrt = document.querySelector(`#female-images`).querySelector('#standard-front')
let fStdBck = document.querySelector(`#female-images`).querySelector('#standard-back')
let fShnyFrt = document.querySelector(`#female-images`).querySelector('#shiny-front')
let fShnyBck = document.querySelector(`#female-images`).querySelector('#shiny-back')

inputButton.addEventListener('click', async () => {
    //where does this need to be scoped?
    let textInput = document.querySelector("#inputBar").value
    const getSinglePokeMon = async () => {
        const pokeName = await axios.get(`https://pokeapi.co/api/v2/pokemon/${textInput}`)
      //  let placeholderImage = pokeName.data.sprites.front_default
        console.log(pokeName.data)
      //  setting visibilities
        document.querySelector("#sex1").style.visibility = 'visible'
        document.querySelector("#sex2").style.visibility = 'visible'
        document.querySelector("#male-images").style.visibility = 'visible'
        document.querySelector("#female-images").style.visibility = 'visible'
        //name
        pName.innerHTML = `Name: ${pokeName.data.name}`
        //type
        if ((pokeName.data.types).length > 1) {
            pTypes.innerHTML = `Types: `
        } else {
            pTypes.innerHTML = `Type: `
        }
        for (let i = 0; i < (pokeName.data.types).length; i++) {
            let placeholderTypeArray = pokeName.data.types[i].type.name
            pTypes.innerHTML += `${placeholderTypeArray} `
        //Height/Weight
        pHeightWeight.innerHTML = `Height: ${pokeName.data.height} <br> Weight: ${pokeName.data.weight}`
        }
        //Abilities
        if ((pokeName.data.abilities).length > 1) {
            pAbilities.innerHTML = `Abilities: `
        } else {
            pAbilities.innerHTML = `Ability: `
        }
        //console.log(pokeName.data.abilities[0].ability.name)
        for (let i = 0; i < (pokeName.data.abilities).length; i++) {
            let placeholderAbilityArray = pokeName.data.abilities[i].ability.name
            pAbilities.innerHTML += `${placeholderAbilityArray} `
        //Height/Weight
        pHeightWeight.innerHTML = `Height: ${pokeName.data.height} <br> Weight: ${pokeName.data.weight}`
        }
        //stats
        pStats.innerHTML = `HP: ${pokeName.data.stats[0].base_stat} <br>ATK: ${pokeName.data.stats[1].base_stat} <br>DEF: ${pokeName.data.stats[2].base_stat} <br>SPD: ${pokeName.data.stats[3].base_stat} <br>SpATK: ${pokeName.data.stats[4].base_stat} <br>SpDEF: ${pokeName.data.stats[5].base_stat}`
        //male images
        mStdFrt.innerHTML = `<img src=${pokeName.data.sprites.front_default}>`
        mStdBck.innerHTML = `<img src=${pokeName.data.sprites.back_default}>`
        mShnyFrt.innerHTML = `<img src=${pokeName.data.sprites.front_shiny}>`
        mShnyBck.innerHTML = `<img src=${pokeName.data.sprites.back_shiny}>`
        //female images
        fStdFrt.innerHTML = `<img src=${pokeName.data.sprites.front_female}>`
        fStdBck.innerHTML = `<img src=${pokeName.data.sprites.back_female}>`
        fShnyFrt.innerHTML = `<img src=${pokeName.data.sprites.front_shiny_female}>`
        fShnyBck.innerHTML = `<img src=${pokeName.data.sprites.back_shiny_female}>`
        //image tester
        if (fStdFrt.innerHTML == `<img src="null">`) {
            document.querySelector(`#female-images`).style.visibility = 'hidden'
            document.querySelector("#sex2").style.visibility = 'hidden'
            document.querySelector("#sex1").innerText = "Sprites"
        }
        document.querySelector("#sex1").innerText = "Male Sprites"
        //background color
        let firstType = pokeName.data.types[0].type.name
        document.body.style.color = "black";
        switch (firstType) {
            case "normal":
                document.body.style.background = "white";
                break;
            case "fighting":
                document.body.style.background = "rgba(255, 123, 0, 0.661)";
                break;
            case "flying":
                document.body.style.background = "skyblue";
                break;
            case "poison":
                document.body.style.background = "purple";
                break;
            case "ground":
                document.body.style.background = "brown";
                break;
            case "rock":
                document.body.style.background = "rgb(178, 87, 87)";
                break;
            case "bug":
                document.body.style.background = "limegreen";
                break;
            case "ghost":
                document.body.style.background = "rgba(198, 12, 198, 0.592)";
                break;
            case "steel":
                document.body.style.background = "silver";
                break;
            case "fire":
                document.body.style.background = "red";
                document.body.style.color = "white";
                break;
            case "water":
                document.body.style.background = "blue";
                document.body.style.color = "white";
                break;
            case "grass":
                document.body.style.background = "green";
                break;
            case "electric":
                document.body.style.background = "yellow";
                break;
            case "psychic":
                document.body.style.background = "hotpink";
                break;
            case "ice":
                document.body.style.background = "lightblue";
                break;
            case "dragon":
                document.body.style.background = "rgb(221, 72, 221)";
                break;
            case "dark":
                document.body.style.background = "rgb(69, 69, 69)";
                document.body.style.color = "white";
                break;
            case "fairy":
                document.body.style.background = "pink";
                break;
            case "unknown":
                document.body.style.background = "black";
                break;
            case "shadow":
                document.body.style.background = "rgb(91, 91, 91)";
                break;
            
        }
        
    }
    getSinglePokeMon()
}
)
