let color = "";

document.addEventListener("keydown", function (event) {
  if (event.key === "a" || event.key === "A") {
    cambiarColor("pink");
  } else if (event.key === "s" || event.key === "S") {
    cambiarColor("orange");
  } else if (event.key === "d" || event.key === "D") {
    cambiarColor("lightblue");
  } else if (event.key === "q" || event.key === "Q") {
    agregarElemento("purple");
  } else if (event.key === "w" || event.key === "W") {
    agregarElemento("gray");
  } else if (event.key === "e" || event.key === "E") {
    agregarElemento("brown");
  } else if (event.key === "x" || event.key === "X") {
    eliminarElemento();
  }
});

function cambiarColor(color) {
  let elemento = document.getElementById("key");
  elemento.style.backgroundColor = color;
}

function agregarElemento(color) {
  let container = document.getElementById("container");
  let nuevoElemento = document.createElement("div");
  nuevoElemento.style.width = "300px";
  nuevoElemento.style.height = "300px";
  nuevoElemento.style.backgroundColor = color;
  nuevoElemento.style.border = "1px solid hotpink";
  container.appendChild(nuevoElemento);
}
