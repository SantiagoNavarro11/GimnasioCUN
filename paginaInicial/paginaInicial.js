// Función para redirigir con limpieza y accesibilidad
function redirigir(pagina) {
  if (typeof pagina === "string" && pagina.trim() !== "") {
    window.location.href = pagina;
  }
}
