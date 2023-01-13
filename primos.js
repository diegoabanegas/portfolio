const random = Math.floor(Math.random()*100)
const str = "no es primo"
const primo = "es primo"


function esPrimo(num){
    let medio = num/2;
    for (let i = 2; i <= medio; i++) {
         if(num%i===0){ 
            return str
        }
    }
    return num
}

for (let indice = 2; indice < 1000; indice++) {
    if(esPrimo(indice) != str){
        console.log(indice)
    }    
}
