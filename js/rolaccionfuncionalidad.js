
//Función ajax con promesas
function devolverrolesAjaxroalccionfuncionalidadPromesa() {

    crearformoculto('form_roles', '');
    insertacampo('form_roles', 'controlador', 'rol');
    insertacampo('form_roles', 'action', 'SEARCH');

    return new Promise(function (resolve, reject) {
        $.ajax({
            method: "POST",
            url: "http://193.147.87.202/Back/index.php",
            data: $("#form_roles").serialize(),
        }).done(res => {
            if (res.ok != true) {
                reject(res);
            }
            else {
                resolve(res);
            }
        })
            .fail(function (jqXHR) {
                mensajeHTTPFAIL(jqXHR.status);
            });
    });
}

async function devolverrolesajaxrolaccionfuncionalidad() {

    var idioma = getCookie('lang');

    await devolverrolesAjaxroalccionfuncionalidadPromesa()
        .then((res) => {
            pintartitulotabla(res.resource);

        })
        .catch((res) => {
            mensajeFAIL(res.code);
            setLang();
        });

    document.getElementById('form_roles').remove();
}


let roles;

function pintartitulotabla(listaroles) {

    roles = listaroles;
    base = '<th class="funcionalidad"></th><th class="accion"></th>';
    $("#id_titulo").append(base);
    setLang();
    for (let rol of listaroles) {
        titulo = "<th>" + rol.nombre_rol + "</th>"

        $("#id_titulo").append(titulo);
    }
    $("#id_titulo").append("</tr>");

}



function pintartablarolaccionfuncionalidad() {
    ponerinvisibleformrolaccionfuncionalidad();
    document.getElementById('id_titulo').innerHTML = "";
    document.getElementById('id_datos').innerHTML = "";
    devolverrolesajaxrolaccionfuncionalidad();
    devolverrolaccionfuncionalidadAjax();
}




//Función ajax con promesas
function devolverrolaccionfuncionalidadAjaxPromesa() {

    crearformoculto('form_traer_rolaccionfuncionalidad', '');
    insertacampo('form_traer_rolaccionfuncionalidad', 'controlador', 'rolaccionfuncionalidad');
    insertacampo('form_traer_rolaccionfuncionalidad', 'action', 'SEARCH');

    return new Promise(function (resolve, reject) {
        $.ajax({
            method: "POST",
            url: "http://193.147.87.202/Back/index.php",
            data: $("#form_traer_rolaccionfuncionalidad").serialize(),
        }).done(res => {
            if (res.ok != true) {
                reject(res);
            }
            else {
                resolve(res);
            }
        })
            .fail(function (jqXHR) {
                mensajeHTTPFAIL(jqXHR.status);
            });
    });
}

async function devolverrolaccionfuncionalidadAjax() {

    var idioma = getCookie('lang');

    await devolverrolaccionfuncionalidadAjaxPromesa()
        .then((res) => {
            pintardatosrolaccionfuncionalidad(res.resource);

        })
        .catch((res) => {
            mensajeFAIL(res.code);
            setLang();
        });

    document.getElementById('form_traer_rolaccionfuncionalidad').remove();
}


