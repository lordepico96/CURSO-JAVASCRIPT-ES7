
/*
====================================================
MINI PROYECTO EVALUABLE - MÓDULO I
FUNDAMENTOS DE JAVASCRIPT

PROYECTO: CONVERSOR DE UNIDADES

Este programa permite convertir:
1. Celsius a Fahrenheit
2. Fahrenheit a Celsius
3. Metros a kilómetros
4. Kilómetros a metros

Utilizamos:
- Variables
- Operadores matemáticos
- Funciones
- Condicionales
- Switch
- Ciclos
- Validaciones
====================================================
*/


// ==================================================
// 1. FUNCIONES DE CONVERSIÓN
// ==================================================

// FUNCIÓN 1: CELSIUS A FAHRENHEIT
// Recibe una temperatura en Celsius.
// Aplica la fórmula matemática.
// Return devuelve el resultado.

function celsiusAFahrenheit(celsius) {
    return (celsius * 9 / 5) + 32;
}


// FUNCIÓN 2: FAHRENHEIT A CELSIUS
// Recibe una temperatura en Fahrenheit.
// Resta 32 y multiplica por 5/9.
// Devuelve el resultado en Celsius.

function fahrenheitACelsius(fahrenheit) {
    return (fahrenheit - 32) * 5 / 9;
}


// FUNCIÓN 3: METROS A KILÓMETROS
// Recibe una longitud en metros.
// Divide el valor entre 1000.
// Devuelve el resultado en kilómetros.

function metrosAKilometros(metros) {
    return metros / 1000;
}


// FUNCIÓN 4: KILÓMETROS A METROS
// Recibe una longitud en kilómetros.
// Multiplica el valor por 1000.
// Devuelve el resultado en metros.

function kilometrosAMetros(kilometros) {
    return kilometros * 1000;
}


// ==================================================
// 2. VARIABLES PRINCIPALES
// ==================================================

// opcion:
// Guarda la opción seleccionada por el usuario.

let opcion;

// entrada:
// Guarda el texto que escribe el usuario.

let entrada;

// valor:
// Guarda el número que vamos a convertir.

let valor;

// resultado:
// Guarda el resultado de la conversión.

let resultado;

// unidadOrigen y unidadDestino:
// Guardan los símbolos de las unidades.

let unidadOrigen;
let unidadDestino;


// ==================================================
// 3. CICLO PRINCIPAL DEL PROGRAMA
// ==================================================

// do...while:
// Permite mostrar el menú repetidamente.
// El programa termina cuando se selecciona 5.

do {

    // ==============================================
    // 4. MENÚ DE OPCIONES
    // ==============================================

    // prompt():
    // Muestra una ventana donde el usuario
    // puede escribir una opción.

    opcion = prompt(
        "===== CONVERSOR DE UNIDADES =====\n" +
        "1. Celsius a Fahrenheit\n" +
        "2. Fahrenheit a Celsius\n" +
        "3. Metros a kilómetros\n" +
        "4. Kilómetros a metros\n" +
        "5. Salir\n\n" +
        "Seleccione una opción:"
    );


    // Si el usuario cancela el menú,
    // finalizamos el programa.

    if (opcion === null) {
        opcion = "5";
    }


    // ==============================================
    // 5. VALIDACIÓN DE LA OPCIÓN
    // ==============================================

    // Verificamos que la opción sea válida.
    // Si no lo es, mostramos un mensaje
    // y volvemos al menú.

    if (
        opcion !== "1" &&
        opcion !== "2" &&
        opcion !== "3" &&
        opcion !== "4" &&
        opcion !== "5"
    ) {
        alert("Opción inválida. Intente nuevamente.");
        continue;
    }


    // Si selecciona 5, salimos del ciclo.

    if (opcion === "5") {
        alert("Gracias por utilizar el conversor.");
        break;
    }


    // ==============================================
    // 6. SOLICITAR EL VALOR
    // ==============================================

    // Solicitamos el número que se convertirá.

    entrada = prompt(
        "Ingrese el valor que desea convertir:"
    );


    // ==============================================
    // 7. VALIDAR ENTRADAS VACÍAS
    // ==============================================

    // null significa que se presionó Cancelar.
    // trim() elimina espacios al inicio y final.
    // Si no hay contenido, rechazamos la entrada.

    if (entrada === null || entrada.trim() === "") {
        alert("Error: debe ingresar un valor válido.");
        continue;
    }


    // ==============================================
    // 8. CONVERTIR TEXTO A NÚMERO
    // ==============================================

    // prompt() siempre devuelve texto o null.
    // Number() transforma el texto en número.

    valor = Number(entrada);


    // ==============================================
    // 9. VALIDAR QUE SEA UN NÚMERO FINITO
    // ==============================================

    // Number.isFinite() verifica que el valor
    // sea un número válido y finito.
    // Rechaza letras, NaN e Infinity.

    if (!Number.isFinite(valor)) {
        alert("Error: valor no numérico o no finito.");
        continue;
    }


    // ==============================================
    // 10. VALIDAR LONGITUDES NEGATIVAS
    // ==============================================

    // Las temperaturas pueden ser negativas.
    // Las longitudes negativas no están permitidas.
    // Las opciones 3 y 4 corresponden a longitud.

    if (
        (opcion === "3" || opcion === "4") &&
        valor < 0
    ) {
        alert("Error: longitud inválida.");
        continue;
    }


    // ==============================================
    // 11. SELECCIÓN MEDIANTE SWITCH
    // ==============================================

    // switch evalúa la opción seleccionada.
    // case representa cada operación.
    // break evita ejecutar los demás casos.

    switch (opcion) {

        // CELSIUS A FAHRENHEIT
        case "1":

            resultado = celsiusAFahrenheit(valor);

            unidadOrigen = "°C";
            unidadDestino = "°F";

            break;


        // FAHRENHEIT A CELSIUS
        case "2":

            resultado = fahrenheitACelsius(valor);

            unidadOrigen = "°F";
            unidadDestino = "°C";

            break;


        // METROS A KILÓMETROS
        case "3":

            resultado = metrosAKilometros(valor);

            unidadOrigen = "m";
            unidadDestino = "km";

            break;


        // KILÓMETROS A METROS
        case "4":

            resultado = kilometrosAMetros(valor);

            unidadOrigen = "km";
            unidadDestino = "m";

            break;


        // OPCIÓN NO RECONOCIDA
        default:

            alert("Opción inválida.");
            continue;
    }


    // ==============================================
    // 12. MOSTRAR EL RESULTADO
    // ==============================================

    // toLocaleString():
    // Presenta el número con formato español.
    // maximumFractionDigits limita los decimales
    // que se muestran, sin alterar el cálculo.

    let resultadoFormateado = resultado.toLocaleString(
        "es-CO",
        {
            maximumFractionDigits: 6
        }
    );

    // alert():
    // Muestra el valor original, su unidad
    // y el resultado de la conversión.

    alert(
        "===== RESULTADO =====\n\n" +
        "Valor original: " + valor + " " + unidadOrigen +
        "\nResultado: " + resultadoFormateado +
        " " + unidadDestino
    );


} while (opcion !== "5");


// ==================================================
// FIN DEL PROGRAMA
// ==================================================

// Cuando el usuario selecciona la opción 5,
// el ciclo termina y el programa finaliza.
