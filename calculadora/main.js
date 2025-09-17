function agregar(valor) {
  const pantalla = document.getElementById("pantalla");
  pantalla.value += valor;
}

function limpiar() {
  const pantalla = document.getElementById("pantalla");
  pantalla.value = "";
}

function calcular() {
  const pantalla = document.getElementById("pantalla");
  try {
    pantalla.value = eval(pantalla.value);
  } catch (error) {
    pantalla.value = "ERROR";
  }
}
