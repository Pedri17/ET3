
function comprobar_form_persona(){
	

	if (comprobar_dni() && comprobar_nombre()&& comprobar_apellido()&&  
		comprobar_direccion()&& comprobar_telefono()&& comprobar_email()&& comprobar_foto()){
		return true;
	}
	else{
		return false;
	}
}
function comprobar_form_persona_add(){


	if (comprobar_dni() && comprobar_nombre()&& comprobar_apellido()&&  
		comprobar_direccion()&& comprobar_telefono()&& comprobar_email()&& comprobar_foto()){
		return true;
	}
	else{
		return false;
	}
}

function comprobar_form_persona_search(){


	if (comprobar_dni_search() && comprobar_nombre_search()&& comprobar_apellido_search()&&
		comprobar_direccion_search()&& comprobar_telefono_search()&& comprobar_email_search()&& comprobar_foto_search()){
		return true;
	}
	else{
		return false;
	}
}


function comprobar_dni(){
	
	if (!size_minimo('id_dni',9)){
	    mensajeKO('id_dni', 'dni_corto_ko','id_caja_error_dni','id_texterror_dni');
		return false;
	}
	if (!size_maximo('id_dni',9)){
		mensajeKO('id_dni', 'dni_largo_ko','id_caja_error_dni','id_texterror_dni');
		return false;
	}
	if (!comprobar_dniNumOk('id_dni')){
		mensajeKO('id_dni', 'dni_8numIniciales_ko','id_caja_error_dni','id_texterror_dni');
		return false;
	}
	if (!comprobar_dniLetraFinalOK('id_dni')){
		mensajeKO('id_dni', 'dni_letrafinal_ko','id_caja_error_dni','id_texterror_dni');
		return false;
	}
	if (!comprobar_dniFormatoOk('id_dni')){
		mensajeKO('id_dni', 'dni_formato_ko','id_caja_error_dni','id_texterror_dni');
		return false;
	}

	mensajeOK('id_dni','id_caja_error_dni');
	return true;

}


function comprobar_dni_search(){
	if (!size_maximo('id_dni',9)){
		mensajeKO('id_dni', 'dni_largo_ko','id_caja_error_dni','id_texterror_dni');
		return false;
	}
	if (!letrassinacentoynumeros('id_dni')){
		mensajeKO('id_dni', 'dni_largo_ko','id_caja_error_dni','id_texterror_dni');
		return false;
	}
	dni = document.getElementById('id_dni').value;
	if (dni.length==9 && !comprobar_dniFormatoOk('id_dni')){
		mensajeKO('id_dni', 'dni_carcteres_ko','id_caja_error_dni','id_texterror_dni');
		return false;
	}
	if (!comprobar_dniSoloUnaLetraOk_search('id_dni')){
		mensajeKO('id_dni', 'dni_solo1letra_ko','id_caja_error_dni','id_texterror_dni');
		return false;
	}
    
    if (!comprobar_dniLetraDespuesDelNumeroOK_search('id_dni')){
		mensajeKO('id_dni', 'dni_letraAlFinal_ko','id_caja_error_dni','id_texterror_dni');
		return false;
	}
    mensajeOK('id_dni','id_caja_error_dni');
	return true;
	
}

function comprobar_nombre(){

	if (!size_minimo('id_nombre_persona',3)){
		mensajeKO('id_nombre_persona', 'nombre_corto_ko','id_caja_error_nombre','id_texterror_nombre');
		return false;
	}
	if (!size_maximo('id_nombre_persona',45)){
		mensajeKO('id_nombre_persona', 'nombre_largo_ko','id_caja_error_nombre','id_texterror_nombre');
		return false;
	}
	if (!letrasacentoguionespacio('id_nombre_persona')){
		mensajeKO('id_nombre_persona', 'nombre_formato_ko','id_caja_error_nombre','id_texterror_nombre');
		return false;
	}

	mensajeOK('id_nombre_persona','id_caja_error_nombre');
	return true;

}


