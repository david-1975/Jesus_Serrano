// JavaScript Document

/**************************************************************/
/******** AVISO DE COOKIES para cualquier página web  *********/
/**************************************************************/
/*                                                            */
/*   El objetivo de este snippet es adaptar cualquier página  */
/*   a la ley de protección europea que obliga a mostrar un   */
/*   aviso a aquellas páginas que usan cookies (vamos, que a  */
/*   todas). Su uso es sencillo: incluye el JavaScript en un  */
/*   documento HTML y a correr. Ni jQuery ni historias.       */
/*                                                            */
/**************************************************************/


// Definimos el código que muestra el mensaje de aviso
function showCookiesMsg() {
	var cookie_name = 'cookies_accepted';
	if (document.cookie.indexOf(cookie_name + '=1') < 0) {
		document.head.innerHTML += '<style type="text/css">' +
			'.__cookies_msg a:hover { background:rgba(0,0,0,0.7) !important }' +
			'@media screen and (max-width:900px) {' +
				'.__cookies_msg a { margin-top:10px !important }' +
				'.__cookies_msg hr { display:block !important }' +
			'}' +
		'</style>';
		document.body.innerHTML += '<div class="__cookies_msg" style="' +
			'position:fixed;' +
			'left:0;' +
			'right:0;' +
			'bottom:0;' +
			'display:block;' +
			'margin:0;' +
			'padding:15px;' +
			'background:rgba(233,233,233,0.95);' +
			'color:rgba(0,0,0,0.8);' +
			'font-family:Arial, sans-serif;' +
			'font-size:14px;' +
			'font-weight:400;' +
			'font-style:normal;' +
			'text-align:center' +
		'">Esta página utiliza cookies como todo hijo de vecino. Si continua navegando acepta el uso que hacemos de ellas. <hr style="' +
			'display:inline-block;' +
			'width:0;' +
			'height:0;' +
			'margin:0;' +
			'padding:0;' +
			'opacity:0;' +
		'"><a style="' +
			'display:inline-block;' +
			'margin:0 5px;' +
			'padding:3px 8px;' +
			'background:rgba(0,0,0,0.6);' +
			'color:#FFF;' +
			'font-family:inherit;' +
			'font-size:inherit;' +
			'font-weight:700;' +
			'font-style:inherit;' +
			'text-decoration:none !important;' +
			'cursor:pointer;' +
		'" onClick="showCookiesPopup()">Más información</a></div>';
		setTimeout(function() {
			document.getElementsByClassName('__cookies_msg')[0].style.display = 'none';
		}, 10000);
	}

	// Guardamos (o actualizamos) una cookie para recordar que ya se ha mostrado el mensaje
	var d = new Date();
	d.setTime(d.getTime() + (30*24*60*60*1000));
	document.cookie = cookie_name + '=1;expires=' + d.toUTCString() + ';path=/';
}


// Definimos la ventana emergente que aparecerá cuando un usuario solicite más información
function showCookiesPopup() {
	var popup = window.open('', 'Nuestra política de cookies', 'width=600,height=500');
    popup.document.write('<!doctype html><html>' +
		'<head>' +
			'<meta charset="utf-8">' +
			'<meta name="viewport" content="user-scalable=no, initial-scale=1, maximum-scale=1, minimum-scale=1, width=device-width">' +
			'<title>Nuestra política de cookies</title>' +
			'<style type="text/css">' +
				'body { margin:0; padding:20px; background:#E9E9E9; color:rgba(0,0,0,0.8); font-size:14px }' +
				'p, h1, h2 { font-family:Arial, sans-serif }' +
				'h1 { margin:0; font-size:36px }' +
				'h2 { font-size:22px }' +
			'</style>' +
		'</head>' +
		'<body>' +
			'<h1>Nuestra política de cookies</h1>' +
			'<h2>¿Qué es una cookie?</h2>' +
			'<p>Cookie es un fichero que se descarga en su ordenador al acceder a determinadas páginas web. Las cookies permiten a una página web, entre otras cosas, almacenar y recuperar información sobre los hábitos de navegación de un usuario o de su equipo y, dependiendo de la información que contengan y de la forma en que utilice su equipo, pueden utilizarse para reconocer al usuario. El navegador del usuario memoriza cookies en el disco duro solamente durante la sesión actual ocupando un espacio de memoria mínimo y no perjudicando al ordenador. Las cookies no contienen ninguna clase de información personal específica, y la mayoría de las mismas se borran del disco duro al finalizar la sesión de navegador (las denominadas cookies de sesión).</p>' +
			'<p>La mayoría de los navegadores aceptan como estándar a las cookies y, con independencia de las mismas, permiten o impiden en los ajustes de seguridad las cookies temporales o memorizadas. Sin su expreso consentimiento (mediante la activación de las cookies en su navegador) ' + window.location.hostname  + ' no enlazará en las cookies los datos memorizados con sus datos personales proporcionados en el momento del registro o la compra.</p>' +
			'<h2>Nuestra cookies</h2>' +
			'<p>Utilizamos cookies de sesión, para garantizar que los usuarios que escriban comentarios en el blog sean humanos y no aplicaciones automatizadas. De esta forma se combate el spam.</p>' +
			'<h2>Cookies de terceros</h2>' +
			'<p>Esta web puede utilizar servicios de terceros que, por cuenta de ' + window.location.hostname  + ', recopilaran información con fines estadísticos, de uso del Site por parte del usuario y para la prestacion de otros servicios relacionados con la actividad del Website y otros servicios de Internet. En particular, este sitio Web utiliza Google Analytics, un servicio analítico de web prestado por Google, Inc. con domicilio en los Estados Unidos con sede central en 1600 Amphitheatre Parkway, Mountain View, California 94043.  Para la prestación de estos servicios, estos utilizan cookies que recopilan la información, incluida la dirección IP del usuario, que será transmitida, tratada y almacenada por Google en los términos fijados en la Web Google.com. Incluyendo la posible transmisión de dicha información a terceros por razones de exigencia legal o cuando dichos terceros procesen la información por cuenta de Google.</p>' +
		'</body>' +
	'</html>');
}


// Esperamos a que la página web cargue (no queremos incordiar)
if (typeof window.onload != 'function') {
	window.onload = showCookiesMsg;
} else {
	var onLoad = window.onload;
	window.onload = function() {
		if (onLoad) oldonload();
		showCookiesMsg();
	};
}