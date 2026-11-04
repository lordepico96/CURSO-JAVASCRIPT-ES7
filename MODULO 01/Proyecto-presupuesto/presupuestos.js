console.log("Hello, World!");
console.log("Estoy aprendiendo JavaScript.");

//variables y tipos de datos

//diferencia entre let y const
let ciudad = "Madrid";
ciudad = "Barcelona"; // Esto es válido porque 'ciudad' es una variable declarada con 'let'

const pais = "España";
//pais = "Francia"; // Esto generará un error porque 'pais' es una constante declarada con 'const'

//tipos de datos

const nombre = "Ana"; // String
const edad = 30; // Number
const esEstudiante = true; // Boolean
let temporada; // Undefined
const direccion = null; // Null se usa para representar la ausencia de valor

console.log(typeof nombre); // "string"
console.log(typeof edad); // "number"
console.log(typeof esEstudiante); // "boolean"
console.log(typeof temporada); // "undefined"
console.log(typeof direccion); // "object" (esto es un comportamiento conocido de JavaScript, null es considerado un objeto)

//la diferencia entre null y undefined
// undefined significa que una variable ha sido declarada pero aún no se le ha asignado un valor.
// null es un valor asignado a una variable para indicar que no tiene ningún valor.

const nombreUsuario = "María";
const edadUsuario = 25;

const mensaje = `El nombre del usuario es ${nombreUsuario} y tiene ${edadUsuario} años.`;
console.log(mensaje);

//operadores aritméticos

const a = 10;
const b = 5;

console.log(a + b); // Suma: 15
console.log(a - b); // Resta: 5
console.log(a * b); // Multiplicación: 50
console.log(a / b); // División: 2
console.log(a % b); // Módulo: 0 (resto de la división)

//operadores de comparación

console.log(a > b); // Mayor que: true
console.log(a < b); // Menor que: false
console.log(a >= b); // Mayor o igual que: true
console.log(a <= b); // Menor o igual que: false
console.log(a === b); // Igualdad estricta: false
console.log(a == b); // Igualdad: false
console.log(a !== b); // Desigualdad estricta: true

//operadores lógicos

const edadPersona = 20;
const tieneDocumento = true;

const puedeIngresar = edadPersona >= 18 && tieneDocumento; // true si la persona es mayor de edad y tiene documento
console.log(puedeIngresar); // true

const esMayorDeEdad = edadPersona >= 18 || tieneDocumento; // true si la persona es mayor de edad o tiene documento
console.log(esMayorDeEdad); // true

const noPuedeIngresar = !puedeIngresar; // Negación: true si la persona no puede ingresar
console.log(noPuedeIngresar); // true

// conversio de datos

const precio = "100";
const cantidad = "5";

const total = Number(precio) * Number(cantidad); // Convertimos las cadenas a números antes de multiplicar
console.log(total); // 500

// desarrollar un porgrama que calcule el salario semanal de un trabajador,
//  considerando horas trabajadas y tarifa por hora. Agregar una bonificacion del 10%
// cuando el salario base supefe $500000

const horasTrabajadas = 45; // Número de horas trabajadas en la semana
const tarifaPorHora = 12000; // Tarifa por hora en pesos

let salarioBase = horasTrabajadas * tarifaPorHora; // Calculamos el salario base

if (salarioBase > 500000) {
  const bonificacion = salarioBase * 0.1; // Calculamos la bonificación del 10%
  salarioBase += bonificacion; // Sumamos la bonificación al salario base
}

console.log(`El salario semanal del trabajador es: $${salarioBase}`); // Mostramos el salario final

const edad2 = 20;

if (edad2 >= 18) {
  console.log("Eres mayor de edad.");
} else {
  console.log("Eres menor de edad.");
}

//condicionales multiples

const calificacion = 85;

if (calificacion >= 90) {
  console.log("Excelente");
} else if (calificacion >= 80) {
  console.log("Muy bien");
} else if (calificacion >= 70) {
  console.log("Bien");
} else if (calificacion >= 60) {
  console.log("Suficiente");
} else {
  console.log("Insuficiente");
}

// CONDICIONALE COMPUESTAS

const edad3 = 25;
const tieneEntrada = true;

if (edad3 >= 18 && tieneEntrada) {
  console.log("Puedes ingresar al evento.");
} else {
  console.log("No puedes ingresar al evento.");
}

//sistema de calificaciones de cliente por valor de compra aplica descuento 0% si
//la compra es menor a $100000, 5% si la compra es entre $100000 y $300000, 10% si la compra es entre $500000 y $1000000 y
//  15% si la compra es mayor a $500000

