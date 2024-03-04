// Define la clase Dato y hereda sus propiedades a Ingreso y Egreso.
export default class Dato {
    constructor (descripcion,valor) {
       this._descripcion=descripcion;
        this._valor=valor;
    }
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