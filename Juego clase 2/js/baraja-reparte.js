const barajaTarjetas = () => {
	let resultado;

	resultado = totalTarjetas.sort(() => {
			return 0.5 - Math.random();
	});
	
	console.log(resultado);
}

barajaTarjetas();

const reparteTarjetas = () => {

	let mesa = document.querySelector("#mesa");

	mesa.innerHTML = "";
	
	totalTarjetas.forEach((element) => {
		
			let tarjeta = document.createElement("div");
			
			tarjeta.innerHTML= 
					"<div class='tarjeta' data-valor= "+ element +" >" +
					"<div class='tarjeta__contenido'>" +
					element + 
					"</div>" +
					"</div>"; 

			mesa.appendChild(tarjeta);
		
	});
}