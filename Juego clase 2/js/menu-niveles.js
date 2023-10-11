const escribeNiveles = () => {
    let menuNiveles = document.querySelector(".selecciona-nivel ul");
    niveles.forEach((elemento, indice) => {
      let controlNivel = document.createElement("li");
      controlNivel.innerHTML =
        "<button class='nivel' data-nivel=" +
        indice +
        ">Nivel " +
        (indice + 1) +
        "</button>";
      menuNiveles.appendChild(controlNivel);
    });
  }
  
  const cambiaNivel = () => {
    let nivel = parseInt(this.dataset.nivel);
    nivelActual = nivel;
    actualizaNivel();
    iniciar();
  }
  
  const muestraMenuNiveles = (e) => {
    e.stopPropagation();
    document.querySelector(".selecciona-nivel").classList.toggle("visible");
  }
  
  const ocultaMenuNiveles = () => {
    document.querySelector(".selecciona-nivel").classList.remove("visible");
  }
  
  const clickFueraDeMenu = (e)=> {
    if (e.target.closest(".selecciona-nivel")) {
      return;
    }
    document.querySelector(".selecciona-nivel").classList.remove("visible");
  }
  
  const teclaEscCierraMenu = (e) => {
    console.log(e.key);
    if (e.key === "Escape") {
      ocultaMenuNiveles();
    }
  }
  