// valor do simbolo

function valorDoSimbolo (simbolo){
    switch(simbolo) {
        case 'I':
            return 1
        case 'V':
            return 5
        case 'X':
            return 10
        case 'L':
            return 50
        case 'C':
            return 100
        case 'D':
            return 500
        case 'M':
            return 1000                     
        default:
            return 0    
    }
}
// converter numeros romanos

function converterNumeroRomano(numeroRomano) {
    let total = 0
    for(let i = 0; i < numeroRomano.length; i++){
        const valor = valorDoSimbolo(numeroRomano[i])
        const valorProximo = valorDoSimbolo(numeroRomano[i + 1])

        if ( valorProximo > valor) {
            total += valorProximo - valor
            i++ // incremento para pular proximo simbolo
        } else {
            total += valor 
        }
    }

    return total
}

// funcionamento do codigo

const numeroRomano = 'MCMXCIV';
let valorRomano = converterNumeroRomano(numeroRomano)
console.log(`o valor romano --- ${numeroRomano} ---\ntem o valor de ${valorRomano}`)