async function pintardatosrolaccionfuncionalidad(listarolaccionfuncionlalidad) {

    let funPrev = listarolaccionfuncionlalidad[0].id_funcionalidad.id_funcionalidad;
    let accPrev = listarolaccionfuncionlalidad[0].id_accion.id_accion;

    let j = 0; 
    let i = 0;  

    let datosfila = '<tr><td>' + listarolaccionfuncionlalidad[0].id_funcionalidad.nombre_funcionalidad + '</td><td>' + listarolaccionfuncionlalidad[0].id_accion.nombre_accion + '</td>';

    while (i < listarolaccionfuncionlalidad.length) {

        funAct = listarolaccionfuncionlalidad[i].id_funcionalidad.id_funcionalidad;
        accAct = listarolaccionfuncionlalidad[i].id_accion.id_accion;

        if (funAct == funPrev && accAct == accPrev) {
            if (listarolaccionfuncionlalidad[i].id_rol.id_rol == roles[j].id_rol) {
                //Se añade en caso de que exista para ese rol
                texto = '<td>' + '<img src="./images/masoscuro.jpg" width="20" height="20">' + '<b>&emsp;</b>' + '<img src="./images/menosbrilla.jpg" width="20" height="20" onclick="DELETERafAjax(' + listarolaccionfuncionlalidad[i].id_rol.id_rol + ',' + listarolaccionfuncionlalidad[i].id_accion.id_accion + ',' + listarolaccionfuncionlalidad[i].id_funcionalidad.id_funcionalidad + ');">' + '</td>';
                datosfila += texto;
                j++;
                i++;
            } else {
                texto = '<td>' + '<img src="./images/masbrilla.jpg" width="20" height="20" onclick="ADDRafAjax(' + roles[j].id_rol + ',' + listarolaccionfuncionlalidad[i].id_accion.id_accion + ',' + listarolaccionfuncionlalidad[i].id_funcionalidad.id_funcionalidad + ');">' + '<b>&emsp;</b>' + '<img src="./images/menososcuro.jpg" width="20" height="20">' + '</td>';
                datosfila += texto;
                j++;
            }
        } else {
            for (j; j < roles.length; j++) {
                texto = '<td>' + '<img src="./images/masbrilla.jpg" width="20" height="20" onclick="ADDRafAjax(' + roles[j].id_rol + ',' + listarolaccionfuncionlalidad[i - 1].id_accion.id_accion + ',' + listarolaccionfuncionlalidad[i - 1].id_funcionalidad.id_funcionalidad + ');">' + '<b>&emsp;</b>' + '<img src="./images/menososcuro.jpg" width="20" height="20">' + '</td>';
                datosfila += texto;
            }
            datosfila += '</tr>';
            $("#id_datos").append(datosfila)
            datosfila = '<tr><td>' + listarolaccionfuncionlalidad[i].id_funcionalidad.nombre_funcionalidad + '</td><td>' + listarolaccionfuncionlalidad[i].id_accion.nombre_accion + '</td>';
            j = 0;
            funPrev = listarolaccionfuncionlalidad[i].id_funcionalidad.id_funcionalidad;
            accPrev = listarolaccionfuncionlalidad[i].id_accion.id_accion;
        }
    }

    while (j < roles.length) {
        textos = '<td>' + '<img src="./images/masbrilla.jpg" width="20" height="20" onclick="ADDRafAjax(' + roles[j].id_rol + ',' + listarolaccionfuncionlalidad[i - 1].id_accion.id_accion + ',' + listarolaccionfuncionlalidad[i - 1].id_funcionalidad.id_funcionalidad + ');">' + '<b>&emsp;</b>' + '<img src="./images/menososcuro.jpg" width="20" height="20">' + '</td>';
        datosfila += textos;
        j++;
    }
    datosfila += '</tr>';
    $("#id_datos").append(datosfila);
   
}






//Función ajax con promesas
function ADDRafAjaxPromesa(id_rol, id_accion, id_funcionalidad) {

    crearformoculto('form_generico', '');
    insertacampo('form_generico', 'controlador', 'rolaccionfuncionalidad');
    insertacampo('form_generico', 'action', 'ADD');
    insertacampo('form_generico', 'id_rol', id_rol);
    insertacampo('form_generico', 'id_accion', id_accion);
    insertacampo('form_generico', 'id_funcionalidad', id_funcionalidad);

    return new Promise(function (resolve, reject) {
        $.ajax({
            method: "POST",
            url: "http://193.147.87.202/Back/index.php",
            data: $("#form_generico").serialize(),
        }).done(res => {
            if (res.ok != true) {
                reject(res);
            }
            else {
                resolve(res);
            }
        })
            .fail(function (jqXHR) {
                alert('fail!!!:' + jqXHR.status);
                mensajeHTTPFAIL(jqXHR.status);
            });
    }
    )
}


