// Archivo Egreso.js

import Dato from './Dato.js';  // Se impprta el archivo Dato para heredar sus propiedades 
// a Egreso.
 
// Se crea la clase Egreso que se extiende de la clase Dato
class Egreso extends Dato {
    static contadorEgresos = 0; // Sirve para asignar un identificador único (_id) a cada
    // objeto "egreso"

    constructor(descripcion, valor) { // DEfine el constructor 
        super(descripcion, valor); // hereda las propiedades de la clase padre
        this._id = ++Egreso.contadorEgresos; //incrementar contadorEgresos antes de
        // asignar su valor a "_id", para que cada nuevo "egreso" tenga un identificador único.
    }

    // Método que devuelve el valor de _id, permitiendo acceder al identificador 
    //único de un objeto Egreso.
    getId() {
        return this._id;
    }
}
export default Egreso; // Exporta la clase Egreso por defecto