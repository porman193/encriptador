const textoParaEncriptar = document.getElementById('textoAEncriptar');
const btnEncriptar = document.getElementById('btn-encriptar');
const btnDesencriptar = document.getElementById('btn-desencriptar');
const resultado = document.getElementById('resultado');
const btnCopiar = document.getElementById('btn-copiar');


// guardar el texto dado por el usuario en una variable global
let textoAEncriptar = textoParaEncriptar.value;

btnEncriptar.addEventListener('click', () => {
    let texto = textoParaEncriptar.value;
    resultado.textContent = encriptar(texto);
});

// Funcion que encripta eñ texto dado por el usuario
function encriptar(textoAEncriptar) {
    let textoEncriptado = '';
    for (let i = 0; i < textoAEncriptar.length; i++) {
        textoEncriptado += textoAEncriptar.charCodeAt(i).toString(2) + ' '; // convierte el texto a binario
        textoEncriptado += String.fromCharCode(parseInt(textoEncriptado[i], 2).toString(10)); // convierte el texto binario a decimal
        textoEncriptado += String.fromCharCode(textoAEncriptar.charCodeAt(i)+1); // suma 1 al codigo ascii del caracter y lo convierte a caracter
    }
    console.log(textoEncriptado);
    return textoEncriptado;
}

// Funcion que desencripta el texto dado por el usuario
function desencriptar(textoADesencriptar) {
    let textoDesencriptado = '';
    for (let i = 0; i < textoADesencriptar.length; i++) {
        textoDesencriptado += String.fromCharCode(parseInt(textoADesencriptar[i], 2).toString(10));
    }
    console.log(textoDesencriptado);
    return textoDesencriptado;
}

// Funcion que copia el texto encriptado
btnCopiar.addEventListener('click', () => {
    resultado.select();
    document.execCommand('copy');
    alert('Texto copiado');
}
);

// Funcion que muestra el textto desencriptado en el output de la pagina html
 function mostrarDesencriptado(textoADesencriptar) {
    resultado.textContent = desencriptar(textoADesencriptar);
}

