// Archivo app.js
// Importa las clases Ingreso y Egreso desde sus respectivos archivos.
import Ingreso from './Ingreso.js';
import Egreso from './Egreso.js';

// Arreglo de ingresos
let ingresos = [
    // crea tres instancias de la clase Ingreso
    new Ingreso("Salario", 20000),
    new Ingreso("Venta auto", 50000),
    new Ingreso("Freelance", 10000)
];

// Arreglo de egresos
let egresos = [
    // Crea tres instancias de la clase egreso
    new Egreso("Renta", 4000),
    new Egreso("Ropa", 800),
    new Egreso("Colegiatura", 30000)
];

// Función para eliminar un ingreso
function eliminarIngreso(id) {
    // Se crea un nuevo array para excluir de la lista al elemento cuyo ID coincida 
    //con el id proporcionado como parámetro
    ingresos = ingresos.filter(ingreso => ingreso.getId() !== id);
    cargarApp(); // Recarga datos nuevamente
};

// Función para cargar los ingresos dinámicamente
function cargarIngresos() {
    const listaIngresosElement = document.getElementById('lista_ingresos'); // Obtinene una
    // referencia al elemento HTML con el id 'lista_ingresos' 
    listaIngresosElement.innerHTML = '';  // Limpiar el contenido actual

    for (const ingreso of ingresos) { // toma el valor de cada elemento en cada iteración
        // del bucle.
        const ingresoHTML = crearIngresoHTML(ingreso); // crear un elemento HTML que representa
        // visualmente el ingreso.
        listaIngresosElement.appendChild(ingresoHTML); // crear un elemento HTML como un hijo del
        // elemento con el id 'lista_ingresos'
    }
};


// Función para eliminar un egreso
const eliminarEgreso = (id) => {
    const indiceEliminar = egresos.findIndex(egreso => egreso.getId() === id); // busca el índice del egreso 
    //cuyo ID coincide con el id proporcionado como parámetro

    if (indiceEliminar !== -1) { // Se verifica si se encuentró el egreso
        egresos.splice(indiceEliminar, 1); // elimina un elemento del array egresos en la posición especificada
        // por indiceEliminar. En este caso, se elimina solo un elemento.
        cargarCabecero(); // Recarga cabecero para reflejar cambios
        cargarEgresos(); // Recarga la lista de egresos para reflejar los cambios
        console.log("Egreso eliminado:", id);
    } else {
        console.log("Egreso no encontrado:", id);
    }
};


// Función para cargar los egresos dinámicamente
function cargarEgresos() {
    const listaEgresosElement = document.getElementById('lista_egresos'); // Obtinene una
    // referencia al elemento HTML con el id 'lista_egresos' 
    listaEgresosElement.innerHTML = '';  // Limpia el contenido actual

    for (const egreso of egresos) { // toma el valor de cada elemento en cada iteración
        // del bucle.
        const egresoHTML = crearEgresoHTML(egreso); // crear un elemento HTML que representa
        // visualmente el egreso.
        listaEgresosElement.appendChild(egresoHTML); // crear un elemento HTML como un hijo del
        // elemento con el id 'lista_egresos'
    }
};

// Calcula el total de ingresos
const totalIngresos = () => {
    let totalIngreso = 0;
    for (let ingreso of ingresos) { // Recorre todo el arreglo para calcular el total
        // de ingresos.
        totalIngreso += ingreso.valor; // Se suma el valor del ingreso actual al total acumulado 
    }
    return totalIngreso; // Devuelve el total acumulado de ingresos como resultado de la función.
};


// Calcula el total de egresos
const totalEgresos = () => {
    let totalEgreso = 0;
    for (let egreso of egresos) { // Recorre todo el arreglo para calcular el total
        // de egresos.
        totalEgreso += egreso.valor; // Se suma el valor del egreso actual al total acumulado 
    }
    return totalEgreso; // Devuelve el total acumulado de egresos como resultado de la función.
};