function comprobar_nombre_search(){
	if (!size_maximo('id_nombre_persona',45)){
		mensajeKO('id_nombre_persona', 'nombre_corto_ko','id_caja_error_nombre','id_texterror_nombre');
		return false;
	}

	if (!letrasacentoguionespacio('id_nombre_persona')){
		mensajeKO('id_nombre_persona', 'nombre_formato_ko','id_caja_error_nombre','id_texterror_nombre');
		return false;
	}

	mensajeOK('id_nombre_persona','id_caja_error_nombre');
	return true;
}


function comprobar_apellido(){

	if (!size_minimo('id_apellidos_persona',5)){
		mensajeKO('id_apellidos_persona', 'apellido_corto_ko','id_caja_error_apellido','id_texterror_apellido');
		return false;
	}
	if (!size_maximo('id_apellidos_persona',100)){
		mensajeKO('id_apellidos_persona', 'apellido_largo_ko','id_caja_error_apellido','id_texterror_apellido');
		return false;
	}
	if (!letrasacentoguionespacio('id_apellidos_persona')){
		mensajeKO('id_apellidos_persona', 'apellido_formato_ko','id_caja_error_apellido','id_texterror_apellido');
		return false;
	}

	mensajeOK('id_apellidos_persona','id_caja_error_apellido');
	return true;

}


function comprobar_apellido_search(){
	if (!size_maximo('id_apellidos_persona',45)){
		mensajeKO('id_apellidos_persona', 'apellido_largo_ko','id_caja_error_apellido','id_texterror_apellido');
		return false;
	}

	if (!letrasacentoguionespacio('id_apellidos_persona')){
		mensajeKO('id_apellidos_persona', 'apellido_formato_ko','id_caja_error_apellido','id_texterror_apellido');
		return false;
	}

	mensajeOK('id_apellidos_persona','id_caja_error_apellido');
	return true;
}


function comprobar_fechanac(campo) {
      var RegExPattern = /^\d{2}\/\d{2}\/\d{4}$/;
      if ((campo.match(RegExPattern)) && (campo!='')) {
           mensajeOK('id_fechanac','id_caja_error_fechanac');
	       return true;
      } else {
            mensajeKO('id_fechanac', 'id_fechanac_ko','id_caja_error_fechanac','id_texterror_fechanac');
			return false;
      }
}
function comprobar_direccion(){

	if (!size_minimo('id_direccion_persona',10)){
		mensajeKO('id_direccion_persona', 'direccion_corto_ko','id_caja_error_direccion','id_texterror_direccion');
		return false;
	}
	if (!size_maximo('id_direccion_persona',200)){
		mensajeKO('id_direccion_persona', 'direccion_largo_ko','id_caja_error_direccion','id_texterror_direccion');
		return false;
	}
	if (!letrasacentoguionespacionumerosymas('id_direccion_persona')){
		mensajeKO('id_direccion_persona', 'direccion_formato_ko','id_caja_error_direccion','id_texterror_direccion');
		return false;
	}


	mensajeOK('id_direccion_persona','id_caja_error_direccion');
	return true;

}

function comprobar_direccion_search(){

	if (!size_maximo('id_direccion_persona',10)){
		mensajeKO('id_direccion_persona', 'direccion_corto_ko','id_caja_error_direccion','id_texterror_direccion');
		return false;
	}
	if (!size_maximo('id_direccion_persona',200)){
		mensajeKO('id_direccion_persona', 'direccion_largo_ko','id_caja_error_direccion','id_texterror_direccion');
		return false;
	}
	if (!letrasacentoguionespacionumerosymas('id_direccion_persona')){
		mensajeKO('id_direccion_persona', 'direccion_formato_ko','id_caja_error_direccion','id_texterror_direccion');
		return false;
	}
	

	mensajeOK('id_direccion_persona','id_caja_error_direccion');
	return true;

}

function comprobar_telefono(){

	tlf = document.getElementById('id_telefono_persona').value;

	if (!tlf.length==9){
		mensajeKO('id_telefono_persona', 'telefono_tamano_ko','id_caja_error_telefono','id_texterror_telefono');
		return false;
	}
	if (!size_maximo('id_telefono_persona',9)){
		mensajeKO('id_telefono_persona', 'telefono_largo_ko','id_caja_error_telefono','id_texterror_telefono');
		return false;
	}
	if (!soloNumerosEspana('id_telefono_persona')){
		mensajeKO('id_telefono_persona', 'telefono_formato_ko','id_caja_error_telefono','id_texterror_telefono');
		return false;
	}


	mensajeOK('id_telefono_persona','id_caja_error_telefono');
	return true;

}

