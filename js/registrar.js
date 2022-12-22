function comprobar_form_registrar(){
	if (comprobar_dni()&& comprobar_nombre()&& comprobar_apellido()&& comprobar_direccion()&& 
		comprobar_telefono()&& comprobar_email()&& comprobar_foto()&&comprobar_usuario() && comprobar_password('id_password')&& comprobar_password('id_passwordComp')&& comprobar_passwordiguales('id_password','id_passwordComp')){
		encriptarpassword();
		return true;
	}
	else{
		return false;
	}
	
}

function comprobar_user(){

	if (!size_minimo('id_user',3)){
		mensajeKO('id_user', 'usuario_corto_ko');
		return false;
	}
	if (!size_maximo('id_user',15)){
		mensajeKO('id_user', 'usuario_largo_ko');
		return false;
	}
	if (!letrassinacentoynumeros('id_user')){
		mensajeKO('id_user', 'usuario_formato_ko');
		return false;
	}

	mensajeOK('id_user');
	return true;

}

function comprobar_password(idElemento){
	if(idElemento=="id_passwordComp"){
		if (!size_minimo(idElemento,3)){
		
			mensajeKO(idElemento, 'contrasena_corto_ko','id_caja_error_contrasenaComp','id_texterror_contrasenaComp');
			return false;
		}
		if (!size_maximo(idElemento,15)){
			mensajeKO(idElemento, 'contrasena_largo_ko','id_caja_error_contrasenaComp','id_texterror_contrasenaComp');
			return false;
		}
		if (!letrassinacentoynumeros(idElemento)){
			mensajeKO(idElemento, 'contrasena_formato_ko','id_caja_error_contrasenaComp','id_texterror_contrasenaComp');
			return false;
		}
	
		mensajeOK(idElemento,'id_caja_error_contrasenaComp');
		return true;
			
	}else{
		if (!size_minimo(idElemento,3)){
		
			mensajeKO(idElemento, 'contrasena_corto_ko','id_caja_error_contrasena','id_texterror_contrasena');
			return false;
		}
		if (!size_maximo(idElemento,15)){
			mensajeKO(idElemento, 'contrasena_largo_ko','id_caja_error_contrasena','id_texterror_contrasena');
			return false;
		}
		if (!letrassinacentoynumeros(idElemento)){
			mensajeKO(idElemento, 'contrasena_formato_ko','id_caja_error_contrasena','id_texterror_contrasena');
			return false;
		}
	
		mensajeOK(idElemento,'id_caja_error_contrasena');
		return true;

	}

	

}
function comprobar_passwordiguales(p1,p2){
	paswword = document.getElementById(p1).value;
	paswwordComp = document.getElementById(p2).value;

	

 	if(paswword!=paswwordComp){
   		mensajeKO(p1, 'contrasenaComp_ko','id_caja_error_contrasenaComp','id_texterror_contrasenaComp');
   		mensajeKO(p2, 'contrasenaComp_ko','id_caja_error_contrasenaComp','id_texterror_contrasenaComp');
		return false;
  	}

  	

	mensajeOK(p2,'id_caja_error_contrasenaComp');
	return true;

}

//Función ajax con promesas
function registrarAjaxPromesa(){

	insertacampo('id_form_registrar','controlador', 'AUTH');
	insertacampo('id_form_registrar','action', 'REGISTRAR');
	
	return new Promise(function(resolve, reject) {
		$.ajax({
			method: "POST",
			url: "http://193.147.87.202/Back/index.php",
			data: $("#id_form_registrar").serialize(),
		}).done(res => {
			if (res.code != 'REGISTRAR_OK') {
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

async function registrar() {
	
	var idioma = getCookie('lang');

	await registrarAjaxPromesa()
		.then((res) => {
			setCookie('token', res.resource);
			setCookie('usuarioSistema', document.getElementById('id_usuario').value);
			window.location.href = "menu.html";
		})
		.catch((res) => {
			mensajeFAIL(res.code);
	    	//eliminarcampo('controlador');
	    	//eliminarcampo('action');
        	setLang(idioma);
		});
	
}