// Crear un cabecero
const cargarCabecero = () => {
    //let egresos = [900, 400];
    //let ingresos = [9000, 400];

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


// Función para crear el HTML de un ingreso
const crearIngresoHTML = (ingreso) => { // El parámetro ingreso, regresenta un ingreso en la aplicación

    // // Se crea un nuevo elemento <div> que servirá como contenedor principal para mostrar 
    //la información del ingreso y se añaden clases CSS.
    const ingresoHTML = document.createElement('div');
    ingresoHTML.classList.add('elemento', 'limpiarEstilos');

    // Se crea un nuevo elemento <div> para la descripción, Se añade la clase 'elemento_descripcion' y se 
    // establece el contenido de texto 
    const descripcionElement = document.createElement('div');
    descripcionElement.classList.add('elemento_descripcion');
    descripcionElement.textContent = ingreso.descripcion;
    
    // Se crea un nuevo elemento <div> para el valor, // Se añaden clases CSS al elemento valorElement y 
    // Formatea el valor del ingreso como moneda antes de insertarlo en el HTML.
    const valorElement = document.createElement('div');
    valorElement.classList.add('derecha', 'limpiarEstilos');
    valorElement.innerHTML = `<div class="elemento_valor">${formatoMoneda(ingreso.valor)}</div>`;

    //Se crea un nuevo elemento <button> y Se añade la clase 'elemento_eliminar--btn' al botón 
    const eliminarButton = document.createElement('button');
    eliminarButton.classList.add('elemento_eliminar--btn');

    // Se establece el contenido HTML del botón de eliminar, Se asigna un manejador de eventos al botón de
    // eliminar que llama a la función eliminarIngreso con el ID del ingreso como argumento cuando se hace clic.
    eliminarButton.innerHTML = '<ion-icon name="close-circle-outline"></ion-icon>';
    eliminarButton.onclick = () => eliminarIngreso(ingreso.getId());
    
    // Se crea un nuevo elemento <div>, se añade su clase y Se añade el botón de eliminar como hijo del 
    // elemento eliminarDiv.
    const eliminarDiv = document.createElement('div');
    eliminarDiv.classList.add('elemento_eliminar');
    eliminarDiv.appendChild(eliminarButton);
    valorElement.appendChild(eliminarDiv);

    // Se añade el elemento descripcionElement y el elemento valorElement como hijos del elemento ingresoHTML.
    ingresoHTML.appendChild(descripcionElement);
    ingresoHTML.appendChild(valorElement);
    return ingresoHTML;
};


// Función para crear el HTML de un Egreso
const crearEgresoHTML = (egreso) => {
    // Se crea un nuevo elemento <div> que servirá como contenedor principal para mostrar 
    //la información del egreso y se añaden clases CSS.
    const egresoHTML = document.createElement('div');
    egresoHTML.classList.add('elemento', 'limpiarEstilos');
    // Se establece el atributo data-id del elemento egresoHTML con el ID del egreso.
    egresoHTML.dataset.id = egreso.getId();

    // Se crea un nuevo elemento <div> para la descripción, Se añade la clase 'elemento_descripcion' y se 
    // establece el contenido de texto 
    const descripcionElement = document.createElement('div');
    descripcionElement.classList.add('elemento_descripcion');
    descripcionElement.textContent = egreso.descripcion;

    // Se crea un nuevo elemento <div> para el valor, // Se añaden clases CSS al elemento valorElement y 
    // Formatea el valor del egreso como moneda antes de insertarlo en el HTML.
    const valorElement = document.createElement('div');
    valorElement.classList.add('derecha', 'limpiarEstilos');
    valorElement.innerHTML = `<div class="elemento_valor">${formatoMoneda(egreso.valor)}</div>`;

    // Se crea un nuevo elemento <div> para el porcentaje y se le añade la clase 'elemento_porcentaje'
    const porcentajeHTML = document.createElement('div');
    porcentajeHTML.classList.add('elemento_porcentaje');
    // Calcula el porcentaje utilizando la información actual de ingresos y egresos
    const porcentajeEgreso = (egreso.valor / totalIngresos());
    porcentajeHTML.textContent = formatoPorcentaje(porcentajeEgreso);


    // Se crea un nuevo elemento <button> y Se añade la clase 'elemento_eliminar--btn' al botón 
    const eliminarButton = document.createElement('button');
    eliminarButton.classList.add('elemento_eliminar--btn');
    // Se establece el contenido HTML del botón de eliminar, Se asigna un manejador de eventos al botón de
    // eliminar que llama a la función eliminarIngreso con el ID del egreso como argumento cuando se hace clic.
    eliminarButton.innerHTML = '<ion-icon name="close-circle-outline"></ion-icon>';
    eliminarButton.onclick = () => eliminarEgreso(egreso.getId());

    // Se crea un nuevo elemento <div>, se añade su clase y Se añade el botón de eliminar como hijo del 
    // elemento eliminarDiv.
    const eliminarDiv = document.createElement('div');
    eliminarDiv.classList.add('elemento_eliminar');
    
    // Añadir el porcentaje antes del botón de eliminar
    eliminarDiv.appendChild(porcentajeHTML);
    eliminarDiv.appendChild(eliminarButton);
    valorElement.appendChild(eliminarDiv);

    // Se añade el elemento descripcionElement y el elemento valorElement como hijos del elemento ingresoHTML.
    egresoHTML.appendChild(descripcionElement);
    egresoHTML.appendChild(valorElement);

    return egresoHTML;
};


// Rutina para convertir "un valor" a MX
const formatoMoneda = valor => {
    return valor.toLocaleString('es-MX', { // Formatea un número según las convenciones mexicanas.
        style: 'currency',  // Indica que el formato debe ser tipo moneda
        currency: 'MXN',  // indica la moneda a utilizar, en este caso MXN
        minimumFractionDigits: 2 // Indica que se deben usar al menos dos dijitos decimales
    });
};

//Rutina para convertir "un valor" a porcentaje con 2 dígitos
    const formatoPorcentaje = valor => {
        return valor.toLocaleString('es-MX', { // Formatea un número según las convenciones mexicanas.
            style: 'percent',// la función toma un valor decimal y lo convertirá a porcentaje
            // ej.0.4567
            minimumFractionDigits: 2 // Y mostrará dos dijitos decimales ej. 45.67%
        });
    };

    
const agregarDato = () => {
    // Obtener referencias a elementos del formulario
    const forma = document.getElementById('forma');
    const tipo = document.getElementById('tipo').value;
    const descripcion = document.getElementById('descripcion').value;
    const valor = document.getElementById('valor').value;  // Asegúrate de que 'valor' exista

    // Validar que la descripción y el valor no estén vacíos
    if (descripcion.trim() === '' || valor.trim() === '') {
        alert('Por favor, ingresa una descripción y un valor.');
        return;
    }

    // Validar el tipo y agregar el dato correspondiente (ingreso o egreso)
    if (tipo === 'ingreso') {
        ingresos.push(new Ingreso(descripcion, parseFloat(valor)));
        cargarIngresos(); // Recargar la lista de ingresos

    } else if (tipo === 'egreso') {
        egresos.push(new Egreso(descripcion, parseFloat(valor)));
        cargarEgresos(); // Recargar la lista de egresos
    }

    cargarCabecero(); // Recargar el cabecero para actualizar los totales
    forma.reset(); // Limpiar el formulario después de agregar el dato
};

// Función para cargar la aplicación
const cargarApp = () => {
    cargarCabecero(); // Carga cabecero
    cargarIngresos(); // Carga ingresos
    cargarEgresos(); // Carga egresos
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
