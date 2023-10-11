reparteTarjetas();
  
document.querySelectorAll(".tarjeta").forEach((element) => {
    element.addEventListener("click", descubrir);
});