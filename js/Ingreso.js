// Archivo Ingreso.js

import Dato from './Dato.js';// Se importa el archivo Dato para heredar sus propiedades 
// a cada objeto "Ingreso".

// Se crea la clase Ingreso que se extiende de la clase Dato
class Ingreso extends Dato {
    static contadorIngresos = 0; // Sirve para asignar un identificador único (_id) a cada
    // objeto "ingreso"

    constructor(descripcion, valor) { // Se define el constructor
        super(descripcion, valor); // Hereda las propiedades de la clase padre
        this._id = ++Ingreso.contadorIngresos; // //incrementar contadorIngresos antes de
        // asignar su valor a "_id", para que cada nuevo "Ingreso" tenga un identificador único.
    }

    // Método que devuelve el valor de _id, permitiendo acceder al identificador 
    //único de un objeto Ingreso.
    getId() {
        return this._id;
    }
}
export default Ingreso; // Exporta la clase Ingreso por defecto