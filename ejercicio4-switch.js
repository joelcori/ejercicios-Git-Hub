let navegador = prompt("Ingrese su navegador").toLowerCase();
if (navegador == "edge"){
	alert("¡Tienes Edge!");
}else if (navegador == "chrome" || navegador =="firefox" || navegador == "safari" || navegador == "opera"){
	alert("Esta bien, soportamos estos navegadores tambien");
}else{
	alert ("¡Esperamos que esta pagina se vea bien!")
}