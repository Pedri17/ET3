


// comprobar_form_usuario_add()
// funcion para validar el submit del formulario usuario para las acciones que no sean search

function comprobar_form_rol_add(){
	

	if ( comprobar_id_rol()&& comprobar_rol_name ()&& comprobar_rol_descripcion() ){
		return true;
	}
	else{
		return false;
	}
}

// comprobar_form_usuario_search()
// funcion para validar el submit del formulario de usuario para la accion search
function comprobar_form_rol_search(){
	

	if (comprobar_id_rol_search()&&comprobar_rol_name_search()&&comprobar_rol_descripcion_search() ){
		return true;
	}
	else{
		return false;
	}
}

// comprobar_usuario()
// funcion de validación de formato de usuario en acciones que no sean search
function comprobar_id_rol(){

	if (!size_minimo('id_id_rol',0)){
		mensajeKO('id_id_rol', 'idrol_corto_ko', 'id_caja_error_idrol','id_texterror_idrol');
		return false;
	}
	if (!size_maximo('id_id_rol',6)){
		mensajeKO('id_id_rol', 'idrol_largo_ko', 'id_caja_error_idrol','id_texterror_idrol');
		return false;
	}
	if (!soloNumeros('id_id_rol')){
		mensajeKO('id_id_rol', 'idrol_formato_ko', 'id_caja_error_idrol','id_texterror_idrol');
		return false;
	}

	mensajeOK('id_id_rol', 'id_caja_error_idrol');
	return true;

}

// comprobar_id_rol_search()
// funcion de validacion del formato de id_rol
function comprobar_id_rol_search(){
  	if (!size_maximo('id_id_rol',6)){
		mensajeKO('id_id_rol', 'idrol_largo_ko', 'id_caja_error_idrol','id_texterror_idrol');
		return false;
	}
	if (!soloNumeros('id_id_rol')){
		mensajeKO('id_id_rol', 'idrol_formato_ko', 'id_caja_error_idrol','id_texterror_idrol');
		return false;
	}

	mensajeOK('id_id_rol', 'id_caja_error_idrol');
	return true;	
}

function comprobar_rol_name(){

	if (!size_minimo('id_nombre_rol',6)){
		mensajeKO('id_nombre_rol', 'rolname_corto_ko', 'id_caja_error_nombrerol','id_texterror_nombrerol');
		return false;
	}
	if (!size_maximo('id_nombre_rol',48)){
		mensajeKO('id_nombre_rol', 'rolname_largo_ko', 'id_caja_error_nombrerol','id_texterror_nombrerol');
		return false;
	}
	if (!letrassinacento('id_nombre_rol')){
		mensajeKO('id_nombre_rol', 'rolname_formato_ko', 'id_caja_error_nombrerol','id_texterror_nombrerol');
		return false;
	}

	mensajeOK('id_nombre_rol', 'id_caja_error_nombrerol');
	return true;

}
function comprobar_rol_name_search(){

	
	if (!size_maximo('id_nombre_rol',48)){
		mensajeKO('id_nombre_rol', 'rolname_largo_ko', 'id_caja_error_nombrerol','id_texterror_nombrerol');
		return false;
	}
	if (!letrassinacento('id_nombre_rol')){
		mensajeKO('id_nombre_rol', 'rolname_formato_ko', 'id_caja_error_nombrerol','id_texterror_nombrerol');
		return false;
	}

	mensajeOK('id_nombre_rol', 'id_caja_error_nombrerol');
	return true;

}
function comprobar_rol_descripcion(){

	if (!size_minimo('id_descrip_rol',20)){
		mensajeKO('id_descrip_rol', 'roldescripcion_corto_ko', 'id_caja_error_descriprol','id_texterror_descriprol');
		return false;
	}
	if (!size_maximo('id_descrip_rol',200)){
		mensajeKO('id_descrip_rol', 'roldescripcion_largo_ko', 'id_caja_error_descriprol','id_texterror_descriprol');
		return false;
	}
	if (!cualquierExceptoRol('id_descrip_rol')){
		mensajeKO('id_descrip_rol', 'roldescripcion_formato_ko', 'id_caja_error_descriprol','id_texterror_descriprol');
		return false;
	}

	mensajeOK('id_descrip_rol', 'id_caja_error_descriprol');
	return true;

}

