const acierto = (lasTarjetas) =>{
	lasTarjetas.forEach((e) => {
		e.classList.add("acertada");
	})
}

const error = (lasTarjetas) =>{
	lasTarjetas.forEach((e) => {
		e.classList.add("error");
	});

	setTimeout(() => {

		lasTarjetas.forEach((e) => {
			e.classList.remove("descubierta");
			e.classList.remove("error");
		});
	}, 1000);
}