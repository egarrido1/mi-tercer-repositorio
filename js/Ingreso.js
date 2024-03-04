import Dato from './Dato.js';// Se impprta el archivo Dato para obtener heredar sus propiedades 
// a Ingreso.

// Se crea la clase  Ingreso que se extiende de la clase Dato
class Ingreso extends Dato {
    static contadorIngresos = 0;

    constructor(descripcion, valor) {
        super(descripcion, valor);
        this._id = ++Ingreso.contadorIngresos; // Utilicé el operador de preincremento (++) 
        //para incrementar contadorIngresos antes de asignar su valor a _id.
    }
    getId() {
        return this._id;
    }
}
export default Ingreso; // Exporta la clase Ingreso por defecto