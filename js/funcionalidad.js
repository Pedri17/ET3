// comprobar_form_usuario_add()
// funcion para validar el submit del formulario usuario para las acciones que no sean search

function comprobar_form_funcionalidad_add(){
	

	if (comprobar_id_funcionalidad() && comprobar_nombre_funcionalidad ()&& comprobar_descrip_funcionalidad() ){
		return true;
	}
	else{
		return false;
	}
}

// comprobar_form_usuario_search()
// funcion para validar el submit del formulario de usuario para la accion search
function comprobar_form_funcionalidad_search(){
	

	if (comprobar_id_funcionalidad_search()&& comprobar_nombre_funcionalidad_search()&&comprobar_descrip_funcionalidad_search() ){
		return true;
	}
	else{
		return false;
	}
}

// comprobar_usuario()
// funcion de validación de formato de usuario en acciones que no sean search
function comprobar_id_funcionalidad(){

	if (!size_minimo('id_id_funcionalidad',0)){
		mensajeKO('id_id_funcionalidad', 'idfuncionalidad_corto_ko');
		return false;
	}
	if (!size_maximo('id_id_funcionalidad',6)){
		mensajeKO('id_id_funcionalidad', 'idfuncionalidad_largo_ko');
		return false;
	}
	if (!soloNumeros('id_id_funcionalidad')){
		mensajeKO('id_id_funcionalidad', 'idfuncionalidad_formato_ko');
		return false;
	}

	mensajeOK('id_id_funcionalidad');
	return true;

}

// comprobar_id_funcionalidad_search()
// funcion de validacion del formato de id_accion
function comprobar_id_funcionalidad_search(){
  	if (!size_maximo('id_id_funcionalidad',6)){
		mensajeKO('id_id_funcionalidad', 'idfuncionalidad_largo_ko');
		return false;
	}
	if (!soloNumeros('id_id_funcionalidad')){
		mensajeKO('id_id_funcionalidad', 'idfuncionalidad_formato_ko');
		return false;
	}

	mensajeOK('id_id_funcionalidad');
	return true;	
}

function comprobar_nombre_funcionalidad(){

	if (!size_minimo('id_nombre_funcionalidad',6)){
		mensajeKO('id_nombre_funcionalidad', 'nombrefuncionalidad_corto_ko');
		return false;
	}
	if (!size_maximo('id_nombre_funcionalidad',48)){
		mensajeKO('id_nombre_funcionalidad', 'nombrefuncionalidad_largo_ko');
		return false;
	}
	if (!letrassinacento('id_nombre_funcionalidad')){
		mensajeKO('id_nombre_funcionalidad', 'nombrefuncionalidad_formato_ko');
		return false;
	}

	mensajeOK('id_nombre_funcionalidad');
	return true;

}
function comprobar_nombre_funcionalidad_search(){

	
	if (!size_maximo('id_nombre_funcionalidad',48)){
		mensajeKO('id_nombre_funcionalidad', 'nombrefuncionalidad_largo_ko');
		return false;
	}
	if (!letrassinacento('id_nombre_funcionalidad')){
		mensajeKO('id_nombre_funcionalidad', 'nombrefuncionalidad_formato_ko');
		return false;
	}

	mensajeOK('id_nombre_funcionalidad');
	return true;

}
function comprobar_descrip_funcionalidad(){

	if (!size_minimo('id_descrip_funcionalidad',20)){
		mensajeKO('id_descrip_funcionalidad', 'descripfuncionalidad_corto_ko');
		return false;
	}
	if (!size_maximo('id_descrip_funcionalidad',200)){
		mensajeKO('id_descrip_funcionalidad', 'descripfuncionalidad_largo_ko');
		return false;
	}
	if (!cualquierExceptoRol('id_descrip_funcionalidad')){
		mensajeKO('id_descrip_funcionalidad', 'descripfuncionalidad_formato_ko');
		return false;
	}

	mensajeOK('id_descrip_funcionalidad');
	return true;

}

function comprobar_descrip_funcionalidad_search(){

	
	if (!size_maximo('id_descrip_funcionalidad',200)){
		mensajeKO('id_descrip_funcionalidad', 'descripfuncionalidad_largo_ko');
		return false;
	}
	if (!cualquierExceptoRol('id_descrip_funcionalidad')){
		mensajeKO('id_descrip_funcionalidad', 'descripfuncionalidad_formato_ko');
		return false;
	}

	mensajeOK('id_descrip_funcionalidad');
	return true;

}






