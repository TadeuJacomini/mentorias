var lista = [];

function addlistaSuper(item) {

    // Verificar se a lista está cheia
    if (lista.length >= 5) return;

    // Adicionar o item a lista
    lista.push(item);

}

// Casos de teste
addlistaSuper("Chocolate em barra");
addlistaSuper("Café");
addlistaSuper("Sorvete");
addlistaSuper("500g de Carne moída");
addlistaSuper("100g de Mussarela");
addlistaSuper("Granola");

if (lista.length > 5) {
    console.log("A lista está maior que o permitido");
} else {
    console.log("Sua lista de compras é: ", lista)
}