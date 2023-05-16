const textoParaEncriptar = document.getElementById('textoAEncriptar');
const btnEncriptar = document.getElementById('btn-encriptar');
const btnDesencriptar = document.getElementById('btn-desencriptar');
const resultado = document.getElementById('resultado');
const btnCopiar = document.getElementById('btn-copiar');
const divResultado = document.getElementById('divResultado');
const containerResult = document.getElementById('containerResult');



// guardar el texto dado por el usuario en una variable global
let textoAEncriptar = textoParaEncriptar.value;

//funcionalidad del boton encriptar donde se llama a la funcion encriptar y muestra el resultado en el output de la pagina html
btnEncriptar.addEventListener('click', () => {
    let texto = textoParaEncriptar.value;
    resultado.value = encriptar(texto);
    containerResult.style.display = 'flex';
});

//funcionalidad del boton desencriptar donde se llama a la funcion desencriptar y muestra el resultado en el output de la pagina html
btnDesencriptar.addEventListener('click', () => {
    let texto = textoParaEncriptar.value;
    mostrarDesencriptado(texto);
});

//funcionalidad del boton copiar donde se copia el texto desencriptado al portapapeles
btnCopiar.addEventListener('click', () => {
    let texto = resultado.textContent;
    copiarAlPortapapeles(resultado.value);
});


// Funcion que encripta eñ texto dado por el usuario
function encriptar(textoAEncriptar) {
    let textoEncriptado = '';
    for (let i = 0; i < textoAEncriptar.length; i++) {
        textoEncriptado += String.fromCharCode(textoAEncriptar.charCodeAt(i)+1); // suma 1 al codigo ascii del caracter y lo convierte a caracter
    }
    resultado.style.display = 'block';
    divResultado.style.display = 'none';
    console.log(textoEncriptado);
    return textoEncriptado;
}

// Funcion que desencripta el texto dado por el usuario
function desencriptar(textoADesencriptar) {
    let textoDesencriptado = '';
    for (let i = 0; i < textoADesencriptar.length; i++) {
        textoDesencriptado += String.fromCharCode(textoADesencriptar.charCodeAt(i)-1); // resta 1 al codigo ascii del caracter y lo convierte a caracter
    }
    console.log(textoDesencriptado);
    return textoDesencriptado;
}

// Funcion que copia el texto desencriptado al portapapeles
function copiarAlPortapapeles(textoCopiado) {
    navigator.clipboard.writeText(textoCopiado)
      .then(function() {
        alert("Texto copiado al portapapeles: " + textoCopiado);
      })
      .catch(function(error) {
        console.error("Error al copiar al portapapeles: ", error);
      });
  }
  

// Funcion que muestra el textto desencriptado en el output de la pagina html
 function mostrarDesencriptado(textoADesencriptar) {
    resultado.value = desencriptar(textoADesencriptar);
}
