function comprobar_form_login(){
	if (comprobar_usuario() && comprobar_password()){
		encriptarpassword();
		return true;
	}
	else{
		return false;
	}
	
}



function comprobar_password(){

	if (!size_minimo('id_password',3)){
		mensajeKO('id_password', 'contrasena_corto_ko','id_caja_error_contrasena','id_texterror_contrasena');
		return false;
	}
	if (!size_maximo('id_password',15)){
		mensajeKO('id_password', 'contrasena_largo_ko','id_caja_error_contrasena','id_texterror_contrasena');
		return false;
	}
	if (!letrassinacentoynumeros('id_password')){
		mensajeKO('id_password', 'contrasena_formato_ko','id_caja_error_contrasena','id_texterror_contrasena');
		return false;
	}

	mensajeOK('id_password','id_caja_error_contrasena');
	return true;

}

//Función ajax con promesas
function loginAjaxPromesa(){

	insertacampo('id_form_login','controlador', 'AUTH');
	insertacampo('id_form_login','action', 'LOGIN');
	
	return new Promise(function(resolve, reject) {
		$.ajax({
			method: "POST",
			url: "http://193.147.87.202/Back/index.php",
			data: $("#id_form_login").serialize(),
		}).done(res => {
			if (res.code != 'LOGIN_OK') {
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

async function login() {
	
	var idioma = getCookie('lang');

	await loginAjaxPromesa()
		.then((res) => {
			setCookie('token', res.resource);
			setCookie('usuarioSistema', document.getElementById("id_usuario").value);
			window.location.href = "menu.html";
		})
		.catch((res) => {
			mensajeFAIL(res.code);
	    	//eliminarcampo('controlador');
	    	//eliminarcampo('action');
        	setLang(idioma);
		});
	
}




