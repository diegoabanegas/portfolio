const vocales = /e|i|o|a|u/ig;
const claves = /enter|imes|ober|ai|ufat/ig;
const expR = /[á,é,í,ó,ú]/g;
const expRN = /[\d]/g;
const str = 'aaaaabscrt5wert12wer10t'

const error = ()=>{
    const caracteres = str.match(expRN).join(' | ');
    
    return 'Ingresaste caracteres invalidos: ' + caracteres + '\nINTENTALO DE NUEVO.'
};


console.log(str.match(expRN) === null ? 'continua' : error())

/*Métpdp .macht() se escribe de la siguiente manera:  devuelve array con coincidencias si las hay, si no devuelve null*/
console.log(str.match(expR)) //devuelve null
console.log(str.match(expRN)) //devuelve ['5','1','2','1','0']
/*Métpdp .test() se escribe de la siguiente manera: expresión regular.test(textoaevaluar) devuelve false si no hay coincidencias y true si si las hay*/
console.log(expR.test(str)) //devuelve false
console.log(expRN.test(str)) //devuelve true
/*Métpdp .search() se escribe de la siguiente manera: textoaevaluar.search(expresión regular) devuelve -1 si no hay coincidencias e indice de 1° coincidencia si la hay*/
console.log(str.search(expR)) //devuelve -1
console.log(str.search(expRN)) //devuelve 10