function comprobar_rol_descripcion_search(){

	
	if (!size_maximo('id_descrip_rol',200)){
		mensajeKO('id_descrip_rol', 'roldescripcion_largo_ko', 'id_caja_error_descriprol','id_texterror_descriprol');
		return false;
	}
	if (!cualquierExceptoRol('id_descrip_rol')){
		mensajeKO('id_descrip_rol', 'roldescripcion_formato_ko', 'id_caja_error_descriprol','id_texterror_descriprol');
		return false;
	}

	mensajeOK('id_descrip_rol', 'id_caja_error_descriprol');
	return true;

}







// add_usuario()
// funcion a ser ejecutada cuando se completa el formulario al pulsar sobre la imagen
// llama a la funcion de petición pq no es necesario comprobación de formularios.
// en esta funcion de petición se provoca el submit para que se ejecute la accion
function add_rol(){

	if (comprobar_form_rol_add()){
		ADDroljax();
	}

}

// edit_rol()
// funcion a ser ejecutada cuando se completa el formulario al pulsar sobre la imagen
// llama a la funcion de petición pq no es necesario comprobación de formularios.
// en esta funcion de petición se provoca el submit para que se ejecute la accion
function edit_rol(){

	if (comprobar_form_rol_add()){
		EDITrolajax();

	}
}

// delete_rol()
// funcion a ser ejecutada cuando se completa el formulario al pulsar sobre la imagen
// llama a la funcion de petición pq no es necesario comprobación de formularios.
// en esta funcion de petición se provoca el submit para que se ejecute la accion
function delete_rol(){

	return true;

}

// search_rol()
// funcion a ser ejecutada cuando se completa el formulario
// comprueba los formatos de atributo del formulario y devuelve true para que se invoque el action
function search_rol(){

	if (comprobar_form_rol_search()){
		SEARCHrolAjax();
	}
}

