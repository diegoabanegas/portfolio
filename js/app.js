    /*VARIABLES*/
    const $ = selector => document.getElementById(selector);
    const btnEncriptar = $('btnEncriptar');
    const btnDesencriptar = $('btnDesencriptar');
    const btnCopiar = $('btnCopiar');    
    const txtEncriptar = $('txtEncriptar');
    const txtResultado = $('txtResultado');
    const resultado = $('resultado');
    const noResultado = $('noResultado');
    const expR = /[^a-z-\d\s,.]/g;
    let arreglo = [];
    
    /*EVENTO CLICK*/
    //window.addEventListener('load', function() {console.log('La página ha terminado de cargarse!!');});
    btnEncriptar.addEventListener('click',encriptar,false);
    btnDesencriptar.addEventListener('click',desencriptar,false);
    btnCopiar.addEventListener('click',copiar,false);

    /*FUNCIONES*/
    function aparecer(){
        noResultado.classList.add('opacidad');
        setTimeout(()=>{
            noResultado.classList.add('no-visible');
            resultado.classList.remove('no-visible');       
        },500)            
    };   

    function encriptar(){
        if(txtEncriptar.value == ''){
            resultado.classList.contains('no-visible') ? aparecer() : ''
            txtEncriptar.focus();
            return txtResultado.value = 'Debes agregar un texto para poder Encriptar!';
        }        
        let arr = txtEncriptar.value.toLowerCase().split('');
        for (let i = 0; i < arr.length; i++) {
            const letraSeleccionada = arr[i]; 
            const vocales = {
                a : 'ai',
               'á': 'ai',
                e : 'enter',
               'é' : 'enter',
                i : 'imes',
               'í' : 'imes',
                o : 'ober',
               'ó' : 'ober',
                u : 'ufat',
               'ú' : 'ufat'
        }        
        const letraDefault = letraSeleccionada;
        const letra = vocales[letraSeleccionada] || letraDefault;
        arreglo.push(letra)        
        }

        resultado.classList.contains('no-visible') ? aparecer() : ''

        txtResultado.value = arreglo.join('');
        txtResultado.value = txtResultado.value.replace(expR, '');
        arreglo = [];
        txtEncriptar.value = '';
    };

    function desencriptar(){      
        if(txtEncriptar.value == ''){
            resultado.classList.contains('no-visible') ? aparecer() : ''
            txtEncriptar.focus();
            return txtResultado.value = 'Debes agregar un texto encriptado para poder Desencriptar!';
        }  
        let arr = txtEncriptar.value.toLowerCase().split('');
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

        resultado.classList.contains('no-visible') ? aparecer() : ''

        txtResultado.value = arreglo.join('');
        txtResultado.value = txtResultado.value.replace(expR, '');
        arreglo = [];
        txtEncriptar.value = '';
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