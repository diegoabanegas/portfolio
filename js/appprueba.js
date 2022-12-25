/*FUNCION ENCRIPTAR*/
function encriptar(){
    let texto = document.getElementById('txtEncriptar').value;    
    let arr = texto.split('');
    for (let i = 0; i < arr.length; i++) {
        const letraSeleccionada = arr[i]; 
        const vocales = {
            a : 'ai',
            e : 'enter',
            i : 'imes',
            o : 'ober',
            u : 'ufat'
        }        
        const letraDefault = letraSeleccionada;
        const letra = vocales[letraSeleccionada] || letraDefault;
        arreglo.push(letra)        
    }
    resultado.innerHTML = arreglo.join('');
    //return arreglo.join('');    
}
/*DESENCRIPTAR*/
function desencriptar(){
    let txt = document.getElementById('txtEncriptar').value;
    let arr = txt.split('');
    for (let i = 0; i < arr.length; i++) {
        let cont = i + 1;
        const letraSeleccionada = arr[i]; 
        const vocales = {
            a : ()=>{arr.splice(cont,1);
                return 'a';},
            e : ()=>{arr.splice(cont,4);
                return 'e';},
            i : ()=>{arr.splice(cont,3);
                return 'i';},
            o : ()=>{arr.splice(cont,3);
                return 'o';},
            u : ()=>{arr.splice(cont,3);
                return 'u';}
        }      
        const letraDefault = letraSeleccionada;
        const letra = vocales[letraSeleccionada] 
                    ? vocales[letraSeleccionada]() 
                    : letraDefault;
        arreglo.push(letra)        
    }
    resultado.innerHTML = arreglo.join('');
}

/*COPIAR AL PORTAPAPELES*/
function copiar() {
  // Selecciono el texto del campo
  resultado.select();
  resultado.setSelectionRange(0, Infinity); // Rango infinito

  // Copio el texto dentro del campo
  navigator.clipboard.writeText(resultado.value);
  
  // Para limpiar el elemento textarea con id "miTextarea"
  //limpiarTextarea('resultado');
  resultado.value = '';
}





const btnEncriptar = document.getElementById('encriptar');
const btnDesencriptar = document.getElementById('desencriptar');
const btnCopiar = document.getElementById('btnCopiar');


let resultado = document.getElementById('resultado');
let arreglo = [];

      
      btnEncriptar.addEventListener("click", encriptar);
      btnDesencriptar.addEventListener("click", desencriptar);
      btnCopiar.addEventListener("click", copiar);
      
      
      
  
  
