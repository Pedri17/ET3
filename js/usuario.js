// comprobar_form_usuario_add()
// funcion para validar el submit del formulario usuario para las acciones que no sean search

function comprobar_form_usuario_add(){


	if (comprobar_dni() && comprobar_usuario() ){
		return true;
	}
	else{
		return false;
	}
}

// comprobar_form_usuario_search()
// funcion para validar el submit del formulario de usuario para la accion search
function comprobar_form_usuario_search(){


	if (comprobar_dni_search() && comprobar_usuario_search() ){
		return true;
	}
	else{
		return false;
	}
}

// comprobar_usuario()
// funcion de validación de formato de usuario en acciones que no sean search
function comprobar_usuario(){

	if (!size_minimo('id_usuario',3)){
		mensajeKO('id_usuario', 'usuario_corto_ko','id_caja_error_user','id_texterror_user');
		return false;
	}
	if (!size_maximo('id_usuario',15)){
		mensajeKO('id_usuario', 'usuario_largo_ko','id_caja_error_user','id_texterror_user');
		return false;
	}
	if (!letrassinacentoynumeros('id_usuario')){
		mensajeKO('id_usuario', 'usuario_formato_ko','id_caja_error_user','id_texterror_user');
		return false;
	}

	mensajeOK('id_usuario','id_caja_error_user');
	return true;

}

// comprobar_usuario_search()
// funcion de validación de formato de usuario en search
function comprobar_usuario_search(){
	if (!size_maximo('id_usuario',15)){
		mensajeKO('id_usuario', 'usuario_corto_ko','id_caja_error_user','id_texterror_user');
		return false;
	}

	if (!letrassinacentoynumeros('id_usuario')){
		mensajeKO('id_usuario', 'usuario_formato_ko','id_caja_error_user','id_texterror_user');
		return false;
	}

	mensajeOK('id_usuario','id_caja_error_user');
	return true;
}

// comprobar_dni()
// funcion de validación de formato de dni en acciones que no sean search
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

// comprobar_dni_search()
// funcion de validación de formato de dni en search
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


function crearselect(convacio, id, name, valueoption, textoption, datos, itemseleccionado){
	
	rol_select = document.createElement("select");
	rol_select.name = name;
	rol_select.id = id;

	if (convacio){
		option_rol = document.createElement("option");
		option_rol.value = '';
		option_rol.text = '';
		option_rol.selected = true;
		rol_select.appendChild(option_rol);
	}

	for (let i=0;i<datos.length;i++){
		option_rol = document.createElement("option");
		option_rol.value = datos[i][valueoption];
		option_rol.text = datos[i][textoption];

		if (option_rol.value == itemseleccionado){
			option_rol.selected = true;
		}
		rol_select.appendChild(option_rol);
	}
	
	return rol_select;

}

// peticionADDusuarioBack()
// funcion que utilizariamos para hacer una solicitud a back para añadir un usuario
function peticionADDusuarioBack(){

	alert('peticion a back add');
	document.getElementById('id_form_usuario').submit();
	
}

// peticionEDITusuarioBack()
// funcion que utilizariamos para hacer una solicitud a back para editar un usuario
function peticionEDITusuarioBack(){

	alert('peticion a back edit');
	document.getElementById('id_form_usuario').submit();
	
}

// peticionDELETEusuarioBack()
// funcion que utilizariamos para hacer una solicitud a back para borrar un usuario
function peticionDELETEusuarioBack(){

	alert('peticion a back delete');
	document.getElementById('id_form_usuario').submit();
	
}


// devolverroles()
// funcion creada para devolver un array como el que recogeriamos de back al solicitar el contenido de la entidad rol

function devolverroles(){

	let rol1= new Array();
	rol1['id_rol']='0';
	rol1['nombre_rol']='admin';
	rol1['descrip_rol']='descripcion admin';
	
	let rol2= new Array();
	rol2['id_rol']='1';
	rol2['nombre_rol']='responsable';
	rol2['descrip_rol']='descripcion responsable';

	let rol3= new Array();
	rol3['id_rol']='2';
	rol3['nombre_rol']='coordinador';
	rol3['descrip_rol']='descripcion coordinador';
	
	datosroles = new Array();
	datosroles[0] = rol1;
	datosroles[1] = rol2;
	datosroles[2] = rol3;

	return datosroles;
}

