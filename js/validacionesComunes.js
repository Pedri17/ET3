
function incluircabecera() {

	$("#id_caja_superior").html = "";
	let incluir = "<table id='id_tabla_idiomas'>" +
		"<tr>" +
		"<td onclick=\"setLang(\'ES\');\">ES</td>" +
		"<td onclick=\"setLang(\'EN\');\">EN</td>" +
		"<td onclick=\"setLang(\'GA\');\">GA</td>" +
		"</tr>" +
		"</table>";

	$("#id_caja_superior").append(incluir);

}

function redirigir() {

	if ((getCookie('usuarioSistema') === null) || (getCookie('usuarioSistema') === '')) {
		window.location.href = "login.html";
	}
	else {
		window.location.href = "menu.html";
	}
}

function esta_autenticado() {
	if ((getCookie('usuarioSistema') === null) || (getCookie('usuarioSistema') === '')) {
		window.location.href = "login.html";
	}
	else {
		let temp = "Usuario :" + getCookie('usuarioSistema');
		//temp += "<br><a href='javascript:desconectar();'>Desconectar</a>";
		//temp += "<br><button class='btndesconectar titulo_desconectar'href='javascript:desconectar();'></button>";
		
		$("#id_caja_superior").append(temp);
	}

}

function deleteAllCookies() {
	var cookies = document.cookie.split(";");
	for (var i = 0; i < cookies.length; i++) {
		var cookie = cookies[i];
		var eqPos = cookie.indexOf("=");
		var name = eqPos > -1 ? cookie.substr(0, eqPos) : cookie;
		setCookie(name, '');
	}
}

function desconectar() {
	deleteAllCookies();
	window.location.href = "login.html";
}



/**Función para crear un formulario oculto*/
function crearformoculto(name, action) {

	if ($("#" + name).length == 0) {

		var formu = document.createElement('form');
		document.body.appendChild(formu);
		formu.name = name;
		formu.action = action;
		formu.id = name;
		formu.style.display = "none";

	}

}


function ponervisible(idElemento) {
	document.getElementById(idElemento).style.display = 'block';
}


function ponerinvisibleerror() {
	document.getElementById('id_caja_error').style.display = 'none';
}

function ponerinvisibleformusuario() {
	document.getElementById('id_caja_formulario_usuario').style.display = 'none';
}
function ponerinvisibleformuser() {
	document.getElementById('id_caja_formulario_user').style.display = 'none';
}
function ponerinvisibleformpersona() {
	document.getElementById('id_caja_formulario_persona').style.display = 'none';
}
function ponerinvisibleformrol() {
	document.getElementById('id_caja_formulario_rol').style.display = 'none';
}
function ponerinvisibleformaccion() {
	document.getElementById('id_caja_formulario_accion').style.display = 'none';
}
function ponerinvisibleformfuncionalidad() {
	document.getElementById('id_caja_formulario_funcionalidad').style.display = 'none';
}
function ponerinvisibleformrolaccionfuncionalidad() {
	document.getElementById('id_caja_formulario_rolaccionfuncionalidad').style.display = 'none';
}


function mensajeKO(idElemento, codigoerror,codigocajaerror,textoerror) {
	cerrarMensajeKO(codigocajaerror,textoerror);

	document.getElementById(textoerror).classList.add(codigoerror);
	//document.getElementById('id_texterror').innerHTML = codigoerror;
	document.getElementById(codigocajaerror).style.display = 'block';
	document.getElementById(idElemento).style.borderColor = "#ff0000";
	setLang();

}

function cerrarMensajeKO(codigocajaerror,textoerror) {

	/*codigos = String(document.getElementById('id_texterror'));
	codigos = codigos.split(' ');
	for (let codigo of codigos){
		document.getElementById('id_texterror').classList.remove(codigo);
	}
	document.getElementById('id_texterror').innerHTML = '';
	document.getElementById('id_caja_error').style.borderColor = "";
	document.getElementById('id_caja_error').style.display = 'none';*/
	if (document.getElementById(textoerror).classList.length > 0) {
		//document.getElementById(textoerror).classList.remove(document.getElementById(textoerror).classList);
		//document.getElementById(textoerror).setAttribute("class","");
		$("#"+textoerror).removeClass();
		document.getElementById(textoerror).innerHTML = '';


	}

	document.getElementById(codigocajaerror).style.display = 'none';

}

function mensajeactionOK(codigo,codigocajaerror) {
	cerrarMensajeKO(codigocajaerror);

	//document.getElementById('id_texterror').innerHTML = codigo;
	document.getElementById('id_texterror').classList.add(codigo);
	document.getElementById(codigocajaerror).style.borderColor = "#00e600";
	document.getElementById(codigocajaerror).style.display = 'block';
	setLang();

}

