export const formatoFecha = (fecha) => {
  const nuevaFecha = new Date(fecha.split("T")[0].split("-"));

  const opciones = {
    weekday: "long",
    year: "numeric",
    month: "long",
    day: "2-digit",
  };

  return nuevaFecha.toLocaleDateString("es-Es", opciones);
};
