// Archivo Dato.js

// Define la clase Dato y hereda sus propiedades a Ingreso y Egreso.
export default class Dato { // La clase dato tiene un constructor y dos propiedades
    constructor (descripcion,valor) {
       this._descripcion=descripcion;
        this._valor=valor;
    }
    // Los metódos get y set permiten obtener y establecer el valor de la propiedad
    // "descripción"
    get descripcion() {
        return this._descripcion;
    }
    set descripcion(nuevaDescripcion ) {
        // Verificamos que sea una dato valido
        if (typeof nuevaDescripcion ===`string`) {
            this._descripcion=nuevaDescripcion;
        } else { 
            // Manda mensaje de error si no es dato válido
            console.error(`Error: La descripcion debe ser un valor de tipo String.`);
        }
    }
    // Los métodos get y set permiten obtener y establecer el valor de la propiedad
    //  "valor"
    get valor() {
        return this._valor;
    }
    set valor(nuevoValor) {
        // verificamos que nuevoValor sea un número positivo
        if (typeof nuevoValor === `number`&&  nuevoValor >=0 ) {
            return this._valor=nuevoValor;
        } else {
            // Manda mensaje de error si no es un dato válido.
            console.error(`Error: El valor debe ser un número positivo.`);
        } 
    }
}