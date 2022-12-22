// comprobar_form_usuario_add()
// funcion para validar el submit del formulario usuario para las acciones que no sean search

function comprobar_form_accion_add(){
	
	if (comprobar_id_accion() && comprobar_nombre_accion ()&& comprobar_descrip_accion() ){
		return true;
	}
	else{
		return false;
	}
}

// comprobar_form_usuario_search()
// funcion para validar el submit del formulario de usuario para la accion search
function comprobar_form_accion_search(){
	

	if (comprobar_id_accion_search()&& comprobar_nombre_accion_search()&&comprobar_descrip_accion_search() ){
		return true;
	}
	else{
		return false;
	}
}

// comprobar_usuario()
// funcion de validación de formato de usuario en acciones que no sean search
function comprobar_id_accion(){

	if (!size_minimo('id_id_accion',0)){
		mensajeKO('id_id_accion', 'idaccion_corto_ko');
		return false;
	}
	if (!size_maximo('id_id_accion',6)){
		mensajeKO('id_id_accion', 'idaccion_largo_ko');
		return false;
	}
	if (!soloNumeros('id_id_accion')){
		mensajeKO('id_id_accion', 'idaccion_formato_ko');
		return false;
	}

	mensajeOK('id_id_accion');
	return true;

}

// comprobar_id_accion_search()
// funcion de validacion del formato de id_accion
function comprobar_id_accion_search(){
  	if (!size_maximo('id_id_accion',6)){
		mensajeKO('id_id_accion', 'idaccion_largo_ko');
		return false;
	}
	if (!soloNumeros('id_id_accion')){
		mensajeKO('id_id_accion', 'idaccion_formato_ko');
		return false;
	}

	mensajeOK('id_id_accion');
	return true;	
}

function comprobar_nombre_accion(){

	if (!size_minimo('id_nombre_accion',6)){
		mensajeKO('id_nombre_accion', 'nombreaccion_corto_ko');
		return false;
	}
	if (!size_maximo('id_nombre_accion',48)){
		mensajeKO('id_nombre_accion', 'nombreaccion_largo_ko');
		return false;
	}
	if (!letrassinacento('id_nombre_accion')){
		mensajeKO('id_nombre_accion', 'nombreaccion_formato_ko');
		return false;
	}

	mensajeOK('id_nombre_accion');
	return true;

}
function comprobar_nombre_accion_search(){

	
	if (!size_maximo('id_nombre_accion',48)){
		mensajeKO('id_nombre_accion', 'nombreaccion_largo_ko');
		return false;
	}
	if (!letrassinacento('id_nombre_accion')){
		mensajeKO('id_nombre_accion', 'nombreaccion_formato_ko');
		return false;
	}

	mensajeOK('id_nombre_accion');
	return true;

}
function comprobar_descrip_accion(){

	if (!size_minimo('id_descrip_accion',20)){
		mensajeKO('id_descrip_accion', 'descripaccion_corto_ko');
		return false;
	}
	if (!size_maximo('id_descrip_accion',200)){
		mensajeKO('id_descrip_accion', 'descripaccion_largo_ko');
		return false;
	}
	if (!cualquierExceptoRol('id_descrip_accion')){
		mensajeKO('id_descrip_accion', 'descripaccion_formato_ko');
		return false;
	}

	mensajeOK('id_descrip_accion');
	return true;

}

function comprobar_descrip_accion_search(){

	
	if (!size_maximo('id_descrip_accion',200)){
		mensajeKO('id_descrip_accion', 'descripaccion_largo_ko');
		return false;
	}
	if (!cualquierExceptoRol('id_descrip_accion')){
		mensajeKO('id_descrip_accion', 'descripaccion_formato_ko');
		return false;
	}

	mensajeOK('id_descrip_accion');
	return true;

}






// peticionADDusuarioBack()
// funcion que utilizariamos para hacer una solicitud a back para añadir un usuario
function peticionADDaccionBack(){

	alert('peticion a back add');
	document.getElementById('id_form_accion').submit();
	
}

