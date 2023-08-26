function isScalable(array) {
    for (let i = 0; i < array.length - 1; i++) {
    if (Math.abs(array[i] - array[i + 1]) > 5) {
        return false;
        }
    }
    return true;
}

function VerificarEscalabilidad(array) {
    if (isScalable(array)) {
        return "La Montaña si es Escalable";
    } else {
        return "La Montaña no es Escalable";
    }
}

const Entrada = prompt("Introduza la Altura de la Montaña separadas por Comas: ");
const Montaña = Entrada.split(',').map(value => parseInt(value.trim(), 10));

const Resultado = VerificarEscalabilidad(Montaña);
console.log(Resultado);
