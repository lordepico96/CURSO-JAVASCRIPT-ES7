//console.log("hello world");
//console.log("Estoy aprendiendo javascript.");

//variables y tipos de datos//

//let edad = 25;//
//const nombre = "Juan";//

//console.log(nombre);
//console.log(edad);

//Diferencias entre let y const//

//let ciudad = "Madrid";
//ciudad = "Barcelona"; // variable que permite reasignacion//

//const pais ="España"; //no permite cambiar la constante//

//tipos de datos//

//const nombre = "Ana"; //string//
//const edad = 30; //Number//
//const estudiante = true; //Bolean
//let temporada; //Unifined
//const direccion = null; // Null se usa para representar ausencia del valor

//console.log(typeof nombre); //"string"
//console.log(typeof edad); //"number"
//console.log(typeof estudiante); //"bolean"
//console.log(typeof temporada); //"Undefined"
//console.log(typeof direccion); //"object"

//const nombreUsuario = "Maria";
//const edadUsuario = 25;

//const mensaje = `El nombre de usuario es ${nombreUsuario} y tiene ${edadUsuario} años.`;
//console.log(mensaje);

//operadores aritmeticos//

//const a = 10;
//const b = 5;

//console.log(a +b); // suma 15
//console.log(a - b); // resta 5
//console.log(a * b); // multiplicacion 50
//console.log(a / b); // division 2
//console.log(a % b); // modulo 0

//Operaciones de comparacion 

//console.log(a > b); // Mayor que: true
//console.log(a < b); // Menor que: false
//console.log(a >= b); // Mayor igual: true
//console.log(a <= b); // Menor que: false
//console.log(a === b); // Igualdad estricta: false
//console.log(a == b); // Igualdad: false
//console.log(a !== b); // Desigualdad estructa: True

// Operadores logicos//

//const edadPersona = 20;
//const tieneDocumento = true;

//const puedeIngresar = edadPersona >= 18 && tieneDocumento; //true si la persona es mayor de edad o tiene documento//
//console.log(puedeIngresar); // true

//const esMayorDeEdad = edadPersona >= 18 || tieneDocumento; // true si la persona es mayor de edad o tiene documento//
//console.log(esMayorDeEdad); // true //

//const noPuedeIngresar = !puedeIngresar; // Negacion: true si la persona no puede ingresar//
//console.log(noPuedeIngresar); // true // niega el resultado ahora es false

// Convercion de datos //

//const precio = "100";
//const cantidad = "5";

//const total = Number(precio) * Number(cantidad); //Convertimos los string a Number
//console.log(total); // 500

//desarrollar un programa que calcule el salario semanal de un trabajador, considerando horas trabajadas y tarifa por hora. Agregar una bonificacion del 10% cuando el salario base supere $500000



//const horasTrabajadas = Number(prompt("Ingrese las horas trabajadas:"));
//const tarifaHora = Number(prompt("Ingrese la tarifa por hora:"));

//const salarioBase = horasTrabajadas * tarifaHora;
//const bonificacion = salarioBase > 500000 ? salarioBase * 0.10 : 0;

//if (salarioBase > 500000) {
    //console.log("El trabajador recibe bonificación");
//} else {
    //console.log("El trabajador no recibe bonificación");
//}

//const salarioTotal = salarioBase + bonificacion;

//console.log("Salario base: $" + salarioBase);
//console.log("Bonificación: $" + bonificacion);
//console.log("Salario semanal: $" + salarioTotal);


//const edad2 = 20;

//if(edad2 >= 18){console.log("eres mayor");}
//else{console.log("Eres menor");}

//condicional multiple//

//const calificacion = 85;

//if (calificacion >= 90) {console.log("Excelente");}
//else if(calificacion >=80) {console.log("Muy bien");}
//else if(calificacion >=70) {console.log("Bien");}
//else if(calificacion >=60) {console.log("Suficiente");}
//else {console.log("Insuficiente");}


//Condicionales compuestas//

//const edad3 = 25;
//const tieneEntrada = true;

//if(edad3 >= 18 && tieneEntrada) {console.log("puede ingresar al evento");}
//else{console.log("No puedes ingresar al evento");}


//un sistema de clasificacion de clientes por valor de compra
//Compra              Descuento
//menor de 100000     0%
//de 100mil a 300mil  5%
//de 300mil a 500mil  10%
//de 500mil a mas     15%
//Subtotal descuento aplicado y total a pagar tambien debe rechazar compras con valores negativos o no numericos


const entrada = prompt("Ingrese el valor de la compra:");
const compra = Number(entrada);

