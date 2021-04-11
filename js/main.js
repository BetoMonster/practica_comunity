
const palindromo = (palabra) => {
  // console.log(palabra);
  let wordModified = palabra.split("").reverse().join("").replace(/\s/g, "").toLowerCase();
  console.log(wordModified);
  let wordOrigin = palabra.toLowerCase().replace(/\s/g, "");
  console.log(wordOrigin);
  if (wordModified === wordOrigin) {

    printPalindrome(`La palabra ${palabra} es palindromo`);

  }
  else {
    printPalindrome(`La palabra ${palabra} NO es palindromo`);
  }

};

palindromo("Anita lava la tina");

function printPalindrome(phrase) {

  const container = document.getElementById('palindrome')
  const paragraph = document.createElement('p')
  const text = document.createTextNode(phrase)

  paragraph.appendChild(text)
  container.appendChild(paragraph)
}

//https://pokeapi.co/api/v2/pokemon

function getPokemon() {

    var xhttp = new XMLHttpRequest(); 
    xhttp.onreadystatechange = function() { 
        if (this.readyState == 4 && this.status == 200) { 

            let pokemonsArr = JSON.parse(this.responseText).results

            pokemonsArr.forEach(pokemon => {
                 console.log(pokemon.url)
                
            });


        }   
    }

    xhttp.open("GET", "https://pokeapi.co/api/v2/pokemon", true);

    xhttp.send();
}

getPokemon()