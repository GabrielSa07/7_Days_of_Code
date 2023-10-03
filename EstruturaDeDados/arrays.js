let option = '';
let list = [];

function addItem () {
    let name = prompt('Digite o nome do produto que deseja adicionar:')
    let quantity = prompt('Digite a quantidade do produto:')

    list.push({
        name: name,
        quantity: quantity
    })

    console.log(`Item adicionado.`)
}

function removeItem () {
    let name = prompt('Digite o nome do produto que deseja adicionar:')
   
    
}

function listItens () {
    list.forEach((item) => {
        console.log(`Item: ${item.name} - Quantidade: ${item.quantity}`)
    })
}

do {
    option = prompt(`Escolha uma opção: 
    1- Adiconar item
    2- Remover item
    3- Listar itens
    4- Encerrar`)

    switch(option) {
        case '1': 
            addItem()
        break;
        case '2':
            removeItem()
        break;
        case '3':
            listItens()
        break;
        case '4': 
            console.log('Encerrando...')
        break;
        default: 
            console.log('Opção incorreta, selecione outra.')
        break
    }
    
} while (option != 4);