function mensajeFAIL(codigoerror) {
	cerrarMensajeKO('id_caja_error','id_texterror');

	//document.getElementById('id_texterror').innerHTML = codigoerror;
	document.getElementById('id_texterror').classList.add(codigoerror);
	document.getElementById('id_caja_error').style.display = 'block';
	setLang();

}

/**Función para mostrar mensaje de error cuando fallan las peticiones ajax*/
function mensajeHTTPFAIL(status) {
	var idioma = getCookie('lang');

	if (status === 500) {
		mensajeFAIL("MENSAJE_ERROR_INTERNO");
	} else if (status === 403) {
		mensajeFAIL("ERROR_AUTENTICACION");
	} else if (status === 0) {
		mensajeFAIL("ERR_CONNECTION_REFUSED");
	}

	setLang();
}

/**Función para insertar campos en el formulario a mayores*/
function insertacampo(idform, name, value) {

	formulario = document.getElementById(idform);
	var input = document.createElement('input');
	input.type = 'hidden';
	input.name = name;
	input.value = value;
	input.className = name;
	formulario.appendChild(input);

}

function mensajeOK(idElemento,codigocajaerror,textoerror) {

	//document.getElementById('id_texterror').innerHTML = '';
	document.getElementById(codigocajaerror).style.display = 'none';
	document.getElementById(idElemento).style.borderColor = "#00e600";

}


function size_minimo(idElemento, longitudminima) {

	let elemento;
	elemento = document.getElementById(idElemento).value;
	if (elemento.length < longitudminima) {
		return false;
	}
	else {
		return true;
	}
}

function size_maximo(idElemento, longitudmaxima) {

	elemento = document.getElementById(idElemento).value;
	if (elemento.length > longitudmaxima) {
		return false;
	}
	else {
		return true;
	}
}

function letrassinacentoynumeros(idElemento) {

	elemento = document.getElementById(idElemento).value;

	return /^[a-zA-Z0-9]*$/.test(elemento);
}
function letrassinacento(idElemento) {

	elemento = document.getElementById(idElemento).value;

	return /^[a-zA-Z]*$/.test(elemento);
}
function letrasacentoguionespacio(idElemento) {

	elemento = document.getElementById(idElemento).value;

	return /^[a-zA-Z\u00C0-\u017F\s]*$/.test(elemento);
}

function letrasacentoguionespacionumerosymas(idElemento) {

	elemento = document.getElementById(idElemento).value;

	return /^[\ \-a-zA-Z´ªº0-9]*$/.test(elemento);
}

function soloNumeros(idElemento) {



	elemento = document.getElementById(idElemento).value;

	return /^[0-9]*$/.test(elemento);


}
function soloNumerosEspana(idElemento) {



	elemento = document.getElementById(idElemento).value;

	return /^[678][0-9]{8}$/.test(elemento);


}
function letrassinacentoextension(idElemento) {

	elemento = document.getElementById(idElemento).value;

	return /^[a-zA-Z]*\.jpg$/.test(elemento) || /^[a-zA-Z]*\.png$/.test(elemento);

}
function cualquierExceptoRol(idElemento) {

	elemento = document.getElementById(idElemento).value;

	return /^[^=<>$#{}[\]]*$/.test(elemento);
}

function comprobar_dniNumOk(idElemento) {



	elemento = document.getElementById(idElemento).value;

	return /^[0-9]{8}.$/.test(elemento);


}



function comprobar_dniLetraFinalOK(idElemento) {



	elemento = document.getElementById(idElemento).value;

	return /^[0-9]{8}[a-zA-Z]$/.test(elemento);


}

function comprobar_dniFormatoOk(idElemento) {

	letras = 'TRWAGMYFPDXBNJZSQVHLCKE';
	elemento = document.getElementById(idElemento).value;
	numDni = elemento.substr(0, elemento.length - 1);
	letra = elemento.substr(elemento.length - 1, 1).toUpperCase();

	return letras.charAt(numDni % 23) == letra;


}



function comprobar_dniSoloUnaLetraOk_search(idElemento) {

	dni = document.getElementById(idElemento).value;

	return /^[0-9]*[a-zA-Z]*[0-9]*$/.test(dni);

}

function comprobar_dniLetraDespuesDelNumeroOK_search(idElemento) {

	dni = document.getElementById(idElemento).value;

	return /^[0-9]*[a-zA-Z]*$/.test(dni);

}


function encriptarpassword() {
	document.getElementById('id_password').value = hex_md5(document.getElementById('id_password').value);
	return true;
}