// peticionEDITusuarioBack()
// funcion que utilizariamos para hacer una solicitud a back para editar un usuario
function peticionEDITaccionBack(){

	alert('peticion a back edit');
	document.getElementById('id_form_accion').submit();
	
}

// peticionDELETEusuarioBack()
// funcion que utilizariamos para hacer una solicitud a back para borrar un usuario
function peticionDELETEaccionBack(){

	alert('peticion a back delete');
	document.getElementById('id_form_accion').submit();
	
}




// add_accion()
// funcion a ser ejecutada cuando se completa el formulario al pulsar sobre la imagen
// llama a la funcion de petición pq no es necesario comprobación de formularios.
// en esta funcion de petición se provoca el submit para que se ejecute la accion
function add_accion(){

	if (comprobar_form_accion_add()){
	ADDaccionajax();
	}

}

// edit_accion()
// funcion a ser ejecutada cuando se completa el formulario al pulsar sobre la imagen
// llama a la funcion de petición pq no es necesario comprobación de formularios.
// en esta funcion de petición se provoca el submit para que se ejecute la accion
function edit_accion(){

	if (comprobar_form_accion_add()){
			EDITaccionajax();
	}

}

// delete_accion()
// funcion a ser ejecutada cuando se completa el formulario al pulsar sobre la imagen
// llama a la funcion de petición pq no es necesario comprobación de formularios.
// en esta funcion de petición se provoca el submit para que se ejecute la accion
function delete_accion(){

		return true;

}

// search_accion()
// funcion a ser ejecutada cuando se completa el formulario
// comprueba los formatos de atributo del formulario y devuelve true para que se invoque el action
function search_accion(){

	if (comprobar_form_accion_search()){
		SEARCHaccionAjax();
	}
}

