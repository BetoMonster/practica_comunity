const palindromo = (palabra) => {
  // console.log(palabra);
  let wordModified = palabra.split("").reverse().join("").replace(/\s/g, "").toLowerCase();
  console.log(wordModified);
  let wordOrigin = palabra.toLowerCase().replace(/\s/g, "");
  console.log(wordOrigin);
  if (wordModified === wordOrigin) {
    console.log(`La palabra ${palabra} es palindromo`);
  }
  else {
    console.log(`La palabra ${palabra} NO es palindromo`);
  }
};

palindromo("Anita lava la tina");