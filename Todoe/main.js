
let usuario = document.getElementById("usuario");
let btn = document.getElementById("btn");
let lista = document.getElementById("lista");

btn.addEventListener('click', () => {
  let texto = usuario.value;

  if (texto.trim() === "") {
    alert("No podés ingresar espacios vacíos");
    return;
  }

  if (confirm("¿Vas a agregar esta tarea?")) {
    let li = document.createElement("li");
    li.textContent = texto;
    lista.appendChild(li);
    usuario.value = ""; // Limpia el input
  }
});

li.addEventListener('click', () =>{
    li.classList.toggle('tachado');
});