// resetearformusuario()
// esta función se usa para inicializar el formulario y siempre este de la misma manera antes de entrar en las funciones que construyen los formularios de acciones
// aqui solo eliminamos el select. Podriamos tambien hacer un remove() en vez de desasignarlo
function resetearformaccion(){


	

	// quitar el readonly de los atributos
	$("#id_id_accion").attr('readonly',false);
	$("#id_id_accion").val('');
	$("#id_nombre_accion").attr('readonly',false);
	$("#id_nombre_accion").val('');
	$("#id_descrip_accion").attr('readonly',false);
	$("#id_descrip_accion").val('');


$("#id_boton_buscar_accion").remove();

	// eliminar la imagen para terminar el formulario
	$("#id_imagen_enviar_form").remove();

	// eliminar el button para submit el formulario de search
	$("#id_accionsubmit").remove();

	// se pone visible el formulario
	$("#id_caja_formulario_accion").attr('style', 'display: none');

	setLang();

}
function accionADDAjaxPromesa(){

	insertacampo('id_form_accion','controlador', 'accion');
	insertacampo('id_form_accion','action', 'ADD');
	
	return new Promise(function(resolve, reject) {
		$.ajax({
			method: "POST",
			url: urlPeticionesAjax,
			data: $("#id_form_accion").serialize(),
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

async function ADDaccionajax() {
	
	var idioma = getCookie('lang');

	await accionADDAjaxPromesa()
		.then((res) => {
			
			if (res.code == 'SQL_OK'){
				res.code = 'add_accion_OK';
			};
			devolveraccionajax();
			mensajeactionOK(res.code);
			//
			//window.location.href = "gestionusuario.html";
		})
		.catch((res) => {
			mensajeFAIL(res.code);
		});

		setLang();

		resetearformaccion();
 
}

// crearformADDusuario() creado con javascript
// Este formulario se crea usando la estructura básica del formulario html en gestionusuario.html  
// Se crea una input image para actuar como un input submit y que el formulario 
// llame a la funcion add_usuario al pulsarla y esta llama a peticionADDusuarioBack que provoca el submit del formulario
// y se ejecuta el action

function crearformADDaccion(){

	// resetear el formulario
	resetearformaccion();

	// se rellena el action del formulario
	document.getElementById('id_form_accion').action='javascript:ADDaccionajax()';
	document.getElementById('id_form_accion').onblur = add_accion;
	// se coloca el onblur del dni y se pone a vacio el valor (o podriamos hacerlo en el resetearformusuario())
	document.getElementById('id_id_accion').onblur = comprobar_id_accion;
	document.getElementById('id_id_accion').value = '';

	// se coloca el onblur del usuario y se pone a vacio el valor (o podriamos hacerlo en el resetearformusuario())
	document.getElementById('id_nombre_accion').onblur = comprobar_nombre_accion;
	document.getElementById('id_nombre_accion').value = '';


	document.getElementById('id_descrip_accion').onblur = comprobar_descrip_accion;
	document.getElementById('id_descrip_accion').value = '';


		imagenenviarform = document.createElement("img");
	imagenenviarform.src="./images/add4.png";
	imagenenviarform.id = "id_imagen_enviar_form";
	imagenenviarform.width = '80';
	imagenenviarform.height = '80';
	imagenenviarform.className='titulo_add';
	document.body.appendChild(imagenenviarform);
	// se coloca una función onclick que hará las comprobaciones y el submit
	document.getElementById('id_imagen_enviar_form').onclick = add_accion;

	// para actualizar idioma despues de incluir la imagen
	setLang();

	// se muestra el formulario
	document.getElementById('id_caja_formulario_accion').style.display = 'block';

}

// crearformEDITusuario() creado con jquery
// Este formulario se crea usando la estructura básica del formulario html en gestionusuario.html  
// Se crea una input image para actuar como un input submit y que el formulario 
// llame a la funcion edit_usuario al pulsarla y esta llama a peticionEDITusuarioBack que provoca el submit del formulario
// y se ejecuta el action

function crearformEDITaccion(id_accion, nombre_accion, descrip_accion){

	// resetear al formulario
	resetearformaccion();
	
	// se crea el action del formulario 
	$("#id_form_accion").attr('action','javascript:EDITaccionajax()');
	
	// se pone no editable el dni al ser clave primaria y no querer que se modifique por el usuario
	// se pone la funcion de comprobación aunque no sea necesaria y se pone el valor por defecto que se proporciona como parametro
	$("#id_id_accion").attr('readonly',true);
	$("#id_id_accion").blur(comprobar_id_accion);
	$("#id_id_accion").val(id_accion);

	// se pone la función de validación de usuario y se pone el valor por defecto proporcionado como parametro
	$("#id_nombre_accion").on('blur',comprobar_nombre_accion);
	$("#id_nombre_accion").val(nombre_accion);


	$("#id_descrip_accion").on('blur',comprobar_descrip_accion);
	$("#id_descrip_accion").val(descrip_accion);


	

	imagenenviarform = document.createElement("img");
	imagenenviarform.src="./images/edit4.png";
	imagenenviarform.id = "id_imagen_enviar_form";
	imagenenviarform.width = '80';
	imagenenviarform.height = '80';
	imagenenviarform.className = 'titulo_edit';
	document.body.appendChild(imagenenviarform);
	// se coloca una función onclick que hará las comprobaciones y el submit
	$("#id_imagen_enviar_form").on('click', edit_accion);
	
	setLang();	
	// se muestra el formulario
	$("#id_caja_formulario_accion").attr('style', 'display: block');

}

function accionEDITAjaxPromesa(){

	insertacampo('id_form_accion','controlador', 'accion');
	insertacampo('id_form_accion','action', 'EDIT');
	
	return new Promise(function(resolve, reject) {
		$.ajax({
			method: "POST",
			url: urlPeticionesAjax,
			data: $("#id_form_accion").serialize(),
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

async function EDITaccionajax() {
	
	var idioma = getCookie('lang');

	await accionEDITAjaxPromesa()
		.then((res) => {
			
			if (res.code == 'SQL_OK'){
				res.code = 'edit_accion_OK';
			};
			devolveraccionajax();
			mensajeactionOK(res.code);
			//
			//window.location.href = "gestionusuario.html";
		})
		.catch((res) => {
			mensajeFAIL(res.code);
		});

		setLang();
		//document.getElementById('id_form_usuario').reset();
		resetearformaccion();
		document.getElementById('controlador')
		//document.getElementById('id_imagen_enviar_form').remove(); 
}

// crearformDELETEusuario() creado con jquery
// Este formulario se crea usando la estructura básica del formulario html en gestionusuario.html  
// Se crea una input image para actuar como un input submit y que el formulario 
// llame a la funcion delete_usuario al pulsarla y esta llama a peticionDELETEusuarioBack que provoca el submit del formulario
// y se ejecuta el action

function crearformDELETEaccion(id_accion, nombre_accion, descrip_accion){

	resetearformaccion();
	
$("#id_form_accion").attr('action','javascript:DELETEaccionajax()');



	$("#id_id_accion").attr('readonly','true')
	$("#id_id_accion").val(id_accion);

	$("#id_nombre_accion").attr('readonly','true')
	$("#id_nombre_accion").val(nombre_accion);

	$("#id_descrip_accion").attr('readonly','true')
	$("#id_descrip_accion").val(descrip_accion);

	
	
	accionsubmit = document.createElement("button");
	accionsubmit.type = 'submit';
	accionsubmit.id = 'id_accionsubmit';
	$("#id_form_accion").append(accionsubmit);
	
	// se coloca la imagen en el button submit
	botonsubmit = document.createElement("img");
	botonsubmit.id = "id_boton_buscar_accion";
	botonsubmit.className = 'titulo_search';
	botonsubmit.src= "./images/delete4.png";
	botonsubmit.width = '80';
	botonsubmit.height = '80';
	$("#id_accionsubmit").append(botonsubmit);	

	setLang(); 
	
	$("#id_caja_formulario_accion").attr('style', 'display: block');
}
function accionDELETEAjaxPromesa(){

	insertacampo('id_form_accion','controlador', 'accion');
	insertacampo('id_form_accion','action', 'DELETE');
	
	return new Promise(function(resolve, reject) {
		$.ajax({
			method: "POST",
			url: urlPeticionesAjax,
			data: $("#id_form_accion").serialize(),
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

async function DELETEaccionajax() {
	
	var idioma = getCookie('lang');

	await accionDELETEAjaxPromesa()
		.then((res) => {
			
			if (res.code == 'SQL_OK'){
				res.code = 'delete_accion_OK';
			}
			mensajeactionOK(res.code);
			devolveraccionajax();
		})
		.catch((res) => {
			mensajeFAIL(res.code);
		});

		setLang();
	
		resetearformaccion();
	
}







// crearformSEARCHusuario() creado con jquery (except el option que utiliza javascript)
// Este formulario se crea usando la estructura básica del formulario html en gestionusuario.html
// Se crea un input image para actuar como un input submit y que el formulario haga el submit al pulsarlo
// Cuando esto pasa se llama a la funcion search_usuario en el onsubmit y se hace la comprobación de atributos
// cuando esta función devuelve true se ejecuta el action
function crearformSEARCHaccion(){

	// reseteo el formulario
	resetearformaccion();
	
	// creo la accion para el formulario y el onsubmit
	$("#id_form_accion").attr('action','javascript:SEARCHaccionAjax()');
	$("#id_form_accion").on('submit', search_accion);
	
	// pongo el campo de dni editable y le asocio la funcion para el onblur
	$("#id_id_accion").attr('readonly', false);
	$("#id_id_accion").blur(comprobar_id_accion_search);

	// pongo el campo de usuario editable y le asocio la funcion para el onblur
	$("#id_nombre_accion").attr('readonly',false)
	$("#id_nombre_accion").blur(comprobar_nombre_accion_search);

	$("#id_descrip_accion").attr('readonly',false)
	$("#id_descrip_accion").blur(comprobar_descrip_accion_search);

	botonsubmit = document.createElement("img");
	botonsubmit.id = "id_boton_buscar_accion";
	botonsubmit.className = 'titulo_search';
	botonsubmit.src= "./images/search4.png";
	botonsubmit.width = '80';
	botonsubmit.height = '80';
	document.body.appendChild(botonsubmit);

	// coloco la imagen para submit en el formulario
	$("#id_boton_buscar_accion").on('click', search_accion);

	setLang(); 

	// se pone visible el formulario
	$("#id_caja_formulario_accion").attr('style', 'display: block');
}

function accionSEARCHAjaxPromesa(){

	insertacampo('id_form_accion','controlador', 'accion');
	insertacampo('id_form_accion','action', 'SEARCH');
	
	return new Promise(function(resolve, reject) {
		$.ajax({
			method: "POST",
			url: urlPeticionesAjax,
			data: $("#id_form_accion").serialize(),
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

async function SEARCHaccionAjax() {
	
	var idioma = getCookie('lang');

	await accionSEARCHAjaxPromesa()
		.then((res) => {
			getListaccion(res.resource);
		})
		.catch((res) => {
			mensajeFAIL(res.code);
		});

		setLang();

		resetearformaccion();

}

function crearformSHOWCURRENTaccion(id_accion, nombre_accion, descrip_accion){
resetearformaccion();
	
	
	
	$("#id_id_accion").attr('readonly','true')
	$("#id_id_accion").val(id_accion);

	$("#id_nombre_accion").attr('readonly','true')
	$("#id_nombre_accion").val(nombre_accion);

	$("#id_descrip_accion").attr('readonly','true')
	$("#id_descrip_accion").val(descrip_accion);

	
	
	accionsubmit = document.createElement("button");
	accionsubmit.type = 'submit';
	accionsubmit.id = 'id_accionsubmit';
	$("#id_form_accion").append(accionsubmit);
	
	// se coloca la imagen en el button submit
	botonsubmit = document.createElement("img");
	botonsubmit.id = "id_boton_buscar_accion";
	botonsubmit.className = 'titulo_search';
	botonsubmit.src= "./images/detail4.png";
	botonsubmit.width = '80';
	botonsubmit.height = '80';
	$("#id_accionsubmit").append(botonsubmit);	

	setLang(); 
	
	$("#id_caja_formulario_accion").attr('style', 'display: block');
}

function devolveraccionAjaxPromesa(){

	crearformoculto('form_generico','');
	insertacampo('form_generico','controlador', 'accion');
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

async function devolveraccionajax() {
	
	var idioma = getCookie('lang');

	await devolveraccionAjaxPromesa()
		.then((res) => {
			
			getListaccion(res.resource);
		
		})
		.catch((res) => {
			mensajeFAIL(res.code);
        	setLang(idioma);
		});

		document.getElementById('form_generico').remove();
}


//Función ajax con promesas


function getListaccion(listaaccion){

	//listausuarios = devolverusuariosajax();
	
	$("#id_datosaccion").html('');

	for (let accion of listaaccion){

		datosfila = "'"+accion.id_accion+"',"+"'"+accion.nombre_accion+"',"+"'"+accion.descrip_accion+"'";

		lineatabla = '<tr><td>'+accion['id_accion']+'</td><td>'+accion['nombre_accion']+'</td><td>'+accion['descrip_accion']+"</td>";
		botonedit = '<td><img class="titulo_edit" src="./images/edit4.png" onclick="crearformEDITaccion('+datosfila+');" width="50" height="50"></td>';
		botondelete = '<td><img class="titulo_delete" src="./images/delete4.png" width="50" height="50" onclick="crearformDELETEaccion('+datosfila+');"></td>';
		botonshowcurrent = '<td><img class="titulo_showcurrent" src="./images/detail4.png" width="50" height="50" onclick="crearformSHOWCURRENTaccion('+datosfila+')";></td>';

		lineatabla += botonedit+botondelete+botonshowcurrent+"</tr>";

		$("#id_datosaccion").append(lineatabla);
	}

}

