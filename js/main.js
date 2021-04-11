
// const palindromo = (palabra) => {
//   // console.log(palabra);
//   let wordModified = palabra.split("").reverse().join("").replace(/\s/g, "").toLowerCase();
//   console.log(wordModified);
//   let wordOrigin = palabra.toLowerCase().replace(/\s/g, "");
//   console.log(wordOrigin);
//   if (wordModified === wordOrigin) {

//     printPalindrome(`La palabra ${palabra} es palindromo`);

//   }
//   else {
//     printPalindrome(`La palabra ${palabra} NO es palindromo`);
//   }

// };

// palindromo("Anita lava la tina");

// function printPalindrome(phrase) {

//   const container = document.getElementById('palindrome')
//   const paragraph = document.createElement('p')
//   const text = document.createTextNode(phrase)

//   paragraph.appendChild(text)
//   container.appendChild(paragraph)
// }

//https://pokeapi.co/api/v2/pokemon

function getPokemon() {

    var xhttp = new XMLHttpRequest(); 
    xhttp.onreadystatechange = function() { 
        if (this.readyState == 4 && this.status == 200) { 

            let pokemonsArr = JSON.parse(this.responseText).results

            pokemonsArr.forEach(pokemon => {
                 printPokemon(getPokemonUrl(pokemon.url))
            });


        }   
    }

    xhttp.open("GET", "https://pokeapi.co/api/v2/pokemon", true);

    xhttp.send();
}

getPokemon()

function getPokemonUrl (url) {
  // console.log(url)
  let pokemonInfo ={} 
  let xhttp = new XMLHttpRequest();
  xhttp.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
       //document.getElementById("demo").innerHTML = xhttp.responseText;
       let responseData = JSON.parse (this.responseText)
      
      for (const key in responseData) {
        if (key === "id"){
          pokemonInfo = {...pokemonInfo, id:responseData[key]}
        }
        else if (key === "name") {
          pokemonInfo = {...pokemonInfo, name:responseData[key]}
        }
        else if (key === "stats") {
          pokemonInfo = {...pokemonInfo, stats:responseData[key]}
        }
        else if (key === "sprites") {
          pokemonInfo = {...pokemonInfo, image:responseData[key]["other"]["dream_world"].front_default}
        }
      }
    } 
}; 
// console.log(pokemonInfo)   
xhttp.open("GET", url, false);
xhttp.send();
return pokemonInfo
}

function printPokemon (infoData) {
    let cardContainer = document.getElementById("container")
    let cardElement = document.createElement("div")
    let cardH1 = document.createElement("h1")
    let cardImage = document.createElement("img")
    let cardLista = document.createElement("ul")

    let txtH1 = document.createTextNode(infoData.name)
    cardImage.setAttribute("src",infoData.image)
    infoData.stats.forEach(stat=>{
      let cardLi = document.createElement("li")
      let cardText = document.createTextNode(`${stat.stat.name}:${stat.base_stat}`)
      cardLi.appendChild(cardText)
      cardLista.appendChild(cardLi)
    })
    cardElement.classList.add("card")

    cardH1.appendChild(txtH1)
    cardElement.appendChild(cardH1)
    cardElement.appendChild(cardImage)
    cardElement.appendChild(cardLista)
    cardContainer.appendChild(cardElement)
  console.log(infoData)
}
// classList.add("card")

