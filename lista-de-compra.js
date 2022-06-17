let items = [];

for (let item = 0; item < 5; item++) {
let itemName = prompt("Digite o item "+ (item + 1))
items[item] = itemName
}

alert("Aqui está sua lista de compras no mercado: " + items)