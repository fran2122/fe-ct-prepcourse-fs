function esFechaValida(fecha) {
  const fechaObj = new Date(fecha);

  if (!isNaN(fechaObj) && fechaObj.toString() !== 'Invalid Date') {
    return true;
  } else {
    return false;
  }
  // La función recibe un argumento "fecha".
  // Comprueba si este corresponde a una fecha válida.
  // Si es así, retorna true, sino retorna false.
  // Tu código:
}

module.exports = esFechaValida;