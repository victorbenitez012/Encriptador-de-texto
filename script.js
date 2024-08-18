// Funci�n para encriptar el texto
function encriptarTexto() {
    const input = document.getElementById('textInput').value;
    const validationMessage = document.getElementById('validationMessage');
    if (validarTexto(input)) {
        validationMessage.textContent = '';
        const encriptado = input
            .replace(/e/g, "enter")
            .replace(/i/g, "imes")
            .replace(/a/g, "ai")
            .replace(/o/g, "ober")
            .replace(/u/g, "ufat");
        document.getElementById('result').textContent = encriptado;
    } else {
        validationMessage.textContent = 'No se aceptan may�sculas, acentos ni caracteres especiales.';
    }
}

// Funci�n para desencriptar el texto
function desencriptarTexto() {
    const input = document.getElementById('textInput').value;
    const validationMessage = document.getElementById('validationMessage');
    if (validarTexto(input)) {
        validationMessage.textContent = '';
        const desencriptado = input
            .replace(/enter/g, "e")
            .replace(/imes/g, "i")
            .replace(/ai/g, "a")
            .replace(/ober/g, "o")
            .replace(/ufat/g, "u");
        document.getElementById('result').textContent = desencriptado;
    } else {
        validationMessage.textContent = 'No se aceptan may�sculas, acentos ni caracteres especiales.';
    }
}

// Funci�n para validar el texto
function validarTexto(texto) {
    const regex = /^[a-z\s]*$/; // Solo min�sculas y espacios
    return regex.test(texto);
}

// Funci�n para copiar el texto
function copiarTexto() {
    const result = document.getElementById('result').textContent;
    navigator.clipboard.writeText(result).then(() => {
        alert('Texto copiado al portapapeles');
    }).catch(err => {
        console.error('Error al copiar el texto: ', err);
    });
}
