import { senyores } from "../datos/senyores.js";

const principal = document.querySelector(".principal");
const numeroMarcados = document.querySelector(".marcados");
const btnMarcarTodos = document.querySelector("#btn-marcar-todos");

const getInicial = (nombre) => {
  const partesNombre = nombre.split(" ");
  const inicial = partesNombre[0].length > 2 ? 0 : 1;
  return partesNombre[inicial].charAt(0);
};

for (const { nombre, foto, profesion, estado, twitter, marcado } of senyores) {
  const senyorElemento = document
    .querySelector(".senyor-molde")
    .cloneNode(true);
  senyorElemento.classList.remove("senyor-molde");
  const nombreElemento = senyorElemento.querySelector(".nombre-senyor");
  nombreElemento.textContent = nombre;
  const imagen = senyorElemento.querySelector(".avatar > img");
  imagen.src = `img/${foto}`;
  const profesionElemento = senyorElemento.querySelector(".datos .profesion");
  profesionElemento.textContent = profesion;
  const estadoElemento = senyorElemento.querySelector(".datos .estado");
  estadoElemento.textContent = estado;
  const twitterElemento = senyorElemento.querySelector(".datos .redSocial");
  twitterElemento.textContent = twitter;
  const iconoElemento = senyorElemento.querySelector(".inicial");
  iconoElemento.textContent = getInicial(nombre);
  if (marcado) {
    senyorElemento.classList.add("marcado");
    ++numeroMarcados.textContent;
  }
  principal.append(senyorElemento);
}

btnMarcarTodos.addEventListener("click", (e) => {
  e.preventDefault();
  const senyores = document.querySelectorAll(".senyor:not(.senyor-molde)");
  senyores.forEach((senyor) => {
    if (!senyor.classList.contains("marcado")) {
      senyor.classList.add("marcado");
    }
  });
  numeroMarcados.textContent = senyores.length;
});