function comprobar_telefono_search(){

	
	if (!size_maximo('id_telefono_persona',9)){
		mensajeKO('id_telefono_persona', 'telefono_largo_ko','id_caja_error_telefono','id_texterror_telefono');
		return false;
	}
	if (!soloNumeros('id_telefono_persona')){
		mensajeKO('id_telefono_persona', 'telefono_formato_ko','id_caja_error_telefono','id_texterror_telefono');
		return false;
	}
	

	mensajeOK('id_telefono_persona','id_caja_error_telefono');
	return true;

}

 function validarEmail(idElemento){



	 elemento = document.getElementById(idElemento).value;
   
       return /^\w+([.-_+]?\w+)*@\w+([.-]?\w+)*(\.\w{2,10})+$/.test(elemento);
 
 }

function comprobar_email(){

	if (!size_minimo('id_email_persona',8)){
		mensajeKO('id_email_persona', 'email_corto_ko','id_caja_error_email','id_texterror_email');
		return false;
	}
	if (!size_maximo('id_email_persona',45)){
		mensajeKO('id_email_persona', 'email_largo_ko','id_caja_error_email','id_texterror_email');
		return false;
	}
	if (!validarEmail('id_email_persona')){
		mensajeKO('id_email_persona', 'email_formato_ko','id_caja_error_email','id_texterror_email');
		return false;
	}


	mensajeOK('id_email_persona','id_caja_error_email');
	return true;

}

function comprobar_email_search(){

	
	if (!size_maximo('id_email_persona',45)){
		mensajeKO('id_email_persona', 'email_largo_ko','id_caja_error_email','id_texterror_email');
		return false;
	}
	if (!letrassinacentoynumeros('id_email_persona')){
		mensajeKO('id_email_persona', 'email_formato_ko','id_caja_error_email','id_texterror_email');
		return false;
	}
	

	mensajeOK('id_email_persona','id_caja_error_email');
	return true;

}

function comprobar_foto(){

	if (!size_minimo('id_foto_persona',6)){
		mensajeKO('id_foto_persona', 'foto_corto_ko','id_caja_error_foto','id_texterror_foto');
		return false;
	}
	if (!size_maximo('id_foto_persona',40)){
		mensajeKO('id_foto_persona', 'foto_largo_ko','id_caja_error_foto','id_texterror_foto');
		return false;
	}
	if (!letrassinacentoextension('id_foto_persona')){
		mensajeKO('id_foto_persona', 'foto_formato_ko','id_caja_error_foto','id_texterror_foto');
		return false;
	}


	mensajeOK('id_foto_persona','id_caja_error_foto');
	return true;

}

function comprobar_foto_search(){

	
	if (!size_maximo('id_foto_persona',40)){
		mensajeKO('id_foto_persona', 'foto_largo_ko','id_caja_error_foto','id_texterror_foto');
		return false;
	}
	if (!letrassinacento('id_foto_persona')){
		mensajeKO('id_foto_persona', 'foto_formato_ko','id_caja_error_foto','id_texterror_foto');
		return false;
	}
	

	mensajeOK('id_foto_persona','id_caja_error_foto');
	return true;

}






// add_usuario()
// funcion a ser ejecutada cuando se completa el formulario al pulsar sobre la imagen
// llama a la funcion de petición pq no es necesario comprobación de formularios.
// en esta funcion de petición se provoca el submit para que se ejecute la accion
function add_persona(){

	if (comprobar_form_persona_add()){
		 ADDpersonajax();
	}

}

// edit_usuario()
// funcion a ser ejecutada cuando se completa el formulario al pulsar sobre la imagen
// llama a la funcion de petición pq no es necesario comprobación de formularios.
// en esta funcion de petición se provoca el submit para que se ejecute la accion
function edit_persona(){

	if (comprobar_form_persona_add()){
		EDITpersonaajax();
	}

}

