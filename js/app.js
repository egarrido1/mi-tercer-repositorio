// Archivo app.js

// Importa las clases Ingreso y Egreso desde sus respectivos archivos.

import Ingreso from './Ingreso.js';
import Egreso from './Egreso.js';

// Arreglo de ingresos
let ingresos = [
    // crea tres instancias de la clase Ingreso
   // new Ingreso("Salario", 20000),
   // new Ingreso("Venta auto", 50000),
   // new Ingreso("Freelance", 10000)
];

// Arreglo de egresos
let egresos = [
    // Crea tres instancias de la clase egreso
    new Egreso("Renta", 4000),
    new Egreso("Ropa", 800),
    new Egreso("Colegiatura", 30000)
];

// Función para eliminar un ingreso
const eliminarIngreso = (id) => {
    ingresos = ingresos.filter(ingreso => ingreso.getId() !== id);
    console.log(ingresos)
    cargarApp();
};

// Función para cargar los ingresos dinámicamente
function cargarIngresos() {
    let ingresosHTML = '';
    for (const ingreso of ingresos) {
        ingresosHTML += crearIngresoHTML(ingreso);
    }
    const listaIngresosElement = document.getElementById('lista_ingresos');
    listaIngresosElement.innerHTML = ingresosHTML;
    console.log("Ingresos cargados:", ingresos);
};

// Función para eliminar un egreso
const eliminarEgreso = (id) => {
    const indiceEliminar = egresos.findIndex(egreso => egreso.getId() === id);
    egresos.splice(indiceEliminar, 1);
    cargarCabecero(); // Recarga cabecero para reflejar cambios
    cargarEgresos(); // Recarga la lista de egresos para reflejar los cambios
};

// Función para cargar los egresos dinámicamente
const cargarEgresos = () => {
    let egresosHTML = '';
    for (const egreso of egresos) {
        egresosHTML += crearEgresoHTML(egreso);
    }
    const listaEgresosElement = document.getElementById('lista_egresos');
    listaEgresosElement.innerHTML = egresosHTML;
    console.log("Egresos cargados:", egresos);
};

// Función para crear el HTML de un ingreso
const crearIngresoHTML = (ingreso) => {
    const ingresoHTML = `
        <div class="elemento limpiarEstilos">
            <div class="elemento_descripcion">${ingreso.descripcion}</div>
            <div class="derecha limpiarEstilos">
                <div class="elemento_valor">${formatoMoneda(ingreso.valor)}</div>
                <div class="elemento_eliminar">
                    <button class="elemento_eliminar--btn" onclick="${(ingreso)=>(eliminarIngreso(ingreso.getId()))}">
                        <ion-icon name="close-circle-outline"></ion-icon>
                    </button>
                </div>
            </div>
        </div>
    `;
    return ingresoHTML;
};

// Función para crear el HTML de un egreso
const crearEgresoHTML = (egreso) => {
    const egresoHTML = `
        <div class="elemento limpiarEstilos">
            <div class="elemento_descripcion">${egreso.descripcion}</div>
            <div class="derecha limpiarEstilos">
                <div class="elemento_valor">${formatoMoneda(egreso.valor)}</div>
                <div class="elemento_eliminar">
                    <button class="elemento_eliminar--btn" onclick="eliminarEgreso(${egreso.getId()})">
                        <ion-icon name="close-circle-outline"></ion-icon>
                    </button>
                </div>
            </div>
        </div>
    `;
    return egresoHTML;
};


// Rutina para convertir "un valor" a MX
const formatoMoneda = valor => {
    return valor.toLocaleString('es-MX', {
        style: 'currency',  // Indica que el formato debe ser tipo moneda
        currency: 'MXN',  // indica la moneda a utilizar, en este caso MXN
        minimumFractionDigits: 2 // Indica que se deben usar al menos dos dijitos decimales
    });
};

// Crear un cabecero
const cargarCabecero = () => {
    //let egresos = [900, 400];
    //let ingresos = [9000, 400];

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
    cargarCabecero(); // Carga cabecero
    cargarIngresos(); // Carga ingresos
    cargarEgresos(); // Carga egresos
};

const agregarDato = () => {
    // Obtener referencias a elementos del formulario
    const forma = document.getElementById('forma');
    const tipo = document.getElementById('tipo').value;
    const descripcion = document.getElementById('descripcion').value;
    const valor = document.getElementById('valor').value;  // Asegúrate de que 'valor' exista

    console.log("Descripción:", descripcion);
    console.log("Valor:", valor);

    // Validar que la descripción y el valor no estén vacíos
    if (descripcion.trim() === '' || valor.trim() === '') {
        alert('Por favor, ingresa una descripción y un valor.');
        return;
    }

    // Validar el tipo y agregar el dato correspondiente (ingreso o egreso)
    if (tipo === 'ingreso') {
        ingresos.push(new Ingreso(descripcion, parseFloat(valor)));
        console.log("Ingreso agregado:", ingresos);
        cargarIngresos(); // Recargar la lista de ingresos

    } else if (tipo === 'egreso') {
        egresos.push(new Egreso(descripcion, parseFloat(valor)));
        cargarEgresos(); // Recargar la lista de egresos
        console.log("Egreso agregado:", egresos);
    }

    cargarCabecero(); // Recargar el cabecero para actualizar los totales
    forma.reset(); // Limpiar el formulario después de agregar el dato
};

// EventListener para cargar la aplicación cuando el documento esté completamente cargado
window.onload = () => {
    // Asegúrandonos de que los elementos existan antes de agregar eventListeners
    const botonAgregar = document.getElementById('agregar-btn');

    // Verifica si el elemento fue encontrado antes de agregar el eventListener
    if (botonAgregar) {
        botonAgregar.addEventListener('click', agregarDato);
    }
    // Llama a cargarApp después de haber configurado los event listeners
    cargarApp();
};

window.agregarDato = agregarDato;