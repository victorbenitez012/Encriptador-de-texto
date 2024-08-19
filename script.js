document.addEventListener("DOMContentLoaded", function () {
    const textareaEncriptar = document.querySelector(".encriptar");
    const textareaEvaluar = document.querySelector(".evaluar");
    const btnEncriptar = document.querySelector(".btn-encriptar");
    const btnDesencriptar = document.querySelector(".btn-desencriptar");
    const btnCopiar = document.querySelector(".btn-copiar");

    // Función para encriptar texto
    function encriptarTexto(texto) {
        let textoEncriptado = texto
            .replace(/e/g, "enter")
            .replace(/i/g, "imes")
            .replace(/a/g, "ai")
            .replace(/o/g, "ober")
            .replace(/u/g, "ufat");
        return textoEncriptado;
    }

    // Función para desencriptar texto
    function desencriptarTexto(texto) {
        let textoDesencriptado = texto
            .replace(/enter/g, "e")
            .replace(/imes/g, "i")
            .replace(/ai/g, "a")
            .replace(/ober/g, "o")
            .replace(/ufat/g, "u");
        return textoDesencriptado;
    }

    // Evento para encriptar texto
    btnEncriptar.addEventListener("click", function () {
        let texto = textareaEncriptar.value;
        if (texto.trim() !== "") {
            let textoEncriptado = encriptarTexto(texto);
            textareaEvaluar.value = textoEncriptado;
            textareaEvaluar.style.visibility = "visible";
            btnCopiar.style.visibility = "visible";
        }
    });

    // Evento para desencriptar texto
    btnDesencriptar.addEventListener("click", function () {
        let texto = textareaEncriptar.value;
        if (texto.trim() !== "") {
            let textoDesencriptado = desencriptarTexto(texto);
            textareaEvaluar.value = textoDesencriptado;
            textareaEvaluar.style.visibility = "visible";
            btnCopiar.style.visibility = "visible";
        }
    });

    // Evento para copiar texto al portapapeles
    btnCopiar.addEventListener("click", function () {
        textareaEvaluar.select();
        document.execCommand("copy");
        alert("Texto copiado al portapapeles");
    });

    // Oculta el botón de copiar y el textarea de evaluación al inicio
    btnCopiar.style.visibility = "hidden";
    textareaEvaluar.style.visibility = "hidden";
});
