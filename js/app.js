/*VARIABLES*/
const $ = selector => document.getElementById(selector);
const btnEncriptar = $('btnEncriptar');
const btnDesencriptar = $('btnDesencriptar');
const btnCopiar = $('btnCopiar');    
const txtEncriptar = $('txtEncriptar');
const txtResultado = $('txtResultado');
const resultado = $('resultado');
const noResultado = $('noResultado');
const tilde = /[á,é,í,ó,ú]/g;
const vocales = /e|i|o|a|u/ig;
const claves = /enter|imes|ober|ai|ufat/ig;
const expR = /[^a-z\d\s,.]/g;
let retorno = null;

/*EVENTO CLICK*/
btnEncriptar.addEventListener('click',encriptar,false);
btnDesencriptar.addEventListener('click',desencriptar,false);
btnCopiar.addEventListener('click',copiar,false);


/*FUNCIONES*/
function comprobacion(mensaje){    
    if(mensaje ===''){
        noResultado.classList.contains('no-visible') ? vacio() : ''    
        txtEncriptar.focus();
        return retorno = null
    }
    if(tilde.test(mensaje)){
        resultado.classList.contains('no-visible') ? aparecer() : ''
        let sP = () => mensaje.match(tilde).length === 1 ? 'Ingresaste el siguiente caracter invalido: ' : "Ingresaste los siguientes caracteres invalidos: " 
        let caracteres = mensaje.match(tilde).join(' - ')
        txtResultado.value = sP() + caracteres + '\nINTENTALO DE NUEVO.'        
        txtEncriptar.focus();
        txtEncriptar.value = ''
        return retorno = null
    }
    if(mensaje === 'ñ'){
        noResultado.classList.contains('no-visible') ? vacio() : ''
        txtEncriptar.value = ''
        return retorno = null
    }
    const a = mensaje.match(vocales).length;
    const test = claves.test(mensaje);               
    if(test === false){
        retorno = false
    }else{
        const b = mensaje.match(claves).length;
        if(b === a/2){        
            retorno = true
        }else{
            retorno = false
        }  
    }
}
    

function encriptar(){
    const mensaje = txtEncriptar.value;
    comprobacion(mensaje)
    if(retorno === null){return}
        
    if(!retorno){
    let txt = mensaje.toLowerCase()
    .replaceAll('e', 'enter')
    .replaceAll('é', 'enter')
    .replaceAll('i', 'imes')
    .replaceAll('í', 'imes')
    .replaceAll('o', 'ober')
    .replaceAll('ó', 'ober')
    .replaceAll('a', 'ai')
    .replaceAll('á', 'ai')
    .replaceAll('u', 'ufat')
    .replaceAll('ú', 'ufat');

    resultado.classList.contains('no-visible') ? aparecer() : ''
    txtResultado.value = txt.replace(expR, '');
    txtEncriptar.value = '';
    }else{
        resultado.classList.contains('no-visible') ? aparecer() : ''
        txtResultado.value = 'El texto ya está encriptado!\n\nINTENTALO DE NUEVO'
        txtEncriptar.value = '';
        txtEncriptar.focus();
    }

};

function desencriptar(){
    const mensaje = txtEncriptar.value;
    comprobacion(mensaje)
    if(retorno === null){return}

    if(retorno){
        let txt = mensaje.toLowerCase()
        .replaceAll('enter', 'e')
        .replaceAll('imes', 'i')
        .replaceAll('ober', 'o')
        .replaceAll('ai', 'a')
        .replaceAll('ufat', 'u');

        resultado.classList.contains('no-visible') ? aparecer() : ''
        txtResultado.value = txt.replace(expR, '');
        txtEncriptar.value = '';
    }else{
        resultado.classList.contains('no-visible') ? aparecer() : ''
        txtResultado.value = 'El texto ya está desencriptado!\n\nINTENTALO DE NUEVO';
        txtEncriptar.value = '';
        txtEncriptar.focus();
    }
}  
    
function aparecer(){
    noResultado.classList.add('opacidad');
    setTimeout(()=>{
        noResultado.classList.add('no-visible');
        noResultado.classList.remove('opacidad');       
        resultado.classList.remove('no-visible');
    },500)            
};

function vacio(){
    resultado.classList.add('opacidad');
    setTimeout(()=>{
        resultado.classList.add('no-visible');       
        resultado.classList.remove('opacidad');
        noResultado.classList.remove('no-visible');
    },500)            
};   

function copiar(){
    const mensaje = txtResultado.value;
    comprobacion(mensaje)
    if(retorno === null){
        txtResultado.value = 'No se puede copiar porque hay caracteres incompatibles'
        setTimeout(()=>{
            noResultado.classList.contains('no-visible') ? vacio() : ''
        },4000)
         
        return
    }

    // Selecciono el texto del campo
    txtResultado.select();
    txtResultado.setSelectionRange(0, Infinity); // Rango infinito

    // Copio el texto dentro del campo
    navigator.clipboard.writeText(txtResultado.value);
            
    //limpiarTextarea('txtResultado');
    txtResultado.value = '';
    txtEncriptar.focus();
};