// delete_usuario()
// funcion a ser ejecutada cuando se completa el formulario al pulsar sobre la imagen
// llama a la funcion de petición pq no es necesario comprobación de formularios.
// en esta funcion de petición se provoca el submit para que se ejecute la accion
function delete_persona(){

	peticionDELETEpersonaBack();

}

// search_usuario()
// funcion a ser ejecutada cuando se completa el formulario
// comprueba los formatos de atributo del formulario y devuelve true para que se invoque el action
function search_persona(){

	if (comprobar_form_persona_search()){
		SEARCHpersonaAjax();
	}
}

// resetearformusuario()
// esta función se usa para inicializar el formulario y siempre este de la misma manera antes de entrar en las funciones que construyen los formularios de acciones
// aqui solo eliminamos el select. Podriamos tambien hacer un remove() en vez de desasignarlo
function resetearformpersona(){

	

	// quitar el readonly de los atributos
	$("#id_dni").attr('readonly',false);
	$("#id_dni").val('');
	$("#id_dni").on('blur',false);
	$("#id_nombre_persona").attr('readonly',false);
	$("#id_nombre_persona").val('');
	$("#id_nombre_persona").on('blur',false);
	$("#id_apellidos_persona").attr('readonly',false);
	$("#id_apellidos_persona").val('');
	$("#id_apellidos_persona").on('blur',false);
	$("#id_fechaNacimiento_persona").attr('readonly',false);
	$("#id_fechaNacimiento_persona").val('');
	$("#id_fechaNacimiento_persona").on('blur',false);
	$("#id_direccion_persona").attr('readonly',false);
	$("#id_direccion_persona").val('');
	$("#id_direccion_persona").on('blur',false);
	$("#id_telefono_persona").attr('readonly',false);
	$("#id_telefono_persona").val('');
	$("#id_telefono_persona").on('blur',false);
	$("#id_email_persona").attr('readonly',false);
	$("#id_email_persona").val('');
	$("#id_email_persona").on('blur',false);
	$("#id_foto_persona").attr('readonly',false);
	$("#id_foto_persona").val('');
	$("#id_foto_persona").on('blur',false);
	


	// eliminar el boton de submit de formulario
	$("#id_boton_buscar_persona").remove();

	// eliminar la imagen para terminar el formulario
	$("#id_imagen_enviar_form").remove();

	// eliminar el button para submit el formulario de search
	$("#id_accionsubmit").remove();

	// se pone visible el formulario
	$("#id_caja_formulario_persona").attr('style', 'display: none');

	setLang();

}
//Función ajax con promesas
function personaADDAjaxPromesa(){

	
	insertacampo('id_form_persona','controlador', 'persona');
	insertacampo('id_form_persona','action', 'ADD');
	
	return new Promise(function(resolve, reject) {
		$.ajax({
			method: "POST",
			url: urlPeticionesAjax,
			data: $("#id_form_persona").serialize(),
		}).done(res => {
			if (res.ok != true) {
				reject(res);
			}
			else{
			
			resolve(res.code);
			}
		})
		.fail( function( jqXHR ) {
		mensajeHTTPFAIL(jqXHR.status);
		});
	});
}

async function ADDpersonajax() {
	
	var idioma = getCookie('lang');

	await personaADDAjaxPromesa()
		.then((res) => {
			
			if (res.code = 'SQL_OK'){
				res.code = 'add_persona_OK';
			}
			devolverpersonaajax();
			mensajeactionOK(res.code);
		})
		.catch((res) => {
			mensajeFAIL(res.code);
		});

		setLang();
		resetearformpersona();
		
}

// crearformADDusuario() creado con javascript
// Este formulario se crea usando la estructura básica del formulario html en gestionusuario.html  
// Se crea una input image para actuar como un input submit y que el formulario 
// llame a la funcion add_usuario al pulsarla y esta llama a peticionADDusuarioBack que provoca el submit del formulario
// y se ejecuta el action

