

function encrypt() {
    let cripto = [];
    let rolo = [];
    const texto = document.getElementById('texto').value;



for (let i = 0; i < texto.length; i++) {
    cripto.push(texto[i]);
}

for (let i = 0; i < cripto.length; i++) {
    switch (cripto[i]) {
        case "e":
            rolo.push("enter");
            break;
        case "i":
            rolo.push("imes");
            break;
        case "a":
            rolo.push("ai");
            break;
        case "o":
            rolo.push("ober");
            break;
        case "u":
            rolo.push("ufat");
            break;
        default:
            rolo.push(cripto[i]);
            break;
    }
}

rolo=rolo.join('')



    // Muestra los arrays unicode y crypto en las alertas (solo para fines de depuración)
    //alert('Valores Unicode originales: ' + original);
    //alert('Valores Unicode encriptados: ' + unicode);
    //alert('Texto encriptado: ' + crypto);

    // Actualiza el contenido del div de texto estático con el texto encriptado
    document.getElementById("textoEstatico").innerHTML = "<p>" + rolo + "</p>";
}




// script.js

function decrypt() {
    const texto = document.getElementById('texto').value;
    let desencriptado = "";
    let i = 0;
    
    while (i < texto.length) {
        if (texto.slice(i, i+5) === "enter") {
            desencriptado += "e";
            i += 5;
        } else if (texto.slice(i, i+4) === "imes") {
            desencriptado += "i";
            i += 4;
        } else if (texto.slice(i, i+2) === "ai") {
            desencriptado += "a";
            i += 2;
        } else if (texto.slice(i, i+4) === "ober") {
            desencriptado += "o";
            i += 4;
        } else if (texto.slice(i, i+4) === "ufat") {
            desencriptado += "u";
            i += 4;
        } else {
            desencriptado += texto[i];
            i += 1;
        }
    }

    // Actualiza el contenido del div de texto estático con el texto desencriptado
    document.getElementById("textoEstatico").innerHTML = "<p>" + desencriptado + "</p>";
}
// script.js

// Función para copiar el contenido del div de texto estático al portapapeles
function copiar() {
    // Obtener el contenido del texto estático
    let textoEstatico = document.getElementById("textoEstatico").innerText;

    // Usar la API del portapapeles para copiar el texto
    navigator.clipboard.writeText(textoEstatico).then(function() {
        alert("Texto copiado al portapapeles");
    }, function(err) {
        console.error("Error al copiar el texto: ", err);
    });
}

