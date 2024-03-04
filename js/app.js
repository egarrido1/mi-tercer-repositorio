
// Importa las clases Dato, Ingreso y Egreso desde sus respectivos archivos.
//import Dato from './Dato.js';
import Ingreso from './Ingreso.js';
import Egreso from './Egreso.js';

// Arreglo de ingresos
let ingresos = [
    // crea dos instancias de la clase Ingreso
    new Ingreso("Salario", 20000),
    new Ingreso("Venta auto", 50000)
];

// Arreglo de egresos
let egresos = [
    // Crea dos instancias de la clase egreso
    new Egreso("Renta", 4000),
    new Egreso("Ropa", 800)
];

// Crear un cabecero
const cargarCabecero = () => {
    //let egresos = [900, 400];
    //let ingresos = [9000, 400];

    // Rutina para convertir "un valor" a MX
    const formatoMoneda = valor => {
        return valor.toLocaleString('es-MX', {
            style: 'currency',  // Indica que el formato debe ser tipo moneda
            currency: 'MXN',  // indica la moneda a utilizar, en este caso MXN
            minimumFractionDigits: 2 // Indica que se deben usar al menos dos dijitos decimales
        });
    };
    //Rutina para convertir "un valor" a porcentaje con 2 dígitos
    const formatoPorcentaje = valor => {
        return valor.toLocaleString('es-MX', {
            style: 'percent',// la función toma un valor decimal y lo convertirá a porcentaje
            // ej.0.4567
            minimumFractionDigits: 2 // Y mostrará dos dijitos decimales ej. 45.67%
        });
    };

    // Calcula el total de ingresos
    const totalIngresos = () => {
        let totalIngreso = 0;
        for (let ingreso of ingresos) { // Recorre todo el arreglo para calcular el total
            // de ingresos.
            totalIngreso += ingreso.valor;
        }
        return totalIngreso;
    };

    // Calcula el total de egresos
    const totalEgresos = () => {
        let totalEgreso = 0;
        for (let egreso of egresos) { // Recorre todo el arreglo para calcular el total
            // de egresos.
            totalEgreso += egreso.valor;
        }
        return totalEgreso;
    };

    // Calculamos el presupuesto y el porcentaje
    let presupuesto = totalIngresos() - totalEgresos();
    let porcentajeEgreso = totalEgresos() / totalIngresos()

    // En lugar de imprimir en consola los valores generados, se pueda recuperar por id los
    // elementos: presupuesto, porcentaje, ingreoss y egtresos.

    // Obtenemos los elementos por su ID
    const presupuestoElement = document.getElementById('presupuesto_valor');
    const porcentajeElement = document.getElementById('porcentaje');
    const ingresosElement = document.getElementById('ingresos_valor');
    const egresosElement = document.getElementById('egresos_valor');
 
    // Asignamos los valores a los elementos HTML
    presupuestoElement.innerHTML = formatoMoneda(presupuesto);
    porcentajeElement.innerHTML = formatoPorcentaje(porcentajeEgreso);
    ingresosElement.innerHTML = formatoMoneda(totalIngresos());
    egresosElement.innerHTML = formatoMoneda(totalEgresos());

    // Imprimimos en consola los totales
    console.log(`Presupuesto: ${formatoMoneda(presupuesto)}`);
    console.log(`Porcentaje de Egreso: ${formatoPorcentaje(porcentajeEgreso)}`);
    console.log(`El Total de los INGRESOS: ${formatoMoneda(totalIngresos())}`);
    console.log(`El Total de EGRESOS: ${formatoMoneda(totalEgresos())}`);   
}

// Función para cargar la aplicación
const cargarApp = () => {
    cargarCabecero();
};

// Llama a cargarApp() cuando el documento se carga
window.onload = cargarApp;






