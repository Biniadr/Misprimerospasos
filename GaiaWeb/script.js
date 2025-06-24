// BORRA TODOS LOS COMENTARIOS GUARDADOS (solo dejar temporalmente)
//localStorage.removeItem("comentarios");

//document.addEventListener("DOMContentLoaded", function () {
  // resto del código...
//});


document.addEventListener("DOMContentLoaded", function () {
  const lista = document.getElementById("comentarios-lista");
  const comentarios = JSON.parse(localStorage.getItem("comentarios")) || [];

  comentarios.forEach(texto => agregarComentario(texto));

  document.getElementById("form-comentario").addEventListener("submit", function (e) {
    e.preventDefault();
    const input = document.getElementById("comentario-input");
    const texto = input.value.trim();

    if (texto) {
      agregarComentario(texto);
      comentarios.push(texto);
      localStorage.setItem("comentarios", JSON.stringify(comentarios));
      input.value = "";
    }
  });

  function agregarComentario(texto) {
    const div = document.createElement("div");
    div.className = "comentario";
    div.innerHTML = `<p>"${texto}"</p><span>- Anónimo</span>`;
    lista.appendChild(div);
  }
});
