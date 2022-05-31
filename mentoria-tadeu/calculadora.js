function calculadora(operacao, valor1, valor2) {
    
    // Criar a regra de negócio para a operação de calculo


    // Armazenar o calculo em uma variável chamada: resultado
    var resultado = "Operação";

    // Retornar a variável
    return resultado;
}

var resultado1 = calculadora('+', 2, 3);
console.log("Resultado1: ", resultado1 === 5);

var resultado2 = calculadora('-', 10, 3);
console.log("Resultado2: ", resultado2 === 8);

var resultado3 = calculadora('/', 10, 2);
console.log("Resultado3: ", resultado3 === 5);