// resetearformusuario()
// esta función se usa para inicializar el formulario y siempre este de la misma manera antes de entrar en las funciones que construyen los formularios de acciones
// aqui solo eliminamos el select. Podriamos tambien hacer un remove() en vez de desasignarlo
function resetearformrol(){


	

	// quitar el readonly de los atributos
	$("#id_id_rol").attr('readonly',false);
	$("#id_id_rol").val('');
	$("#id_nombre_rol").attr('readonly',false);
	$("#id_nombre_rol").val('');
	$("#id_descrip_rol").attr('readonly',false);
	$("#id_descrip_rol").val('');


// eliminar el boton de submit de formulario
	$("#id_boton_buscar_rol").remove();

	// eliminar la imagen para terminar el formulario
	$("#id_imagen_enviar_form").remove();

	// eliminar el button para submit el formulario de search
	$("#id_accionsubmit").remove();

	// se pone visible el formulario
	$("#id_caja_formulario_rol").attr('style', 'display: none');

	setLang();

}
//Función ajax con promesas
function rolADDAjaxPromesa(){

	insertacampo('id_form_rol','controlador', 'rol');
	insertacampo('id_form_rol','action', 'ADD');
	
	return new Promise(function(resolve, reject) {
		$.ajax({
			method: "POST",
			url: urlPeticionesAjax,
			data: $("#id_form_rol").serialize(),
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

async function ADDroljax() {
	
	var idioma = getCookie('lang');

	await rolADDAjaxPromesa()
		.then((res) => {
			
			if (res.code == 'SQL_OK'){
				res.code = 'add_rol_OK';
			}
			devolverrolesAjax();
			mensajeOK(res.code);
		})
		.catch((res) => {
			mensajeFAIL(res.code);
		});

		setLang();

		resetearformrol();
}

// crearformADDusuario() creado con javascript
// Este formulario se crea usando la estructura básica del formulario html en gestionusuario.html  
// Se crea una input image para actuar como un input submit y que el formulario 
// llame a la funcion add_usuario al pulsarla y esta llama a peticionADDusuarioBack que provoca el submit del formulario
// y se ejecuta el action

function crearformADDrol(){

	// resetear el formulario
	resetearformrol();

	// se rellena el action del formulario
	document.getElementById('id_form_rol').action='javascript:ADDroljax()';
	document.getElementById('id_form_rol').onblur = add_rol;
	
	// se coloca el onblur del dni y se pone a vacio el valor (o podriamos hacerlo en el resetearformusuario())
	document.getElementById('id_id_rol').onblur = comprobar_id_rol;
	document.getElementById('id_id_rol').value = '';

	// se coloca el onblur del usuario y se pone a vacio el valor (o podriamos hacerlo en el resetearformusuario())
	document.getElementById('id_nombre_rol').onblur = comprobar_rol_name;
	document.getElementById('id_nombre_rol').value = '';


	document.getElementById('id_descrip_rol').onblur = comprobar_rol_descripcion;
	document.getElementById('id_descrip_rol').value = '';


	// se coloca una imagen para la accion de añadir
	imagenenviarform = document.createElement("img");
	imagenenviarform.src="./images/add4.png";
	imagenenviarform.id = "id_imagen_enviar_form";
	imagenenviarform.width = '80';
	imagenenviarform.height = '80';
	imagenenviarform.className='titulo_add';
	document.body.appendChild(imagenenviarform);
	// se coloca una función onclick que hará las comprobaciones y el submit
	document.getElementById('id_imagen_enviar_form').onclick = add_rol;

	// para actualizar idioma despues de incluir la imagen
	setLang();

	// se muestra el formulario
	document.getElementById('id_caja_formulario_rol').style.display = 'block';

}

// crearformEDITusuario() creado con jquery
// Este formulario se crea usando la estructura básica del formulario html en gestionusuario.html  
// Se crea una input image para actuar como un input submit y que el formulario 
// llame a la funcion edit_usuario al pulsarla y esta llama a peticionEDITusuarioBack que provoca el submit del formulario
// y se ejecuta el action

function crearformEDITrol(id_rol, rol_name, rol_descripcion){

	// resetear al formulario
	resetearformrol();
	
	// se crea el action del formulario 
	$("#id_form_rol").attr('action','javascript:EDITrolajax()');
	
	
	// se pone no editable el dni al ser clave primaria y no querer que se modifique por el usuario
	// se pone la funcion de comprobación aunque no sea necesaria y se pone el valor por defecto que se proporciona como parametro
	$("#id_id_rol").attr('readonly',true);
	$("#id_id_rol").blur(comprobar_id_rol);
	$("#id_id_rol").val(id_rol);

	// se pone la función de validación de usuario y se pone el valor por defecto proporcionado como parametro
	$("#id_nombre_rol").on('blur',comprobar_rol_name);
	$("#id_nombre_rol").val(rol_name);


	$("#id_descrip_rol").on('blur',comprobar_rol_descripcion);
	$("#id_descrip_rol").val(rol_descripcion);


	
// se coloca una imagen para la accion de editar
	imagenenviarform = document.createElement("img");
	imagenenviarform.src="./images/edit4.png";
	imagenenviarform.id = "id_imagen_enviar_form";
	imagenenviarform.width = '80';
	imagenenviarform.height = '80';
	imagenenviarform.className = 'titulo_edit';
	document.body.appendChild(imagenenviarform);
	// se coloca una función onclick que hará las comprobaciones y el submit
	$("#id_imagen_enviar_form").on('click', edit_rol);
	
	setLang();	
	// se muestra el formulario
	$("#id_caja_formulario_rol").attr('style', 'display: block');
}


//Función ajax con promesas
function rolEDITAjaxPromesa(){

	insertacampo('id_form_rol','controlador', 'rol');
	insertacampo('id_form_rol','action', 'EDIT');
	
	return new Promise(function(resolve, reject) {
		$.ajax({
			method: "POST",
			url: urlPeticionesAjax,
			data: $("#id_form_rol").serialize(),
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

async function EDITrolajax() {
	
	var idioma = getCookie('lang');

	await rolEDITAjaxPromesa()
		.then((res) => {
			
			if (res.code == 'SQL_OK'){
				res.code = 'edit_rol_OK';
			};
			devolverrolesAjax();
			mensajeactionOK(res.code);
			
			
			//
			//window.location.href = "gestionusuario.html";
		})
		.catch((res) => {
			mensajeFAIL(res.code);
		});

		setLang();
		//document.getElementById('id_form_usuario').reset();
		resetearformrol();
		document.getElementById('controlador')
		//document.getElementById('id_imagen_enviar_form').remove(); 
}


// crearformDELETEusuario() creado con jquery
// Este formulario se crea usando la estructura básica del formulario html en gestionusuario.html  
// Se crea una input image para actuar como un input submit y que el formulario 
// llame a la funcion delete_usuario al pulsarla y esta llama a peticionDELETEusuarioBack que provoca el submit del formulario
// y se ejecuta el action

function crearformDELETErol(id_rol, rol_name, rol_descripcion){

	resetearformrol();
	
	$("#id_form_rol").attr('action','javascript:DELETErolajax()');

	
	$("#id_id_rol").attr('readonly','true')
	$("#id_id_rol").val(id_rol);

	$("#id_nombre_rol").attr('readonly','true')
	$("#id_nombre_rol").val(rol_name);

	$("#id_descrip_rol").attr('readonly','true')
	$("#id_descrip_rol").val(rol_descripcion);

	
	
	accionsubmit = document.createElement("button");
	accionsubmit.type = 'submit';
	accionsubmit.id = 'id_accionsubmit';
	$("#id_form_rol").append(accionsubmit);
	
	// se coloca la imagen en el button submit
	botonsubmit = document.createElement("img");
	botonsubmit.id = "id_boton_buscar_rol";
	botonsubmit.className = 'titulo_search';
	botonsubmit.src= "./images/delete4.png";
	botonsubmit.width = '80';
	botonsubmit.height = '80';
	$("#id_accionsubmit").append(botonsubmit);	

	setLang(); 
	
	$("#id_caja_formulario_rol").attr('style', 'display: block');
}

function rolDELETEAjaxPromesa(){

	insertacampo('id_form_rol','controlador', 'rol');
	insertacampo('id_form_rol','action', 'DELETE');
	
	return new Promise(function(resolve, reject) {
		$.ajax({
			method: "POST",
			url: urlPeticionesAjax,
			data: $("#id_form_rol").serialize(),
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

async function DELETErolajax() {
	
	var idioma = getCookie('lang');

	await rolDELETEAjaxPromesa()
		.then((res) => {
			
			if (res.code == 'SQL_OK'){
				res.code = 'delete_rol_OK';
			}
			devolverrolesAjax();
			mensajeactionOK(res.code);
		
		})
		.catch((res) => {
			mensajeFAIL(res.code);
		});

		setLang();
	
		resetearformrol();
	
}

// crearformSEARCHusuario() creado con jquery (except el option que utiliza javascript)
// Este formulario se crea usando la estructura básica del formulario html en gestionusuario.html
// Se crea un input image para actuar como un input submit y que el formulario haga el submit al pulsarlo
// Cuando esto pasa se llama a la funcion search_usuario en el onsubmit y se hace la comprobación de atributos
// cuando esta función devuelve true se ejecuta el action

function crearformSEARCHrol(){

	// reseteo el formulario
	resetearformrol();
	
	// creo la accion para el formulario y el onsubmit
	$("#id_form_rol").attr('action','javascript:SEARCHrolAjax()');
	//$("#id_form_rol").on('submit', search_rol);
	
	// pongo el campo de dni editable y le asocio la funcion para el onblur
	$("#id_id_rol").attr('readonly', false);
	$("#id_id_rol").blur(comprobar_id_rol_search);

	// pongo el campo de usuario editable y le asocio la funcion para el onblur
	$("#id_nombre_rol").attr('readonly',false)
	$("#id_nombre_rol").blur(comprobar_rol_name_search);

	$("#id_descrip_rol").attr('readonly',false)
	$("#id_descrip_rol").blur(comprobar_rol_descripcion_search);


	//creo un input de tipo image que el formulario va utilizar como si fuese un tipo input submit
	botonsubmit = document.createElement("img");
	botonsubmit.id = "id_boton_buscar_rol";
	botonsubmit.className = 'titulo_search';
	botonsubmit.src= "./images/search4.png";
	botonsubmit.width = '80';
	botonsubmit.height = '80';
	document.body.appendChild(botonsubmit);

	// coloco la imagen para submit en el formulario
	$("#id_boton_buscar_rol").on('click', search_rol);

	setLang(); 

	// se pone visible el formulario
	$("#id_caja_formulario_rol").attr('style', 'display: block');
}


function rolSEARCHAjaxPromesa(){

	insertacampo('id_form_rol','controlador', 'rol');
	insertacampo('id_form_rol','action', 'SEARCH');
	
	return new Promise(function(resolve, reject) {
		$.ajax({
			method: "POST",
			url: urlPeticionesAjax,
			data: $("#id_form_rol").serialize(),
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

async function SEARCHrolAjax() {
	
	var idioma = getCookie('lang');

	await rolSEARCHAjaxPromesa()
		.then((res) => {
			getListrol(res.resource);
		})
		.catch((res) => {
			mensajeFAIL(res.code);
		});

		setLang();

		resetearformrol();

}




function crearformSHOWCURRENTrol(id_rol, rol_name, rol_descripcion){
resetearformrol();
	
	
	$("#id_id_rol").attr('readonly','true')
	$("#id_id_rol").val(id_rol);

	$("#id_nombre_rol").attr('readonly','true')
	$("#id_nombre_rol").val(rol_name);

	$("#id_descrip_rol").attr('readonly','true')
	$("#id_descrip_rol").val(rol_descripcion);

	
	accionsubmit = document.createElement("button");
	accionsubmit.type = 'submit';
	accionsubmit.id = 'id_accionsubmit';
	$("#id_form_rol").append(accionsubmit);
	
	// se coloca la imagen en el button submit
	botonsubmit = document.createElement("img");
	botonsubmit.id = "id_boton_buscar_rol";
	botonsubmit.className = 'titulo_search';
	botonsubmit.src= "./images/detail4.png";
	botonsubmit.width = '80';
	botonsubmit.height = '80';
	$("#id_accionsubmit").append(botonsubmit);	

	setLang(); 
	
	$("#id_caja_formulario_rol").attr('style', 'display: block');
}



//Función ajax con promesas
function devolverrolesAjaxPromesa(){

	crearformoculto('form_generico','');
	insertacampo('form_generico','controlador', 'rol');
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

async function devolverrolesAjax() {
	
	var idioma = getCookie('lang');

	await devolverrolesAjaxPromesa()
		.then((res) => {
			
			getListrol(res.resource);
					
		})
		.catch((res) => {
			mensajeFAIL(res.code);
        	setLang(idioma);
		});

		document.getElementById('form_generico').remove();
}

async function pintarselectrolesAjax(deshabilitado = false, convacio = false, rol=null) {
	
	var idioma = getCookie('lang');

	await devolverrolesAjaxPromesa()
		.then((res) => {
			
			let rol_select = crearselect(convacio,'id_id_rol','id_rol', 'id_rol', 'nombre_rol', res.resource, rol);
			$("#caja_select_rol").append(rol_select);
			if (deshabilitado){
				$("#id_id_rol:not(:selected)").attr('disabled',true);
			}
		
		})
		.catch((res) => {
			mensajeFAIL(res.code);
        	setLang(idioma);
		});

		document.getElementById('form_generico').remove();
}





function getListrol(listarol){

	//listausuarios = devolverusuariosajax();
	
	$("#id_datosrol").html('');

	for (let rol of listarol){

		datosfila = "'"+rol.id_rol+"',"+"'"+rol.nombre_rol+"',"+"'"+rol.descrip_rol+"'";

		lineatabla = '<tr><td>'+rol['id_rol']+'</td><td>'+rol['nombre_rol']+'</td><td>'+rol['descrip_rol']+"</td>";
		botonedit = '<td><img class="titulo_edit" src="./images/edit4.png" onclick="crearformEDITrol('+datosfila+');" width="50" height="50"></td>';
		botondelete = '<td><img class="titulo_delete" src="./images/delete4.png" width="50" height="50" onclick="crearformDELETErol('+datosfila+');"></td>';
		botonshowcurrent = '<td><img class="titulo_showcurrent" src="./images/detail4.png" width="50" height="50" onclick="crearformSHOWCURRENTrol('+datosfila+')";></td>';

		lineatabla += botonedit+botondelete+botonshowcurrent+"</tr>";

		$("#id_datosrol").append(lineatabla);
	}

}