function crearformADDpersona(){

	// resetear el formulario
	resetearformpersona();

	// se rellena el action del formulario
	document.getElementById('id_form_persona').action = 'javascript:ADDpersonajax()';
	document.getElementById('id_form_persona').onblur = add_persona;
	
	// se coloca el onblur del dni y se pone a vacio el valor (o podriamos hacerlo en el resetearformusuario())
	document.getElementById('id_dni').onblur = comprobar_dni;
	document.getElementById('id_dni').value = '';

	// se coloca el onblur del nombre y se pone a vacio el valor (o podriamos hacerlo en el resetearformusuario())
	document.getElementById('id_nombre_persona').onblur = comprobar_nombre;
	document.getElementById('id_nombre_persona').value = '';

	document.getElementById('id_apellidos_persona').onblur = comprobar_apellido;
	document.getElementById('id_apellidos_persona').value = '';

	//document.getElementById('id_fechanac').onblur = comprobar_fechanac;
	document.getElementById('id_fechaNacimiento_persona').value = '';

	document.getElementById('id_direccion_persona').onblur = comprobar_direccion;
	document.getElementById('id_direccion_persona').value = '';

	document.getElementById('id_telefono_persona').onblur = comprobar_telefono;
	document.getElementById('id_telefono_persona').value = '';

	document.getElementById('id_email_persona').onblur = comprobar_email;
	document.getElementById('id_email_persona').value = '';

	document.getElementById('id_foto_persona').onblur = comprobar_foto;
	document.getElementById('id_foto_persona').value = '';

	

	// se coloca una imagen para la accion de añadir
	imagenenviarform = document.createElement("img");
	imagenenviarform.src="./images/add4.png";
	imagenenviarform.id = "id_imagen_enviar_form";
	imagenenviarform.width = '80';
	imagenenviarform.height = '80';
	imagenenviarform.className='titulo_add';
	document.body.appendChild(imagenenviarform);
	// se coloca una función onclick que hará las comprobaciones y el submit
	document.getElementById('id_imagen_enviar_form').onclick = add_persona;

	// para actualizar idioma despues de incluir la imagen
	setLang();

	// se muestra el formulario
	document.getElementById('id_caja_formulario_persona').style.display = 'block';
}

// crearformEDITusuario() creado con jquery
// Este formulario se crea usando la estructura básica del formulario html en gestionusuario.html  
// Se crea una input image para actuar como un input submit y que el formulario 
// llame a la funcion edit_usuario al pulsarla y esta llama a peticionEDITusuarioBack que provoca el submit del formulario
// y se ejecuta el action

function crearformEDITpersona(dni, nombre, apellido,fechanac,direccion,telefono,email,foto){

	// resetear al formulario
	resetearformpersona();
	
	// se crea el action del formulario 
	$("#id_form_persona").attr('action','javascript:EDITpersonaajax()');

	// se pone no editable el dni al ser clave primaria y no querer que se modifique por el usuario
	// se pone la funcion de comprobación aunque no sea necesaria y se pone el valor por defecto que se proporciona como parametro
	$("#id_dni").attr('readonly',true);
	$("#id_dni").blur(comprobar_dni);
	$("#id_dni").val(dni);

	$("#id_nombre_persona").on('blur',comprobar_nombre);
	$("#id_nombre_persona").val(nombre);

      
	$("#id_apellidos_persona").on('blur',comprobar_apellido);
	$("#id_apellidos_persona").val(apellido);

	
	$("#id_fechaNacimiento_persona").val(fechanac);


	$("#id_direccion_persona").on('blur',comprobar_direccion);
	$("#id_direccion_persona").val(direccion);
	
	$("#id_telefono_persona").on('blur',comprobar_telefono);
	$("#id_telefono_persona").val(telefono);

	$("#id_email_persona").on('blur',comprobar_email);
	$("#id_email_persona").val(email);
	
	

	$("#id_foto_persona").on('blur',comprobar_foto);
	$("#id_foto_persona").val(foto);


	imagenenviarform = document.createElement("img");
	imagenenviarform.src="./images/edit4.png";
	imagenenviarform.id = "id_imagen_enviar_form";
	imagenenviarform.width = '80';
	imagenenviarform.height = '80';
	imagenenviarform.className = 'titulo_edit';
	document.body.appendChild(imagenenviarform);
	// se coloca una función onclick que hará las comprobaciones y el submit
	$("#id_imagen_enviar_form").on('click', edit_persona);
	
	setLang();	
	// se muestra el formulario
	$("#id_caja_formulario_persona").attr('style', 'display: block');
}



