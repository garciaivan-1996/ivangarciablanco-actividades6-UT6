let color = String(prompt("Introduce el color con el que quieres que se muestre el texto rojo verde o azul"));
let cadena = String(prompt("Introduce tu nombre"));
let numero = String(prompt("Introduce un numero de telefono"));
let correo = String(prompt("Introduce un Email"));
let numero2=0;
let freno = 1;
let freno2 = 1;
let freno3 = 1;


function cambiaC(color){
	

	if(color == "verde"){
		var cambia = document.querySelector(".tdi");
		cambia.className = ".verde";
	
	} else {
		if(color == "rojo"){
			var cambiacolor = document.querySelector(".cambia");
			var selectorAt = cambiacolor.getAttribute("color");
			cambiacolor.className = 'red';
		}else{
			if(color == "azul"){
				var cambia = document.querySelector(".tri");
				cambia.setAttribute("color", "blue")
			}else{
				var cambia = document.querySelector(".tri");
				cambia.className = "rojo";
			}
		}
	}

}


function nombre(cadena){


	while (freno == 1){
		cadena2 = cadena.slice(0,1);
		if(cadena2.match(/[ABCDEFGHIJKLMNOPQRSTUVWXYZ]/)){
		document.querySelector("#nombre").textContent = cadena;
		freno = 0;
			
		}else{
		
		cadena = String(prompt("Introduce tu nombre valido, debe empezar por mayusculas"));
		
		}		
	}
		
}

function telefono(numero){


	while(freno2 == 1){
	numero2 = numero.length
		if(numero2 == 9){
		document.querySelector("#telefono").textContent = numero;
		freno2 =0;
		}else{
			numero = String(prompt("Introduce un numero de telefono valido"));
		}
	}
}



function email(correo) {
 
	while(freno3 == 1){	
		if (/^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/.test(correo)){
		   document.querySelector("#correo").textContent = correo;
		   freno3 = 0;
		  } else {
		  correo = String(prompt("Introduce un Email valido"));
		  }
	}
}

email(correo);
telefono(numero);
nombre(cadena);
cambiaC(color);


