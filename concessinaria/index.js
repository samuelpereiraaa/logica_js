// Arrays para armazenar as informações
let modelos = [];
let anos = [];
let valores = [];

// Função para cadastro de carro
function cadastroCarro(modelo, ano, valor) {
    modelos.push(modelo);
    anos.push(ano);
    valores.push(valor);
}

// Função para procurar o carro mais barato através do índice
function indiceBarato() {
    let indice = 0;
    for (let i = 0; i < valores.length; i++) {
        if (valores[i] < valores[indice]) {
            indice = i;
        }
    }
    return indice;
}

// Função para procurar o carro mais caro através do índice
function indiceCaro() {
    let indice = 0;
    for (let i = 0; i < valores.length; i++) {
        if (valores[i] > valores[indice]) {
            indice = i;
        }
    }
    return indice;
}

// Função para calcular a média dos valores
function calcularMediaEntreCarros() {
    let total = 0;
    for (let i = 0; i < valores.length; i++) {
        total += valores[i];
    }
    return total / valores.length;
}

// Cadastrando os carros
cadastroCarro("Celta", 2005, 30000);
cadastroCarro("Fusca", 2010, 70000);
cadastroCarro("Civic", 2014, 53000);

// Encontrar o carro mais barato e mais caro através do índice
let carroBarato = indiceBarato();
let carroCaro = indiceCaro();

// Exibindo as informações do carro mais barato
console.log("Carro mais barato:");
console.log(`Modelo: ${modelos[carroBarato]}`);
console.log(`Ano: ${anos[carroBarato]}`);
console.log(`Valor: ${valores[carroBarato]}`);

// Exibindo as informações do carro mais caro
console.log("\nCarro mais caro:");
console.log(`Modelo: ${modelos[carroCaro]}`);
console.log(`Ano: ${anos[carroCaro]}`);
console.log(`Valor: ${valores[carroCaro]}`);

// Exibindo a média dos valores
console.log("\nMédia dos valores:");
console.log(`Média: ${calcularMediaEntreCarros()}`);