if (entrada === null || entrada.trim() === "" || !Number.isFinite(compra) || compra < 0) {
    console.log("Error: Ingrese un valor válido");
} else {
    const descuento = compra < 100000 ? 0 :
                      compra < 300000 ? 0.05 :
                      compra <= 500000 ? 0.10 : 0.15;

    const valorDescuento = compra * descuento;
    const totalPagar = compra - valorDescuento;

    console.log("Valor de compra: $" + compra);
    console.log("Descuento aplicado: " + descuento * 100 + "%");
    console.log("Valor del descuento: $" + valorDescuento);
    console.log("Total a pagar: $" + totalPagar);}


    //SWITCH//

    const dia= 3;
    switch (dia) {
        case 1:
            console.log("Lunes");
            break;
        case 2:
            console.log("Martes");
            break;
        case 3:
            console.log("Miércoles");
            break;
        default:
            console.log("Día no válido");
    }

//ciclo for//
for (let i = 1; i <= 5; i++) {
    console.log(`Numero: ${i}`);
}

//ciclo while//
let j = 1;
while (j <= 5) {
    console.log(`Numero: ${j}`);
    j++;
}

//do while//
let k = 1;
do {
    console.log(`Numero: ${k}`);
    k++;
} while (k <= 5);

//imprimir la tabla de multiplicar del 1 al 10//

for (let i = 1; i <= 1; i++) {
    console.log(`Tabla del ${i}:`);
    for (let j = 1; j <= 10; j++) {
        console.log(`${i} x ${j} = ${i * j}`);
    }
}

//calcular la suma de los numeros del 1 al 100//

let suma = 0;
for (let i = 1; i <= 100; i++) {
    suma += i;
}
console.log(`La suma de los números del 1 al 100 es: ${suma}`);

//simular el ahorro mensual durante 12 meses y mostrar el acumulado total de cada mes//

let ahorroMensual = 10000;
let acumulado = 0; //variable para almacenar el ahorro acumulado//

for (let mes = 1; mes <= 12; mes++) //ciclo for para iterar durante 12 meses//

    {acumulado += ahorroMensual; //suma el ahorro mensual al acumulado//

    console.log(`Mes ${mes}: Ahorro acumulado: $${acumulado}`);} //cada mes muestra el ahorro acumulado//


    // funcion y reutilizacion de codigo//

function saludar (nombre) {
    console.log(`Hola, ${nombre}!`);
}

console.log(saludar("Juan")); // Llamada a la funcion con el argumento "Juan"//

function calcularIva(precio) {
    return precio * 0.19; // Retorna el valor del IVA calculado//
}

function calcularTotalConIva(precio) {
    const iva = calcularIva(precio); // Llamada a la funcion calcularIva para obtener el valor del IVA//
    return precio + iva; // Retorna el total con IVA calculado//
}

function calcularTotal(precio, cantidad) {
    return precio * cantidad;
}

console.log(`El total con IVA de un producto de $10000 es: $${calcularTotalConIva(10000)}`); // Llamada a la funcion calcularTotalConIva con el argumento 10000//
console.log(`el total de la compra de 3 productos de $10000 es: $${calcularTotal(10000, 3)}`); // Llamada a la funcion calcularTotal con los argumentos 10000 y 3//


//arrow function//

const CalcularIva = (precio) => precio * 0.19; // Funcion flecha para calcular el IVA//

//alcance de las variables//

let variableGlobal = "Soy una variable global"; // Variable global, accesible desde cualquier parte del codigo//

function mostrarVariableGlobal() {
    console.log(`Variable global: ${variableGlobal}`); // Accede a la variable global dentro de la funcion//
}

mostrarVariableGlobal(); // Llamada a la funcion mostrarVariableGlobal para mostrar el valor de la variable global//

//variable local, accesible solo dentro de la funcion//

function mostrarVariableLocal() {
    let variableLocal = "Soy una variable local";
    console.log(`Variable local: ${variableLocal}`); // Accede a la variable local dentro de la funcion//
}

mostrarVariableLocal(); // Llamada a la funcion mostrarVariableLocal para mostrar el valor de la variable local//

//variable de bloque, accesible solo dentro del bloque de codigo donde se define//

if (true) {
    if (true) {
    let variableBloque = "Soy una variable de bloque";
    console.log(`Variable de bloque: ${variableBloque}`); // Accede a la variable de bloque dentro del bloque de codigo//
    //console.log(VariableBloque); esto genera un error porque la variable de bloque no es accesible fuera del bloque de codigo//
}
}

mostrarVariableBloque(); // Llamada a la funcion mostrarVariableBloque para mostrar el valor de la variable de bloque//