// peticionADDusuarioBack()
// funcion que utilizariamos para hacer una solicitud a back para añadir un usuario
function peticionADDfuncionalidadBack(){

	alert('peticion a back add');
	document.getElementById('id_form_funcionalidad').submit();
	
}

// peticionEDITusuarioBack()
// funcion que utilizariamos para hacer una solicitud a back para editar un usuario
function peticionEDITfuncionalidadBack(){

	alert('peticion a back edit');
	document.getElementById('id_form_funcionalidad').submit();
	
}

// peticionDELETEusuarioBack()
// funcion que utilizariamos para hacer una solicitud a back para borrar un usuario
function peticionDELETEfuncionalidadBack(){

	alert('peticion a back delete');
	document.getElementById('id_form_funcionalidad').submit();
	
}




// add_accion()
// funcion a ser ejecutada cuando se completa el formulario al pulsar sobre la imagen
// llama a la funcion de petición pq no es necesario comprobación de formularios.
// en esta funcion de petición se provoca el submit para que se ejecute la accion
function add_funcionalidad(){

	if (comprobar_form_funcionalidad_add()){
		ADDfuncionalidadajax();
	}

}

// edit_accion()
// funcion a ser ejecutada cuando se completa el formulario al pulsar sobre la imagen
// llama a la funcion de petición pq no es necesario comprobación de formularios.
// en esta funcion de petición se provoca el submit para que se ejecute la accion
function edit_funcionalidad(){

	if (comprobar_form_funcionalidad_add()){
		EDITfuncionalidadajax();
	}

}

// delete_accion()
// funcion a ser ejecutada cuando se completa el formulario al pulsar sobre la imagen
// llama a la funcion de petición pq no es necesario comprobación de formularios.
// en esta funcion de petición se provoca el submit para que se ejecute la accion
function delete_funcionalidad(){

	return true;

}

// search_accion()
// funcion a ser ejecutada cuando se completa el formulario
// comprueba los formatos de atributo del formulario y devuelve true para que se invoque el action
function search_funcionalidad(){

	if (comprobar_form_funcionalidad_search()){
		SEARCHfuncionalidadAjax();
	}
}