async function ADDRafAjax(id_rol, id_accion, id_funcionalidad) {

    var idioma = getCookie('lang');

    await ADDRafAjaxPromesa(id_rol, id_accion, id_funcionalidad)
        .then((res) => {

            if (res.code = 'SQL_OK') {
                res.code = 'add_rolaccionfuncionalidad_OK';
            }
           pintartablarolaccionfuncionalidad();
            mensajeactionOK(res.code);
        })
        .catch((res) => {
            mensajeFAIL(res.code);
        });
    setLang();
    document.getElementById('form_generico').remove();

}






function DELETERafAjaxPromesa(id_rol, id_accion, id_funcionalidad) {

    crearformoculto('form_generico', '');
    insertacampo('form_generico', 'controlador', 'rolaccionfuncionalidad');
    insertacampo('form_generico', 'action', 'DELETE');
    insertacampo('form_generico', 'id_rol', id_rol);
    insertacampo('form_generico', 'id_accion', id_accion);
    insertacampo('form_generico', 'id_funcionalidad', id_funcionalidad);
    return new Promise(function (resolve, reject) {
        $.ajax({
            method: "POST",
            url: "http://193.147.87.202/Back/index.php",
            data: $("#form_generico").serialize(),
        }).done(res => {
            if (res.ok != true) {
                reject(res);
            }
            else {
                resolve(res);
            }
        })
            .fail(function (jqXHR) {
                alert('fail!!!:' + jqXHR.status);
                mensajeHTTPFAIL(jqXHR.status);
            });
    }
    )
}


async function DELETERafAjax(id_rol, id_accion, id_funcionalidad) {

    var idioma = getCookie('lang');

    await DELETERafAjaxPromesa(id_rol, id_accion, id_funcionalidad)
        .then((res) => {

            if (res.code = 'SQL_OK') {
                res.code = 'delete_rolaccionfuncionalidad_OK';
            }
            pintartablarolaccionfuncionalidad();
            mensajeactionOK(res.code);
        })
        .catch((res) => {
            mensajeFAIL(res.code);
        });
    setLang();
    document.getElementById('form_generico').remove();
}




function resetearformraf() {

    // eliminar el select
    selectviejorol = document.getElementById('id_id_rol');
    if (!(selectviejorol === null)) {
        document.getElementById('caja_select_rol').removeChild(selectviejorol);
    }

    selectviejofuncionalidad = document.getElementById('id_id_funcionalidad');
    if (!(selectviejofuncionalidad === null)) {
        document.getElementById('caja_select_fun').removeChild(selectviejofuncionalidad);
    }

    selectviejoaccion = document.getElementById('id_id_accion');
    if (!(selectviejoaccion === null)) {
        document.getElementById('caja_select_acc').removeChild(selectviejoaccion);
    }

    $("#id_id_rol").attr('readonly', false);
    $("#id_id_rol").val('');
    $("#id_id_rol").on('blur', false);

    $("#id_id_funcionalidad").attr('readonly', false);
    $("#id_id_funcionalidad").val('');
    $("#id_id_funcionalidad").on('blur', false);

    $("#id_id_accion").attr('readonly', false);
    $("#id_id_accion").val('');
    $("#id_id_accion").on('blur', false);

    // eliminar el boton de submit de formulario
    $("#id_boton_buscar_usuario").remove();

    // eliminar la imagen para terminar el formulario
    $("#id_imagen_enviar_form").remove();

    // eliminar el button para submit el formulario de search
    $("#id_accionsubmit").remove();

    // se pone visible el formulario
    $("#id_caja_formulario_usuario").attr('style', 'display: none');

    setLang();

}