function personaEDITAjaxPromesa(){

	insertacampo('id_form_persona','controlador', 'persona');
	insertacampo('id_form_persona','action', 'EDIT');
	
	return new Promise(function(resolve, reject) {
		$.ajax({
			method: "POST",
			url: urlPeticionesAjax,
			data: $("#id_form_persona").serialize(),
		}).done(res => {
			if (res.ok != true) {
				reject(res);
			}
			else{
				resolve(res);
			}
		})
		.fail( function( jqXHR ) {
			mensajeHTTPFAIL(jqXHR.status);
		});
	});
}

async function EDITpersonaajax() {
	
	var idioma = getCookie('lang');

	await personaEDITAjaxPromesa()
		.then((res) => {
			
			if (res.code == 'SQL_OK'){
				res.code = 'edit_persona_OK';
			};
			devolverpersonaajax();
			mensajeactionOK(res.code);
			//
			//window.location.href = "gestionusuario.html";
		})
		.catch((res) => {
			mensajeFAIL(res.code);
		});

		setLang();
		//document.getElementById('id_form_usuario').reset();
		resetearformpersona();
		document.getElementById('controlador')
		//document.getElementById('id_imagen_enviar_form').remove(); 
}

// crearformDELETEusuario() creado con jquery
// Este formulario se crea usando la estructura básica del formulario html en gestionusuario.html  
// Se crea una input image para actuar como un input submit y que el formulario 
// llame a la funcion delete_usuario al pulsarla y esta llama a peticionDELETEusuarioBack que provoca el submit del formulario
// y se ejecuta el action

function crearformDELETEpersona(dni, nombre, apellido,fechanac,direccion,telefono,email,foto){

	resetearformpersona();
	
	$("#id_form_persona").attr('action','javascript:DELETEpersonaajax()');
	
	$("#id_dni").attr('readonly','true')
	$("#id_dni").val(dni);

	$("#id_nombre_persona").attr('readonly','true')
	$("#id_nombre_persona").val(nombre);

	$("#id_apellidos_persona").attr('readonly','true')
	$("#id_apellidos_persona").val(apellido);

	$("#id_fechaNacimiento_persona").attr('readonly','true')
	$("#id_fechaNacimiento_persona").val(fechanac);

	$("#id_direccion_persona").attr('readonly','true')
	$("#id_direccion_persona").val(direccion);

	$("#id_telefono_persona").attr('readonly','true')
	$("#id_telefono_persona").val(telefono);
	
	$("#id_email_persona").attr('readonly','true')
	$("#id_email_persona").val(email);

	$("#id_foto_persona").attr('readonly','true')
	$("#id_foto_persona").val(foto);

	accionsubmit = document.createElement("button");
	accionsubmit.type = 'submit';
	accionsubmit.id = 'id_accionsubmit';
	$("#id_form_persona").append(accionsubmit);
	
	botonsubmit = document.createElement("img");
	botonsubmit.id = "id_boton_buscar_persona";
	botonsubmit.className = 'titulo_search';
	botonsubmit.src= "./images/delete4.png";
	botonsubmit.width = '80';
	botonsubmit.height = '80';
	$("#id_accionsubmit").append(botonsubmit);	

	setLang(); 

	$("#id_caja_formulario_persona").attr('style', 'display: block');
}


function personaDELETEAjaxPromesa(){

	insertacampo('id_form_persona','controlador', 'persona');
	insertacampo('id_form_persona','action', 'DELETE');
	
	return new Promise(function(resolve, reject) {
		$.ajax({
			method: "POST",
			url: urlPeticionesAjax,
			data: $("#id_form_persona").serialize(),
		}).done(res => {
			if (res.ok != true) {
				reject(res);
			}
			else{
				resolve(res);
			}
		})
		.fail( function( jqXHR ) {
			mensajeHTTPFAIL(jqXHR.status);
		});
	});
}

