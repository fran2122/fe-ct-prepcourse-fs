function esMayorDeEdad(fechaNacimiento) {
  const fechaNac = new Date(fechaNacimiento);
  const fechaActual = new Date();
  const edadMinima = 18;

  const edad = fechaActual.getFullYear() - fechaNac.getFullYear();

  if (edad > edadMinima || (edad === edadMinima && fechaActual.getMonth() > fechaNac.getMonth()) || (edad === edadMinima && fechaActual.getMonth() === fechaNac.getMonth() && fechaActual.getDate() >= fechaNac.getDate())) {
    return true;
  } else {
    return false;
  }
  // La función recibe un argumento "fechaNacimiento" correspondiente a la fecha
  // de nacimiento de una persona.
  // Determina si esta persona es mayor de edad (tiene 18 años o más).
  // Devuelve true si lo es, caso contrario, retorna false.
  // PISTA: Investiga el método getFullYear() de la clase Date para obtener el año actual.
  // Tu código:
}

module.exports = esMayorDeEdad;