// resetearformusuario()
// esta función se usa para inicializar el formulario y siempre este de la misma manera antes de entrar en las funciones que construyen los formularios de acciones
// aqui solo eliminamos el select. Podriamos tambien hacer un remove() en vez de desasignarlo
function resetearformfuncionalidad(){


	

	// quitar el readonly de los atributos
	$("#id_id_funcionalidad").attr('readonly',false);
	$("#id_id_funcionalidad").val('');
	$("#id_nombre_funcionalidad").attr('readonly',false);
	$("#id_nombre_funcionalidad").val('');
	$("#id_descrip_funcionalidad").attr('readonly',false);
	$("#id_descrip_funcionalidad").val('');

	$("#id_boton_buscar_funcionalidad").remove();

	// eliminar la imagen para terminar el formulario
	$("#id_imagen_enviar_form").remove();

	// eliminar el button para submit el formulario de search
	$("#id_funcionalidadsubmit").remove();

	// se pone visible el formulario
	$("#id_caja_formulario_funcionalidad").attr('style', 'display: none');

	setLang();



	$("#id_boton_buscar_funcionalidad").remove();

	// eliminar la imagen para terminar el formulario
	$("#id_imagen_enviar_form").remove();

	// eliminar el button para submit el formulario de search
	$("#id_accionsubmit").remove();

	// se pone visible el formulario
	$("#id_caja_formulario_funcionalidad").attr('style', 'display: none');

	setLang();


}
function funcionalidadADDAjaxPromesa(){

	insertacampo('id_form_funcionalidad','controlador', 'funcionalidad');
	insertacampo('id_form_funcionalidad','action', 'ADD');
	
	return new Promise(function(resolve, reject) {
		$.ajax({
			method: "POST",
			url: urlPeticionesAjax,
			data: $("#id_form_funcionalidad").serialize(),
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

async function ADDfuncionalidadajax() {
	
	var idioma = getCookie('lang');

	await funcionalidadADDAjaxPromesa()
		.then((res) => {
			
			if (res.code == 'SQL_OK'){
				res.code = 'add_funcionaliad_OK';
			};
			devolverfuncionalidadesajax();
			mensajeactionOK(res.code);
			//
			//window.location.href = "gestionusuario.html";
		})
		.catch((res) => {
			mensajeFAIL(res.code);
		});

		setLang();

		resetearformfuncionalidad();
 
}

// crearformADDusuario() creado con javascript
// Este formulario se crea usando la estructura básica del formulario html en gestionusuario.html  
// Se crea una input image para actuar como un input submit y que el formulario 
// llame a la funcion add_usuario al pulsarla y esta llama a peticionADDusuarioBack que provoca el submit del formulario
// y se ejecuta el action

function crearformADDfuncionalidad(){

	// resetear el formulario
	resetearformfuncionalidad();

	// se rellena el action del formulario
	document.getElementById('id_form_funcionalidad').action='javascript:ADDfuncionalidadajax()';
	document.getElementById('id_form_funcionalidad').onblur = add_funcionalidad;
	
	// se coloca el onblur del dni y se pone a vacio el valor (o podriamos hacerlo en el resetearformusuario())
	document.getElementById('id_id_funcionalidad').onblur = comprobar_id_funcionalidad;
	document.getElementById('id_id_funcionalidad').value = '';

	// se coloca el onblur del usuario y se pone a vacio el valor (o podriamos hacerlo en el resetearformusuario())
	document.getElementById('id_nombre_funcionalidad').onblur = comprobar_nombre_funcionalidad;
	document.getElementById('id_nombre_funcionalidad').value = '';


	document.getElementById('id_descrip_funcionalidad').onblur = comprobar_descrip_funcionalidad;
	document.getElementById('id_descrip_funcionalidad').value = '';


	imagenenviarform = document.createElement("img");
	imagenenviarform.src="./images/add4.png";
	imagenenviarform.id = "id_imagen_enviar_form";
	imagenenviarform.width = '80';
	imagenenviarform.height = '80';
	imagenenviarform.className='titulo_add';
	document.body.appendChild(imagenenviarform);
	// se coloca una función onclick que hará las comprobaciones y el submit
	document.getElementById('id_imagen_enviar_form').onclick = add_funcionalidad;

	// para actualizar idioma despues de incluir la imagen
	setLang();

	// se muestra el formulario
	document.getElementById('id_caja_formulario_funcionalidad').style.display = 'block';

}

// crearformEDITusuario() creado con jquery
// Este formulario se crea usando la estructura básica del formulario html en gestionusuario.html  
// Se crea una input image para actuar como un input submit y que el formulario 
// llame a la funcion edit_usuario al pulsarla y esta llama a peticionEDITusuarioBack que provoca el submit del formulario
// y se ejecuta el action

function crearformEDITfuncionalidad(id_funcionalidad, nombre_funcionalidad, descrip_funcionalidad){

	// resetear al formulario
	resetearformfuncionalidad();
	
	// se crea el action del formulario 
	$("#id_form_funcionalidad").attr('action','javascript:EDITfuncionalidadajax()');
	
	// se pone no editable el dni al ser clave primaria y no querer que se modifique por el usuario
	// se pone la funcion de comprobación aunque no sea necesaria y se pone el valor por defecto que se proporciona como parametro
	$("#id_id_funcionalidad").attr('readonly',true);
	$("#id_id_funcionalidad").blur(comprobar_id_funcionalidad);
	$("#id_id_funcionalidad").val(id_funcionalidad);

	// se pone la función de validación de usuario y se pone el valor por defecto proporcionado como parametro
	$("#id_nombre_funcionalidad").on('blur',comprobar_nombre_funcionalidad);
	$("#id_nombre_funcionalidad").val(nombre_funcionalidad);


	$("#id_descrip_funcionalidad").on('blur',comprobar_descrip_funcionalidad);
	$("#id_descrip_funcionalidad").val(descrip_funcionalidad);


	
imagenenviarform = document.createElement("img");
	imagenenviarform.src="./images/edit4.png";
	imagenenviarform.id = "id_imagen_enviar_form";
	imagenenviarform.width = '80';
	imagenenviarform.height = '80';
	imagenenviarform.className = 'titulo_edit';
	document.body.appendChild(imagenenviarform);
	// se coloca una función onclick que hará las comprobaciones y el submit
	$("#id_imagen_enviar_form").on('click', edit_funcionalidad);
	
	setLang();	
	// se muestra el formulario
	$("#id_caja_formulario_funcionalidad").attr('style', 'display: block');
}

function funcionalidadEDITAjaxPromesa(){

	insertacampo('id_form_funcionalidad','controlador', 'funcionalidad');
	insertacampo('id_form_funcionalidad','action', 'EDIT');
	
	return new Promise(function(resolve, reject) {
		$.ajax({
			method: "POST",
			url: urlPeticionesAjax,
			data: $("#id_form_funcionalidad").serialize(),
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

async function EDITfuncionalidadajax() {
	
	var idioma = getCookie('lang');

	await funcionalidadEDITAjaxPromesa()
		.then((res) => {
			
			if (res.code == 'SQL_OK'){
				res.code = 'edit_funcionalidad_OK';
			};
			devolverfuncionalidadesajax();
			mensajeactionOK(res.code);
			//
			//window.location.href = "gestionusuario.html";
		})
		.catch((res) => {
			mensajeFAIL(res.code);
		});

		setLang();
		//document.getElementById('id_form_usuario').reset();
		resetearformfuncionalidad();
		document.getElementById('controlador')
		//document.getElementById('id_imagen_enviar_form').remove(); 
}

// crearformDELETEusuario() creado con jquery
// Este formulario se crea usando la estructura básica del formulario html en gestionusuario.html  
// Se crea una input image para actuar como un input submit y que el formulario 
// llame a la funcion delete_usuario al pulsarla y esta llama a peticionDELETEusuarioBack que provoca el submit del formulario
// y se ejecuta el action

function crearformDELETEfuncionalidad(id_funcionalidad, nombre_funcionalidad, descrip_funcionalidad){

	resetearformfuncionalidad();
	
	$("#id_form_funcionalidad").attr('action','javascript:DELETEfuncionalidadajax()');

	
	$("#id_id_funcionalidad").attr('readonly','true')
	$("#id_id_funcionalidad").val(id_funcionalidad);

	$("#id_nombre_funcionalidad").attr('readonly','true')
	$("#id_nombre_funcionalidad").val(nombre_funcionalidad);

	$("#id_descrip_funcionalidad").attr('readonly','true')
	$("#id_descrip_funcionalidad").val(descrip_funcionalidad);

	
	
	accionsubmit = document.createElement("button");
	accionsubmit.type = 'submit';
	accionsubmit.id = 'id_accionsubmit';
	$("#id_form_funcionalidad").append(accionsubmit);
	
	// se coloca la imagen en el button submit
	botonsubmit = document.createElement("img");
	botonsubmit.id = "id_boton_buscar_funcionalidad";
	botonsubmit.className = 'titulo_search';
	botonsubmit.src= "./images/delete4.png";
	botonsubmit.width = '80';
	botonsubmit.height = '80';
	$("#id_accionsubmit").append(botonsubmit);	

	setLang(); 
	
	$("#id_caja_formulario_funcionalidad").attr('style', 'display: block');
}


function funcionalidadDELETEAjaxPromesa(){

	insertacampo('id_form_funcionalidad','controlador', 'funcionalidad');
	insertacampo('id_form_funcionalidad','action', 'DELETE');
	
	return new Promise(function(resolve, reject) {
		$.ajax({
			method: "POST",
			url: urlPeticionesAjax,
			data: $("#id_form_funcionalidad").serialize(),
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

async function DELETEfuncionalidadajax() {
	
	var idioma = getCookie('lang');

	await funcionalidadDELETEAjaxPromesa()
		.then((res) => {
			
			if (res.code == 'SQL_OK'){
				res.code = 'delete_funcionalidad_OK';
			}
			mensajeactionOK(res.code);
			devolverfuncionalidadesajax();
		})
		.catch((res) => {
			mensajeFAIL(res.code);
		});

		setLang();
	
		resetearformfuncionalidad();
	
}

// crearformSEARCHusuario() creado con jquery (except el option que utiliza javascript)
// Este formulario se crea usando la estructura básica del formulario html en gestionusuario.html
// Se crea un input image para actuar como un input submit y que el formulario haga el submit al pulsarlo
// Cuando esto pasa se llama a la funcion search_usuario en el onsubmit y se hace la comprobación de atributos
// cuando esta función devuelve true se ejecuta el action

function crearformSEARCHfuncionalidad(){

	// reseteo el formulario
	resetearformfuncionalidad();
	
	// creo la accion para el formulario y el onsubmit
	$("#id_form_funcionalidad").attr('action','javascript:SEARCHfuncionalidadAjax()');
	
	
	// pongo el campo de dni editable y le asocio la funcion para el onblur
	$("#id_id_funcionalidad").attr('readonly', false);
	$("#id_id_funcionalidad").blur(comprobar_id_funcionalidad_search);

	// pongo el campo de usuario editable y le asocio la funcion para el onblur
	$("#id_nombre_funcionalidad").attr('readonly',false)
	$("#id_nombre_funcionalidad").blur(comprobar_nombre_funcionalidad_search);

	$("#id_descrip_funcionalidad").attr('readonly',false)
	$("#id_descrip_funcionalidad").blur(comprobar_descrip_funcionalidad_search);


	
	botonsubmit = document.createElement("img");
	botonsubmit.id = "id_boton_buscar_funcionalidad";
	botonsubmit.className = 'titulo_search';
	botonsubmit.src= "./images/search4.png";
	botonsubmit.width = '80';
	botonsubmit.height = '80';
	document.body.appendChild(botonsubmit);

	// coloco la imagen para submit en el formulario
	$("#id_boton_buscar_funcionalidad").on('click', search_funcionalidad);

	setLang(); 

	// se pone visible el formulario
	$("#id_caja_formulario_funcionalidad").attr('style', 'display: block');
}

function funcionalidadSEARCHAjaxPromesa(){

	insertacampo('id_form_funcionalidad','controlador', 'funcionalidad');
	insertacampo('id_form_funcionalidad','action', 'SEARCH');
	
	return new Promise(function(resolve, reject) {
		$.ajax({
			method: "POST",
			url: urlPeticionesAjax,
			data: $("#id_form_funcionalidad").serialize(),
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

async function SEARCHfuncionalidadAjax() {
	
	var idioma = getCookie('lang');

	await funcionalidadSEARCHAjaxPromesa()
		.then((res) => {
			getListFuncionalidades(res.resource);
		})
		.catch((res) => {
			mensajeFAIL(res.code);
		});

		setLang();

		resetearformfuncionalidad();

}

function crearformSHOWCURRENTfuncionalidad(id_funcionalidad, nombre_funcionalidad, descrip_funcionalidad){
resetearformfuncionalidad();
	
	
	
	$("#id_id_funcionalidad").attr('readonly','true')
	$("#id_id_funcionalidad").val(id_funcionalidad);


	$("#id_nombre_funcionalidad").attr('readonly','true')
	$("#id_nombre_funcionalidad").val(nombre_funcionalidad);

	$("#id_descrip_funcionalidad").attr('readonly','true')
	$("#id_descrip_funcionalidad").val(descrip_funcionalidad);

	
	
	accionsubmit = document.createElement("button");
	accionsubmit.type = 'submit';
	accionsubmit.id = 'id_accionsubmit';
	$("#id_form_funcionalidad").append(accionsubmit);
	
	botonsubmit = document.createElement("img");
	botonsubmit.id = "id_boton_buscar_funcionalidad";
	botonsubmit.className = 'titulo_search';
	botonsubmit.src= "./images/detail4.png";
	botonsubmit.width = '80';
	botonsubmit.height = '80';
	$("#id_accionsubmit").append(botonsubmit);	
	
	setLang(); 
	$("#id_caja_formulario_funcionalidad").attr('style', 'display: block');
}


function devolverfuncionalidadesAjaxPromesa(){

	crearformoculto('form_generico','');
	insertacampo('form_generico','controlador', 'funcionalidad');
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

async function devolverfuncionalidadesajax() {
	
	var idioma = getCookie('lang');

	await devolverfuncionalidadesAjaxPromesa()
		.then((res) => {
			
			getListFuncionalidades(res.resource);
		
		})
		.catch((res) => {
			mensajeFAIL(res.code);
        	setLang(idioma);
		});

		document.getElementById('form_generico').remove();
}



function getListFuncionalidades(listafuncionalidad){

	//listausuarios = devolverusuariosajax();
	
	$("#id_datosfuncionalidad").html('');

	for (let funcionalidad of listafuncionalidad){

		datosfila = "'"+funcionalidad.id_funcionalidad+"',"+"'"+funcionalidad.nombre_funcionalidad+"',"+"'"+funcionalidad.descrip_funcionalidad+"'";

		lineatabla = '<tr><td>'+funcionalidad['id_funcionalidad']+'</td><td>'+funcionalidad['nombre_funcionalidad']+'</td><td>'+funcionalidad['descrip_funcionalidad']+"</td>";
		botonedit = '<td><img class="titulo_edit" src="./images/edit4.png" onclick="crearformEDITfuncionalidad('+datosfila+');" width="50" height="50"></td>';
		botondelete = '<td><img class="titulo_delete" src="./images/delete4.png" width="50" height="50" onclick="crearformDELETEfuncionalidad('+datosfila+');"></td>';
		botonshowcurrent = '<td><img class="titulo_showcurrent" src="./images/detail4.png" width="50" height="50" onclick="crearformSHOWCURRENTfuncionalidad('+datosfila+')";></td>';

		lineatabla += botonedit+botondelete+botonshowcurrent+"</tr>";

		$("#id_datosfuncionalidad").append(lineatabla);
	}

}

