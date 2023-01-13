/*VARIABLES*/
const $ = selector => document.getElementById(selector);
const btnEncriptar = $('btnEncriptar');
const btnDesencriptar = $('btnDesencriptar');
const btnCopiar = $('btnCopiar');    
const txtEncriptar = $('txtEncriptar');
const txtResultado = $('txtResultado');
const resultado = $('resultado');
const noResultado = $('noResultado');
const vocales = /e|i|o|a|u/ig;
const claves = /enter|imes|ober|ai|ufat/ig;
const expR = /[^a-z-\d\s,.]/g;
let retorno = null;

/*EVENTO CLICK*/
btnEncriptar.addEventListener('click',encriptar,false);
btnDesencriptar.addEventListener('click',desencriptar,false);
btnCopiar.addEventListener('click',copiar,false);


/*FUNCIONES*/
function comprobacion(mensaje){    
    if(mensaje ==''){
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
    if(retorno === null){
            noResultado.classList.contains('no-visible') ? vacio() : ''
            txtEncriptar.focus();
            return 
    }
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
        txtEncriptar.focus();
        txtResultado.value = 'El texto ya está encriptado!\n\nINTENTALO DE NUEVO'
        txtEncriptar.value = '';
    }

};

function desencriptar(){
    const mensaje = txtEncriptar.value;
    comprobacion(mensaje)
    if(retorno === null){
            noResultado.classList.contains('no-visible') ? vacio() : ''
            txtEncriptar.focus();
            return 
    }
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
        txtEncriptar.focus();
        txtResultado.value = 'El texto ya está desencriptado!\n\nINTENTALO DE NUEVO';
        txtEncriptar.value = '';
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
    // Selecciono el texto del campo
    txtResultado.select();
    txtResultado.setSelectionRange(0, Infinity); // Rango infinito

    // Copio el texto dentro del campo
    navigator.clipboard.writeText(txtResultado.value);
            
    //limpiarTextarea('txtResultado');
    txtResultado.value = '';
    txtEncriptar.focus();
};