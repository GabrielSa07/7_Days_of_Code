let numeroUm = 1
let stringUm = '2'

function conferir () {
    if (typeof(numeroUm) === typeof(stringUm) && numeroUm == stringUm) {
      console.log('As variáveis numeroUm e stringUm tem o mesmo valor e o mesmo tipo')
    } else if (typeof(numeroUm) != typeof(stringUm) && numeroUm == stringUm){
      console.log('As variáveis numeroUm e stringUm tem o mesmo valor, mas tipos diferentes')
    }else if(typeof(numeroUm) == typeof(stringUm) && numeroUm != stringUm){
        console.log('As variáveis numeroUm e stringUm não tem o mesmo valor, mas tem o mesmo tipo')
    }else {
        console.log('As variáveis numeroUm e stringUm não tem o mesmo valor e nem mesmo tipo')  
    }
}

conferir()