async function DELETEpersonaajax() {
	
	var idioma = getCookie('lang');

	await personaDELETEAjaxPromesa()
		.then((res) => {
			
			if (res.code == 'SQL_OK'){
				res.code = 'delete_persona_OK';
			}
			mensajeactionOK(res.code);
			devolverpersonaajax();
		})
		.catch((res) => {
			mensajeFAIL(res.code);
		});

		setLang();
	
		resetearformpersona();
	
}
// crearformSEARCHusuario() creado con jquery (except el option que utiliza javascript)
// Este formulario se crea usando la estructura básica del formulario html en gestionusuario.html
// Se crea un input image para actuar como un input submit y que el formulario haga el submit al pulsarlo
// Cuando esto pasa se llama a la funcion search_usuario en el onsubmit y se hace la comprobación de atributos
// cuando esta función devuelve true se ejecuta el action

function crearformSEARCHpersona(){

	// reseteo el formulario
	resetearformpersona();
	
	// creo la accion para el formulario y el onsubmit
	$("#id_form_persona").attr('action','javascript:SEARCHpersonaAjax()');
	$("#id_form_persona").on('submit', search_persona);
	
	// pongo el campo de dni editable y le asocio la funcion para el onblur
	$("#id_dni").attr('readonly', false);
	$("#id_dni").blur(comprobar_dni_search);

	// pongo el campo de usuario editable y le asocio la funcion para el onblur
	$("#id_nombre_persona").attr('readonly',false)
	$("#id_nombre_persona").blur(comprobar_nombre_search);

	$("#id_apellidos_persona").attr('readonly',false)
	$("#id_apellidos_persona").blur(comprobar_apellido_search);

	$("#id_fechaNacimiento_persona").attr('readonly',false)
	//$("#id_fechanac").blur(comprobar_fechanac);

	$("#id_direccion_persona").attr('readonly',false)
	$("#id_direccion_persona").blur(comprobar_direccion_search);

	$("#id_telefono_persona").attr('readonly',false)
	$("#id_telefono_persona").blur(comprobar_telefono_search);

	$("#id_email_persona").attr('readonly',false)
	$("#id_email_persona").blur(comprobar_email_search);

	$("#id_foto_persona").attr('readonly',false)
	$("#id_foto_persona").blur(comprobar_foto_search);


	
	botonsubmit = document.createElement("img");
	botonsubmit.id = "id_boton_buscar_persona";
	botonsubmit.className = 'titulo_search';
	botonsubmit.src= "./images/search4.png";
	botonsubmit.width = '80';
	botonsubmit.height = '80';
	document.body.appendChild(botonsubmit);

	// coloco la imagen para submit en el formulario
	$("#id_boton_buscar_persona").on('click', search_persona);

	setLang(); 

	// se pone visible el formulario
	$("#id_caja_formulario_persona").attr('style', 'display: block');
}


//Función ajax con promesas
function personaSEARCHAjaxPromesa(){

	insertacampo('id_form_persona','controlador', 'persona');
	insertacampo('id_form_persona','action', 'SEARCH');
	
	return new Promise(function(resolve, reject) {
		$.ajax({
			method: "POST",
			url: urlPeticionesAjax,
			data: $("#id_form_persona").serialize(),
		}).done(res => {
			if (res.ok != true) {
				reject(res);
			}
			else{
				resolve(res);
			}
		})
		.fail( function( jqXHR ) {
			mensajeHTTPFAIL(jqXHR.status);
		});
	});
}

async function SEARCHpersonaAjax() {
	
	var idioma = getCookie('lang');

	await personaSEARCHAjaxPromesa()
		.then((res) => {
			getListPersona(res.resource);
		})
		.catch((res) => {
			mensajeFAIL(res.code);
		});

		setLang();

		resetearformpersona();

}

