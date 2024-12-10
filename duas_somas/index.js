// array e numero alvo
let numeros = [1,2,5,6,8,]
let numeroAlvo = 7
// array para guardar os indices
let resultado = []

// criando uma estrutura de repetição para somar os dois valores e conseguir o resultado do numero alvo.
for(let i = 0 ; i < numeros.length; i++) {
    for (let j = i + 1 ; j < numeros.length; j++) {
        if (numeros[i] + numeros[j] === numeroAlvo) {
            resultado = [i,j]
            break
        }
    }
    if (resultado.length){
        break
    }
}
console.log(resultado)