function crearformSEARCHraf() {

    // resetear el formulario
    resetearformraf();

    // se rellena el action del formulario
    document.getElementById('id_form_rolaccionfuncionalidad').action = 'javascript:crearTablaRafSEARCH()';

    // se invoca una función que crea el select de roles desde datos del back
    pintarselectrolesAjax(false, true, '');
    pintarselectfuncionalidadesAjax(false, true, '');
    pintarselectaccionesAjax(false, true, '');


    // se coloca una imagen para la accion de editar
    imagenenviarform = document.createElement("img");
    imagenenviarform.src = "./images/search4.png";
    imagenenviarform.id = "id_imagen_enviar_form";
    imagenenviarform.width = '80';
    imagenenviarform.height = '80';
    imagenenviarform.className = 'titulo_search';
    document.body.appendChild(imagenenviarform);
    // se coloca una función onclick que hará las comprobaciones y el submit
    document.getElementById('id_imagen_enviar_form').onclick = crearTablaRafSEARCH;

    // para actualizar idioma despues de incluir la imagen
    setLang();

    // se muestra el formulario
    document.getElementById('id_caja_formulario_rolaccionfuncionalidad').style.display = 'block';

}



//Función ajax con promesas
function SEARCHrafAjaxPromesa() {

    crearformoculto('form_generico', '');
    insertacampo('form_generico', 'controlador', 'rolaccionfuncionalidad');
    insertacampo('form_generico', 'action', 'SEARCH');
    insertacampo('form_generico', 'id_rol', document.getElementById('id_id_rol').value);
    insertacampo('form_generico', 'id_funcionalidad', document.getElementById('id_id_funcionalidad').value);
    insertacampo('form_generico', 'id_accion', document.getElementById('id_id_accion').value);

    return new Promise(function (resolve, reject) {
        $.ajax({
            method: "POST",
            url: "http://193.147.87.202/Back/index.php",
            data: $("#form_generico").serialize(),
        }).done(res => {
            if (res.ok != true) {
                reject(res);
            }
            else {
                resolve(res);
            }
        })
            .fail(function (jqXHR) {
                alert('fail!!!:' + jqXHR.status);
                mensajeHTTPFAIL(jqXHR.status);
            });
    }
    )
}


async function SEARCHRafAjax() {

    var idioma = getCookie('lang');

    await SEARCHrafAjaxPromesa()
        .then((res) => {

            if (res.code = 'SQL_OK') {
                res.code = 'search_rolaccionfuncionalidad_OK';
            }
            pintardatosrolaccionfuncionalidad(res.resource);
        })
        .catch((res) => {
            mensajeFAIL(res.code);
        });
    setLang();
    document.getElementById('form_generico').remove();
}


function crearTablaRafSEARCH() {
    document.getElementById('id_titulo').innerHTML = '';
    document.getElementById('id_datos').innerHTML = '';
    devolverrolesajaxrolaccionfuncionalidad();
    SEARCHRafAjax();
}


async function pintarselectfuncionalidadesAjax(deshabilitado = false, convacio = false, funcionalidad=null) {
	var idioma = getCookie('lang');

	await devolverfuncionalidadesAjaxPromesa()
		.then((res) => {
			let funcionalidad_select = crearselect(convacio,'id_id_funcionalidad','id_funcionalidad', 'id_funcionalidad', 'nombre_funcionalidad', res.resource, funcionalidad);
			$("#caja_select_fun").append(funcionalidad_select);
			if (deshabilitado){
				$("#id_id_funcionalidad:not(:selected)").attr('disabled',true);
			}
		
		})
		.catch((res) => {
            alert(res.rescode);
			mensajeFAIL(res.code);
        	setLang(idioma);
		});

		//document.getElementById('form_devolver_funcionalidades').remove();
}

async function pintarselectaccionesAjax(deshabilitado = false, convacio = false, accion=null) {
	var idioma = getCookie('lang');

	await devolveraccionAjaxPromesa()
		.then((res) => {
			let accion_select = crearselect(convacio,'id_id_accion','id_accion', 'id_accion', 'nombre_accion', res.resource, accion);
			$("#caja_select_acc").append(accion_select);
			if (deshabilitado){
				$("#id_id_accion:not(:selected)").attr('disabled',true);
			}
		
		})
		.catch((res) => {
			mensajeFAIL(res.code);
        	setLang(idioma);
		});

		//document.getElementById('form_devolver_acciones').remove();
}