// add_usuario()
// funcion a ser ejecutada cuando se completa el formulario y se hace submit
// comprueba los inputs para el add
// devuelve true si son correctos
function add_usuario(){

	if (comprobar_form_usuario_add()){
		ADDusuarioajax();
	}

}

// edit_usuario()
// funcion a ser ejecutada cuando se completa el formulario y se hace submit
// comprueba los inputs para el edit
// devuelve true si son correctos
function edit_usuario(){

	if (comprobar_form_usuario_add()){
		EDITusuarioajax();
	}

}

// delete_usuario()
// funcion a ser ejecutada cuando se completa el formulario al hacer submir
// llama a la funcion de petición pq no es necesario comprobación de formularios.

function delete_usuario(){

	return true;

}

// search_usuario()
// funcion a ser ejecutada cuando se completa el formulario
// comprueba los formatos de atributo del formulario y devuelve true para que se invoque el action
function search_usuario(){

	if (comprobar_form_usuario_search()){
		SEARCHusuarioAjax();
	}
}

// resetearformusuario()
// esta función se usa para inicializar el formulario y siempre este de la misma manera antes de entrar en las funciones que construyen los formularios de acciones
// aqui solo eliminamos el select. Podriamos tambien hacer un remove() en vez de desasignarlo
function resetearformusuario(){

	// eliminar el select
	selectviejorol = document.getElementById('id_id_rol');
	if (!(selectviejorol === null)){
		document.getElementById('caja_select_rol').removeChild(selectviejorol);
	}

	// quitar el readonly de los atributos
	$("#id_dni").attr('readonly',false);
	$("#id_dni").val('');
	$("#id_dni").on('blur',false);
	$("#id_usuario").attr('readonly',false);
	$("#id_usuario").val('');
	$("#id_usuario").on('blur',false);
	$("#id_id_rol").attr('readonly',false);
	$("#id_id_rol").val('');
	$("#id_id_rol").on('blur',false);

	// eliminar el boton de submit de formulario
	$("#id_boton_buscar_usuario").remove();

	// eliminar la imagen para terminar el formulario
	$("#id_imagen_enviar_form").remove();

	// eliminar el button para submit el formulario de search
	$("#id_accionsubmit").remove();

	// se pone visible el formulario
	$("#id_caja_formulario_usuario").attr('style', 'display: none');
	$("#id_caja_error_dni").attr('style', 'display: block');
    
	//cerrarMensajeKO('id_caja_error_dni','id_texterror_dni');
	
	//$("#id_caja_error_dni").attr('style', 'display: none');
	$("#id_caja_error_user").attr('style', 'display: block');
	$("#id_texterror_dni").removeClass();
	document.getElementById('id_texterror_dni').innerHTML = '';
	$("#id_caja_error_user").attr('style', 'display: none');
	
	



	setLang();

}

