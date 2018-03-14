/*

	Aquí he usado la libreria popular de Google "swfobject" que tiene
	como objetivo crear un nuevo estándar para incrustar contenido Flash.

	http://code.google.com/p/swfobject/

	Basicamente, te deja el código mucho mas limpio.
	- Christopher MacBain.

*/

// Objeto que contiene opciones/parametros (<param>) del objeto Flash
var params  = {
	menu: 'false',						// que no aparezcan opciones en el menu de clic derecha
	scale: 'noborder',					// metodo de ajuste al contenedor HTML
	salign: 'b',						// alineamiento dentro del contenedor HTML
	wmode: 'transparent',				// que el fondo del archivo swf sea transparente
	allowFullScreen: false				// que no se pueda expandir a pantalla completa
};

var flashVars = {}						// vacio, no tuve que usarlo

// Construccion del <object> para el Logo
swfobject.embedSWF(
	"flash/logo.swf",					// ubicacion del archivo Flash
	"flashLogo",						// id del contenedor HTML en el que se introduce el objeto Flash
	"550",								// anchura
	"120",								// altura
	"11.4.0",							// version
	"flash/expressInstall.swf",			// ubicacion del archivo "Adobe Express Install"
	flashVars,							// variables - para opciones avanzadas, no los use...
	params								// parametros - definidos arriba en el objeto 'params'
);

// Construccion del <object> para el Banner
swfobject.embedSWF(
	"flash/banner.swf",					// ubicacion del archivo Flash
	"flashBanner",						// id del contenedor HTML en el que se introduce el objeto Flash
	"300",								// anchura
	"120",								// altura
	"11.4.0",							// version
	"flash/expressInstall.swf",			// ubicacion del archivo "Adobe Express Install"
	flashVars,							// variables - para opciones avanzadas, no los use...
	params								// parametros - definidos arriba en el objeto 'params'
);