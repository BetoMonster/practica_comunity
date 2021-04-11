1-Crear una funcion que me diga si una palabra es palindromo o no

1 Paso > Convertir a array

palabra.split(" ") === Array
<!-- Array.from(palabra) -->
<!-- [...palabra] -->

2 Paso > Invertir palabra o palabras

palabra.split(" ").reverse()


3 Paso > Convertir a string

palabra.split(" ").reverse().toString() 

4 Paso > Quitar espacios

5 Paso > Comparar palabras

palabra.split(" ").reverse().toString() === palabra.split(" ").join("") 

6 Paso > Imprimir resultados

La palabra es palindromo
La palabra no es palindromo




2-Crear función si una palabra es palindromo o no en el DOM EJ.("luz azul") => palindromo, ("oso") => palindromo, ("niña") => NO es palindromo