//Función ajax con promesas
function usuarioADDAjaxPromesa(){

	insertacampo('id_form_usuario','controlador', 'usuario');
	insertacampo('id_form_usuario','action', 'ADD');
	
	return new Promise(function(resolve, reject) {
		$.ajax({
			method: "POST",
			url: urlPeticionesAjax,
			data: $("#id_form_usuario").serialize(),
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

async function ADDusuarioajax() {
	
	var idioma = getCookie('lang');

	await usuarioADDAjaxPromesa()
		.then((res) => {
			
			if (res.code == 'SQL_OK'){
				res.code = 'add_usuario_OK';
			};
			devolverusuariosajax();
			mensajeactionOK(res.code);
			//
			//window.location.href = "gestionusuario.html";
		})
		.catch((res) => {
			mensajeFAIL(res.code);
		});

		setLang();

		resetearformusuario();
 
}
// crearformADDusuario() creado con javascript
// Este formulario se crea usando la estructura básica del formulario html en gestionusuario.html  
// Se crea una input image para actuar como un input submit y que el formulario 
// llame a la funcion add_usuario al pulsarla y esta llama a peticionADDusuarioBack que provoca el submit del formulario
// y se ejecuta el action

function crearformADDusuario(){

	// resetear el formulario
	resetearformusuario();

	// se rellena el action del formulario
	document.getElementById('id_form_usuario').action = 'javascript:ADDusuarioajax()';
	document.getElementById('id_form_usuario').onblur = add_usuario;
	
	// se coloca el onblur del dni y se pone a vacio el valor (o podriamos hacerlo en el resetearformusuario())
	document.getElementById('id_dni').onblur = comprobar_dni;
	document.getElementById('id_dni').value = '';

	// se coloca el onblur del usuario y se pone a vacio el valor (o podriamos hacerlo en el resetearformusuario())
	document.getElementById('id_usuario').onblur = comprobar_usuario;
	document.getElementById('id_usuario').value = '';

	// se invoca una función que crea el select de roles desde datos del back
	pintarselectrolesAjax(false, false,'');

	imagenenviarform = document.createElement("img");
	imagenenviarform.src = "./images/add4.png";
	imagenenviarform.id = "id_imagen_enviar_form";
	imagenenviarform.width = '80';
	imagenenviarform.height = '80';
	imagenenviarform.className = 'titulo_add';
	document.getElementById('id_caja_formulario_usuario').appendChild(imagenenviarform);
	// se coloca una función onclick que hará las comprobaciones y el submit
	document.getElementById('id_caja_formulario_usuario').onclick = add_usuario;

	// para actualizar idioma despues de incluir la imagen
	setLang();

	// se muestra el formulario
	document.getElementById('id_caja_formulario_usuario').style.display = 'block';

}

// crearformEDITusuario() creado con jquery
// Este formulario se crea usando la estructura básica del formulario html en gestionusuario.html  
// Se crea una input image para actuar como un input submit y que el formulario 
// llame a la funcion edit_usuario al pulsarla y esta llama a peticionEDITusuarioBack que provoca el submit del formulario
// y se ejecuta el action

function crearformEDITusuario(dni, usuario, rol){

	// resetear al formulario
	resetearformusuario();
	
	// se crea el action del formulario 
	$("#id_form_usuario").attr('action','javascript:EDITusuarioajax()');

	
	// se pone no editable el dni al ser clave primaria y no querer que se modifique por el usuario
	// se pone la funcion de comprobación aunque no sea necesaria y se pone el valor por defecto que se proporciona como parametro
	$("#id_dni").attr('readonly',true);
	$("#id_dni").blur(comprobar_dni);
	$("#id_dni").val(dni);

	// se pone la función de validación de usuario y se pone el valor por defecto proporcionado como parametro
	$("#id_usuario").on('blur',comprobar_usuario);
	$("#id_usuario").val(usuario);

	// se invoca una funcion para pintar el select de roles con datos del back
	pintarselectrolesAjax(false, false, rol);
	
		imagenenviarform = document.createElement("img");
	imagenenviarform.src = "./images/edit4.png";
	imagenenviarform.id = "id_imagen_enviar_form";
	imagenenviarform.width = '80';
	imagenenviarform.height = '80';
	imagenenviarform.className = 'titulo_edit';
	document.body.appendChild(imagenenviarform);
	// se coloca una función onclick que hará las comprobaciones y el submit
	$("#id_imagen_enviar_form").on('click', edit_usuario);

	setLang();
	// se muestra el formulario
	$("#id_caja_formulario_usuario").attr('style', 'display: block');
}
//Función ajax con promesas
function usuarioEDITAjaxPromesa(){
		crearformoculto('id_form_usuario', '');

	insertacampo('id_form_usuario','controlador', 'usuario');
	insertacampo('id_form_usuario','action', 'EDIT');
	
	return new Promise(function(resolve, reject) {
		$.ajax({
			method: "POST",
			url: urlPeticionesAjax,
			data: $("#id_form_usuario").serialize(),
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

async function EDITusuarioajax() {
	
	var idioma = getCookie('lang');

	await usuarioEDITAjaxPromesa()
		.then((res) => {
			
			if (res.code == 'SQL_OK'){
				res.code = 'edit_usuario_OK';
			};
			devolverusuariosajax();
			mensajeactionOK(res.code);
			//
			//window.location.href = "gestionusuario.html";
		})
		.catch((res) => {
			mensajeFAIL(res.code);
		});

		setLang();
		//document.getElementById('id_form_usuario').reset();
		resetearformusuario();
		//document.getElementById('controlador')
		//document.getElementById('id_imagen_enviar_form').remove(); 
}


// crearformDELETEusuario() creado con jquery
// Este formulario se crea usando la estructura básica del formulario html en gestionusuario.html  
// Se crea una input image para actuar como un input submit y que el formulario 
// llame a la funcion delete_usuario al pulsarla y esta llama a peticionDELETEusuarioBack que provoca el submit del formulario
// y se ejecuta el action

function crearformDELETEusuario(dni, usuario, rol){

	resetearformusuario();
	
	$("#id_form_usuario").attr('action','javascript:DELETEusuarioajax()');
	
	$("#id_dni").attr('readonly','true')
	$("#id_dni").val(dni);

	$("#id_usuario").attr('readonly','true')
	$("#id_usuario").val(usuario);

	// se invoca una función para crear el select de los roles
	pintarselectrolesAjax(true, false, rol);

	// se crea un button submit en el formulario
	accionsubmit = document.createElement("button");
	accionsubmit.type = 'submit';
	accionsubmit.id = 'id_accionsubmit';
	$("#id_form_usuario").append(accionsubmit);
	
	// se coloca la imagen en el button submit
	botonsubmit = document.createElement("img");
	botonsubmit.id = "id_boton_buscar_usuario";
	botonsubmit.className = 'titulo_search';
	botonsubmit.src= "./images/delete4.png";
	botonsubmit.width = '80';
	botonsubmit.height = '80';

	$("#id_accionsubmit").append(botonsubmit);


	setLang(); 
	
	$("#id_caja_formulario_usuario").attr('style', 'display: block');
}

//Función ajax con promesas
function usuarioDELETEAjaxPromesa(){

	insertacampo('id_form_usuario','controlador', 'usuario');
	insertacampo('id_form_usuario','action', 'DELETE');
	
	return new Promise(function(resolve, reject) {
		$.ajax({
			method: "POST",
			url: urlPeticionesAjax,
			data: $("#id_form_usuario").serialize(),
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

async function DELETEusuarioajax() {
	
	var idioma = getCookie('lang');

	await usuarioDELETEAjaxPromesa()
		.then((res) => {
			
			if (res.code == 'SQL_OK'){
				res.code = 'delete_usuario_OK';
			}
			mensajeactionOK(res.code);
			devolverusuariosajax();
		})
		.catch((res) => {
			mensajeFAIL(res.code);
		});

		setLang();
	
		resetearformusuario();
	
}
function crearformSEARCHusuario(){

	// reseteo el formulario
	resetearformusuario();
	
	// creo la accion para el formulario y el onsubmit
	$("#id_form_usuario").attr('action','javascript:SEARCHusuarioAjax()');
	$("#id_form_usuario").on('submit', search_usuario);
	
	// pongo el campo de dni editable y le asocio la funcion para el onblur
	$("#id_dni").attr('readonly', false);
	$("#id_dni").blur(comprobar_dni_search);

	// pongo el campo de usuario editable y le asocio la funcion para el onblur
	$("#id_usuario").attr('readonly',false)
	$("#id_usuario").blur(comprobar_usuario_search);

	// se llama a una funcion para crear el select de roles
	pintarselectrolesAjax(false, true, '');
		
	// se coloca una imagen para la accion de buscar
	imagenenviarform = document.createElement("img");
	imagenenviarform.src = "./images/search4.png";
	imagenenviarform.id = "id_imagen_enviar_form";
	imagenenviarform.width = '80';
	imagenenviarform.height = '80';
	imagenenviarform.className = 'titulo_edit';
	document.body.appendChild(imagenenviarform);
	// se coloca una función onclick que hará las comprobaciones y el submit
	$("#id_imagen_enviar_form").on('click', search_usuario);

	setLang();
	// se muestra el formulario
	$("#id_caja_formulario_usuario").attr('style', 'display: block');
}

//Función ajax con promesas
function usuarioSEARCHAjaxPromesa(){

	insertacampo('id_form_usuario','controlador', 'usuario');
	insertacampo('id_form_usuario','action', 'SEARCH');
	
	return new Promise(function(resolve, reject) {
		$.ajax({
			method: "POST",
			url: urlPeticionesAjax,
			data: $("#id_form_usuario").serialize(),
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

async function SEARCHusuarioAjax() {
	
	var idioma = getCookie('lang');

	await usuarioSEARCHAjaxPromesa()
		.then((res) => {
			getListUsuarios(res.resource);
		})
		.catch((res) => {
			mensajeFAIL(res.code);
		});

		setLang();

		resetearformusuario();

}

function crearformSHOWCURRENTusuario(dni, usuario, rol){

	// reseteo el formulario
	resetearformusuario();

	$("#id_form_usuario").attr('action','javascript:cerrarSHOWCURRENT()');
	
	$("#id_dni").attr('readonly','true')
	$("#id_dni").val(dni);

	$("#id_usuario").attr('readonly','true')
	$("#id_usuario").val(usuario);

	pintarselectrolesAjax(true, false, rol);

	// se crea un elemento button submit en el formulario
	accionsubmit = document.createElement("button");
	accionsubmit.type = 'submit';
	accionsubmit.id = 'id_accionsubmit';
	$("#id_form_usuario").append(accionsubmit);
	
	// se coloca una imagen para button anterior en el formulario
	botonsubmit = document.createElement("img");
	botonsubmit.id = "id_boton_buscar_usuario";
	botonsubmit.className = 'titulo_search';
	botonsubmit.src= "./images/detail4.png";
	botonsubmit.width = '80';
	botonsubmit.height = '80';
	$("#id_accionsubmit").append(botonsubmit);	

	setLang(); 

	$("#id_caja_formulario_usuario").attr('style', 'display: block');
	
	
}

function cerrarSHOWCURRENT(){
	$("#id_caja_formulario_usuario").attr('style', 'display: none');
	//$("#id_imagen_enviar_form").attr('style', 'display: none');
}


//Función ajax con promesas
function devolverusuariosAjaxPromesa(){

	crearformoculto('form_generico','');
	insertacampo('form_generico','controlador', 'usuario');
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

async function devolverusuariosajax() {
	
	var idioma = getCookie('lang');

	await devolverusuariosAjaxPromesa()
		.then((res) => {
			
			getListUsuarios(res.resource);
		
		})
		.catch((res) => {
			mensajeFAIL(res.code);
        	setLang(idioma);
		});

		document.getElementById('form_generico').remove();
}


function getListUsuarios(listausuarios){

	$("#id_datosusuarios").html('');

	// se cargan las filas nuevas
	for (let usuario of listausuarios){

		datosfila = "'"+usuario.dni+"',"+"'"+usuario.usuario+"',"+"'"+usuario.id_rol.id_rol+"'";

		lineatabla = '<tr><td>'+usuario['dni']+'</td><td>'+usuario['usuario']+'</td><td>'+usuario['id_rol'].nombre_rol+"</td>";
		botonedit = '<td><img class="titulo_edit" src="./images/edit4.png" onclick="crearformEDITusuario('+datosfila+');" width="50" height="50"></td>';
		botondelete = '<td><img class="titulo_delete" src="./images/delete4.png" width="50" height="50" onclick="crearformDELETEusuario('+datosfila+');"></td>';
		botonshowcurrent = '<td><img class="titulo_showcurrent" src="./images/detail4.png" width="50" height="50" onclick="crearformSHOWCURRENTusuario('+datosfila+')";></td>';

		lineatabla += botonedit+botondelete+botonshowcurrent+"</tr>";

		$("#id_datosusuarios").append(lineatabla);
	}

}

