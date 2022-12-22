function comprobar_form_cambiocontrasena(){
	if (comprobar_dni('id_dni')&& comprobar_password('id_contrasena')&& comprobar_password('id_passwordComp')&& comprobar_passwordiguales('id_contrasena','id_passwordComp')){//&& comprobar_password('id_passwordComp')&& comprobar_passwordiguales('id_contrasena','id_passwordComp')
		encriptar();
		return true;
	}
	else{
		return false;
	}
	
}



/*function comprobar_antiguadistincnueva(){
	antigua = document.getElementById('id_contrasena').value;
	nueva = document.getElementById('id_password').value;

	

 	if(antigua==nueva){
   		mensajeKO('id_contrasena', 'contrasenaantiguanueva_ko');
   		mensajeKO('id_password', 'contrasenaantiguanueva_ko');
		return false;
  	}

  	

	mensajeOK('id_contrasena');
	return true;

}*/
function encriptar(){
	document.getElementById('id_contrasena').value = hex_md5(document.getElementById('id_contrasena').value);
	return true;
}

function crearformCambiopassword(){
	
	$("#id_form_cambiocontrasena").attr('action','javascript:cambiocontrasena');
	$("#id_form_cambiocontrasena").on('submit', search_usuario);
	
	// pongo el campo de dni editable y le asocio la funcion para el onblur
	//$("#id_dni").attr('readonly', true);
	

	// pongo el campo de usuario editable y le asocio la funcion para el onblur
	$("#id_contrasena").attr('readonly',false);
	$("#id_contrasena").blur(comprobar_password("id_contrasena"));

		
	// se crea un elemento button submit en el formulario
	accionsubmit = document.createElement("button");
	accionsubmit.type = 'submit';
	accionsubmit.id = 'id_accionsubmit';
	$("#id_form_usuario").append(accionsubmit);
	
	
	

	setLang(); 

	
}

function crearformSEARCHusuario(){

	
	// creo la accion para el formulario y el onsubmit
	$("#id_caja_formulario_user").attr('style', 'display: block');
	$("#id_form_user").on('submit', search_usuario);
	
	
	// pongo el campo de usuario editable y le asocio la funcion para el onblur
	$("#id_usuario").attr('readonly',true);
	var usuario = getCookie('usuarioSistema');
	
	$("#id_usuario").val(usuario);
	
	
	$("#id_caja_formulario_user").attr('style', 'display: block');
}

//Función ajax con promesas
function dniSEARCHAjaxPromesa(){
 var usuario = getCookie('usuarioSistema');
	insertacampo('id_form_user','controlador', 'usuario');
	insertacampo('id_form_user','action', 'SEARCH');
	
	return new Promise(function(resolve, reject) {
		$.ajax({
			method: "POST",
			url: urlPeticionesAjax,
			data: $("#id_form_user").serialize(),
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


async function SEARCHdniAjax() {
	
	var idioma = getCookie('lang');

	await dniSEARCHAjaxPromesa()
		.then((res) => {
			getDni(res.resource);
		})
		.catch((res) => {
			mensajeFAIL(res.code);
		});



		

}
function getDni(listausuarios){



	// se cargan las filas nuevas
	for (let usuario of listausuarios){


		datosfila = "'"+usuario.dni+"',"+"'"+usuario.usuario+"',"+"'"+usuario.id_rol.id_rol+"'";

		if(usuario.usuario==getCookie('usuarioSistema')){
	    var input = document.createElement("input");
    	input.type = "text";
    	input.id = 'id_dni';
		input.name = 'dni';
		input.value = usuario.dni;
		


$("#caja_dni").append(input);
$("#id_dni").attr('readonly',true);
		

		}


		//lineatabla = '<label class="dni">"+ "</label>"+ "<input type='text' id='id_dni' name='contrasena' onblur='comprobar_dni("id_dni");'>"+"</input>";

		

     
	}



}

//Función ajax con promesas
function cambiocontrasenaAjaxPromesa(){

	insertacampo('id_form_cambiocontrasena','controlador', 'AUTH');
	insertacampo('id_form_cambiocontrasena','action', 'CAMBIAR_CONTRASENA');
	
	return new Promise(function(resolve, reject) {
		$.ajax({
			method: "POST",
			url: "http://193.147.87.202/Back/index.php",
			data: $("#id_form_cambiocontrasena").serialize(),
		}).done(res => {
			if (res.code != 'CAMBIAR_contrasena_OK') {
				reject(res);
			}
			else{
				resolve(res);
			}
		})
		.fail( function( jqXHR ) {
			mensajeFAIL(jqXHR.status);
		});
	});
}

async function cambiocontrasena() {
	
	var idioma = getCookie('lang');

	await cambiocontrasenaAjaxPromesa()
		.then((res) => {
			setCookie('token', res.resource);
			
			window.location.href = "menu.html";
		})
		.catch((res) => {
			mensajeFAIL(res.code);
	    	//eliminarcampo('controlador');
	    	//eliminarcampo('action');
        	setLang(idioma);
		});
	
}




