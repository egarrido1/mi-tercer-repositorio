import Dato from './Dato.js';  // SE impprta el archivo Dato para obtener heredar sus propiedades 
// a Egreso.
 

class Egreso extends Dato {
    static contadorEgresos = 0;

    constructor(descripcion, valor) {
        super(descripcion, valor);
        this._id = ++Egreso.contadorEgresos; // Utilicé el operador de preincremento (++) 
        //para incrementar contadorIngresos antes de asignar su valor a _id.
    }
    getId() {
        return this._id;
    }// Se crea la clase  Egreso que se extiende de la clase Dato
}
export default Egreso; // Exporta la clase Egreso por defecto