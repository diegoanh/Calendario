function diaHabil(){
	let dia = parseInt(document.getElementById('dd').value);
	let mes = parseInt(document.getElementById('mm').value);
	let anio = document.getElementById('aaaa').value;
	let boton = document.getElementById('respuesta');
	let convFecha=new Date(Date.parse(anio+"-"+mes+"-"+dia));
	let text="";
	switch (convFecha.getDay()) { 
	  case 0://domingo
	  	text="Domingo";
	    break;
	  case 1://lunes
	  	text="Lunes";
	    break;
	  case 2://martes
	  	text="Martes";
	    break;
	  case 3://miercoles
	  	text="Miercoles";
	    break;
	  case 4://jueves
	  	text="Jueves";
	    break;
	  case 5://viernes
	  	text="Viernes";
	    break;
	  case 6://sabado
	  	text="Sabado";
	    break;
	  default:
	    //Declaraciones ejecutadas cuando ninguno de los valores coincide con el valor de la expresión
	    break;
	}
	if(convFecha.getDay() ==1||convFecha.getDay() ==2||convFecha.getDay() ==3||convFecha.getDay() ==4||convFecha.getDay() ==5){
		boton.value=text+", "+"día laborable";
	}else{
		boton.value=text+", "+"fin de semana";
	}
	
}
