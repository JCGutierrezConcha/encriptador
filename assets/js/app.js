const inputTexto = document.querySelector(".input-texto");
const mensaje = document.querySelector(".mensaje");
const btnCopy = document.querySelector(".copiar");
const btnDesencript = document.querySelector(".desencriptar");
const btnEncript = document.querySelector(".encriptar");
btnCopy.style.display = "none";
btnDesencript.disabled = true;

//Encriptar mensaje

function btnEncriptar() {
    if (inputTexto.value == "") {
        alert("Debe ingresar un texto");
    } else {
        const textoEncriptado = encriptar(inputTexto.value);
        mensaje.value = textoEncriptado;
        mensaje.style.backgroundImage = "none";
        inputTexto.value = "";
        btnCopy.style.display = "block";
        btnDesencript.disabled = false;
    }
}

function encriptar(stringEncriptada) {
    let matrizCodigo = [["e", "enter"], ["i", "imes"], ["a", "ai"], ["o", "ober"], ["u", "ufat"]];
    stringEncriptada = stringEncriptada.toLowerCase();

    for (let i = 0; i < matrizCodigo.length; i++) {
        if (stringEncriptada.includes(matrizCodigo[i][0])) {
            stringEncriptada = stringEncriptada.replaceAll(matrizCodigo[i][0], matrizCodigo[i][1])
        }
    }
    return stringEncriptada;
}

//Desencriptar mensaje

function btnDesencriptar() {
    if (inputTexto.value == "") {
        alert("Debe ingresar un texto");
    } else {
        const textoEncriptado = desencriptar(inputTexto.value)
        mensaje.value = textoEncriptado
        inputTexto.value = ""
        btnCopy.style.display = "none";
    }
}

function desencriptar(stringDesencriptada) {
    let matrizCodigoDesencriptar = [["u", "ufat"], ["o", "ober"], ["a", "ai"], ["i", "imes"], ["e", "enter"]];
    stringDesencriptada = stringDesencriptada.toLowerCase();

    for (let i = 0; i < matrizCodigoDesencriptar.length; i++) {
        if (stringDesencriptada.includes(matrizCodigoDesencriptar[i][1])) {
            stringDesencriptada = stringDesencriptada.replaceAll(matrizCodigoDesencriptar[i][1], matrizCodigoDesencriptar[i][0])
        }
    }

    return stringDesencriptada;
}

//botón copiar

function copiar() {

    mensaje.select();
    navigator.clipboard.writeText(mensaje.value)
    mensaje.value = "";
    alert("Texto Copiado")
}
