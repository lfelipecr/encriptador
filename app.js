const campo_texto = document.querySelector('#texto-encriptado');
const campo_mensaje = document.querySelector('#campo-mensaje');

console.log(campo_mensaje, campo_texto);

const matriz_codi = [
    ['e', 'enter'], //indice 0
    ['i', 'imes'], //indice 1
    ['a', 'ai'], //indice 2
    ['o', 'ober'], //indice 3
    ['u', 'ufat'], //indice 4
];

function validarEntrada(texto, textoAnterior) {
    const normalizedText = texto.normalize("NFD").replace(/[\u0300-\u036F]/g, "");
    const regex = /^[a-z ]+$/;
    const valido = regex.test(normalizedText);
  
    if (texto === "") {
      return {
        valido: true,
        mensaje: ""
      };
    } else if (texto === textoAnterior) {
      return {
        valido: true,
        mensaje: ""
      };
    } else if (!valido) {
      return {
        valido: false,
        mensaje: "Solo se permiten letras minúsculas y espacios en blanco."
      };
    }
  
    return {
      valido: true,
      mensaje: ""
    };
  }

  function btnEncriptar(){
    const resultado = validarEntrada(campo_texto.value);
    if (!resultado.valido) {
      campo_mensaje.value = resultado.mensaje;
      return; // No ejecutar la función si el texto no es válido
    }
    const texto = cifrar(campo_texto.value);
    campo_mensaje.value = texto;
  }

function cifrar(fraseEncriptada){
    for(let i = 0; i < matriz_codi.length; i++){
        if(fraseEncriptada.includes(matriz_codi[i][0])){
            fraseEncriptada = fraseEncriptada.replaceAll(
                matriz_codi[i][0],
                matriz_codi[i][1]
            )
        }
    }
    return fraseEncriptada;
}

function btnDesencriptar(){
    const resultado = validarEntrada(campo_texto.value);
    if (!resultado.valido) {
      campo_mensaje.value = resultado.mensaje;
      return; // No ejecutar la función si el texto no es válido
    }
    const texto = descifrar(campo_texto.value);
    campo_mensaje.value = texto;
  }

function descifrar(fraseDesencriptada){
    for(let i = 0; i < matriz_codi.length; i++){
        if(fraseDesencriptada.includes(matriz_codi[i][1])){
            fraseDesencriptada = fraseDesencriptada.replaceAll(
                matriz_codi[i][1],
                matriz_codi[i][0]
            )
        }
    }
    return fraseDesencriptada;
}

campo_texto.addEventListener("input", function () {
    const textoAnterior = campo_texto.value;
    const texto = campo_texto.value;
    const resultado = validarEntrada(texto, textoAnterior);
    if (texto === "") {
      campo_mensaje.value = "";
    } else {
      campo_mensaje.value = resultado.mensaje;
    }
  });