function crearformSHOWCURRENTpersona(dni, nombre, apellido,fechanac,direccion,telefono,email,foto){
resetearformpersona();
	
	
	$("#id_dni").attr('readonly','true')
	$("#id_dni").val(dni);

	$("#id_nombre_persona").attr('readonly','true')
	$("#id_nombre_persona").val(nombre);

	$("#id_apellido_persona").attr('readonly','true')
	$("#id_apellido_persona").val(apellido);

	$("#id_fechaNacimiento_persona").attr('readonly','true')
	$("#id_fechaNacimiento_persona").val(fechanac);

	$("#id_direccion_persona").attr('readonly','true')
	$("#id_direccion_persona").val(direccion);

	$("#id_telefono_persona").attr('readonly','true')
	$("#id_telefono_persona").val(telefono);
	
	$("#id_email_persona").attr('readonly','true')
	$("#id_email_persona").val(email);

	$("#id_foto_persona").attr('readonly','true')
	$("#id_foto_persona").val(foto);


    
	
	
     accionsubmit = document.createElement("button");
	accionsubmit.type = 'submit';
	accionsubmit.id = 'id_accionsubmit';
	$("#id_form_persona").append(accionsubmit);
	
	// se coloca una imagen para button anterior en el formulario
	botonsubmit = document.createElement("img");
	botonsubmit.id = "id_boton_buscar_persona";
	botonsubmit.className = 'titulo_search';
	botonsubmit.src= "./images/detail4.png";
	botonsubmit.width = '80';
	botonsubmit.height = '80';
	$("#id_accionsubmit").append(botonsubmit);	

	setLang(); 

	$("#id_caja_formulario_persona").attr('style', 'display: block');
}




//Función ajax con promesas
function devolverpersonaAjaxPromesa(){

	crearformoculto('form_generico','');
	insertacampo('form_generico','controlador', 'persona');
	insertacampo('form_generico','action', 'SEARCH');
	
	return new Promise(function(resolve, reject) {
		$.ajax({
			method: "POST",
			url: urlPeticionesAjax,
			data: $("#form_generico").serialize(),
		}).done(res => {
			if (res.ok != true) {
				reject(res);
			}
			else{
				resolve(res);
			}
		})
		.fail( function( jqXHR ) {
			mensajeHTTPFAIL(jqXHR.status);
		});
	});
}

async function devolverpersonaajax() {
	
	var idioma = getCookie('lang');

	await devolverpersonaAjaxPromesa()
		.then((res) => {
			getListPersona(res.resource);
		
		})
		.catch((res) => {
			mensajeFAIL(res.code);
        	setLang(idioma);
		});

		document.getElementById('form_generico').remove();
}

function getListPersona(listapersona){

	
	
	$("#id_datospersonas").html('');

	for (let persona of listapersona){

		
		datosfila = "'"+persona.dni+"',"
		+"'"+persona.nombre_persona+"',"
		+"'"+persona.apellidos_persona+"',"
		+"'"+persona.fechaNacimiento_persona+"',"
		+"'"+persona.direccion_persona+"',"
		+"'"+persona.telefono_persona+"',"
		+"'"+persona.email_persona+"',"
		+"'"+persona.foto_persona
		+"'";

		lineatabla = '<tr><td>'+persona['dni']+'</td><td>'+persona['nombre_persona']+'</td><td>'+persona['apellidos_persona']+'</td><td>'+persona['fechaNacimiento_persona']+'</td><td>'+persona['direccion_persona']+'</td><td>'+persona['telefono_persona']+'</td><td>'+persona['email_persona']+'</td><td>'+persona['foto_persona']+"</td>";
		botonedit = '<td><img class="titulo_edit" src="./images/edit4.png" onclick="crearformEDITpersona('+datosfila+');" width="50" height="50"></td>';
		botondelete = '<td><img class="titulo_delete" src="./images/delete4.png" width="50" height="50" onclick="crearformDELETEpersona('+datosfila+');"></td>';
		botonshowcurrent = '<td><img class="titulo_showcurrent" src="./images/detail4.png" width="50" height="50" onclick="crearformSHOWCURRENTpersona('+datosfila+')";></td>';

		lineatabla += botonedit+botondelete+botonshowcurrent+"</tr>";

		$("#id_datospersonas").append(lineatabla);
	}

}