const valorCompra = 600000; // Valor de la compra en pesos
let descuento = 0; // Inicializamos el descuento en 0%

if (valorCompra < 100000) {
  descuento = 0; // No hay descuento
} else if (valorCompra >= 100000 && valorCompra < 300000) {
  descuento = 0.05; // 5% de descuento
} else if (valorCompra >= 300000 && valorCompra < 500000) {
  descuento = 0.1; // 10% de descuento
} else if (valorCompra >= 500000) {
  descuento = 0.15; // 15% de descuento
}

const totalConDescuento = valorCompra - valorCompra * descuento; // Calculamos el total con descuento
console.log(`El valor de la compra es: $${valorCompra}`);
console.log(`El descuento aplicado es: ${descuento * 100}%`);
console.log(`El total a pagar después del descuento es: $${totalConDescuento}`);

// ESTRUCTURAS DE CONTROL DE FLUJO

//SWICTH
const dia = 3;

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

//CICLO FOR

for (let i = 1; i <= 5; i++) {
  console.log(`Número: ${i}`); // Imprime los números del 1 al 5
}

// while 
let j = 8;
while (j <= 5) {
  console.log(`Número: ${j}`); // Imprime los números del 1 al 5
  j++;
}

// do while
let k = 1;
do {
  console.log(`Número: ${k}`);
    k++;
} while (k <= 5);

//imprimir la tabla de multiplacar de un numero del 1 al 10
  
let tabla = 7;

for (let i = 1; i <= 10; i++) {
    resultado = tabla * i;
    console.log(`${tabla} x ${i} = ${resultado}`);
}

// calcular la suma de los numeros del 1 al 100

let suma = 0;

for (let i = 1; i <= 100; i++) {
    suma += i; // suma = suma + i    
}

console.log(`La suma de los números del 1 al 100 es: ${suma}`);

let suma2 = 0;

while (suma2 <= 100) {
    suma2 += suma2 + 1; 
     }

console.log(`La suma acumulada es: ${suma2}`);
    

// simular un agorro mensual durante 12 meses y mostrar el acumulado de cada mes.

let ahorroMensual = 10000; // Monto del ahorro mensual

let acumulado = 0; // Inicializamos el acumulado en 0

for (let mes = 1; mes <= 12; mes++) {
    acumulado += ahorroMensual;
    console.log(`Mes ${mes}: Ahorro acumulado = $${acumulado}`);
}

// fnciones y reutilización de código

function saludar (nombre) {
    return `Hola, ${nombre}!`;
}

console.log(saludar("Juan")); // Llamada a la función con el nombre "Juan"

function calcularIva(precio) {
    return precio * 0.19; // Calcula el IVA (19%) del precio total
}

function calcularTotalConIva(precio) {
    const iva = calcularIva(precio);
    return precio + iva;
}   

function calcularTotal(precio, cantidad) {
    return precio * cantidad;
}

function calcultarTotalIva(precio, cantidad) {
   return precio * cantidad * 0.19; // Calcula el total con IVA para un precio y cantidad dados
}
console.log(`El total con IVA es: $${calcularTotalConIva(100000)}`); // Llamada a la función con el precio 100000
console.log(`El total de la compra es: $${calcularTotal(100000, 3)}`); // Llamada a la función con el precio 100000 y cantidad 3
console.log(`El total de la compra con IVA es: $${calcultarTotalIva(100000, 3)}`); // Llamada a la función con el precio 100000 y cantidad 3


//ARROW FUNCTIONS

const calcularIva = (precio) => precio * 0.19; // Calcula el IVA (19%) del precio total
console.log(`El IVA de $100000 es: $${calcularIva(100000)}`); // Llamada a la función con el precio 100000


// alcande de variables

let variableGlobal = "Soy una variable global";

function mostrarVariableGlobal() {
    console.log(variableGlobal); // Accede a la variable global
}

mostrarVariableGlobal(); // Llamada a la función

function mostrarVariableLocal() {
    let variableLocal = "Soy una variable local dentro de la función";
    console.log(variableLocal); // Accede a la variable local dentro de la función
}

mostrarVariableLocal();

function mostrarVariableBloque() {
    if (true) {
        let variableBloque = "Soy una variable de bloque dentro del if";
        console.log(variableBloque); // Accede a la variable de bloque dentro del if
    }
    // console.log(variableBloque); // Esto generará un error porque variableBloque no es accesible fuera del bloque if
}

mostrarVariableBloque();

function validarMonto(monto) {
   
    return typeof monto === "number" && monto >= 0; // Retorna true si el monto es un número y mayor o igual a 0, de lo contrario retorna false
    }

console.log(validarMonto(100)); // true
console.log(validarMonto(-50)); // false

