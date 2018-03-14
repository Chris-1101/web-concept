/*
	
	Script JQuery para paginas tabuladas.
	Escrito por Christopher MacBain
	http://christofer.conexpro.com
	
*/

$(document).ready(function() {
	
	// Cuando se haga clic en un <li> dentro del contenedor con id 'tabs':
	$("#tabs li").click(function() {
		
		// Guardamos el atributo 'id' del <li> en el que se hizo clic
		// en una variable 'selectionId' para luego tenerle facil acceso.
		var selectionId = $(this).attr('id');
		
		// Si el <li> en el que se hizo clic YA es de clase 'selected',
		// (o es de clase 'ignored') salir.
		if ($(this).hasClass('selected') || $(this).hasClass('ignored')) {
			
			return;
			
		}
		
		// Si el <li> en el que se hizo clic NO es de clase 'selected',
		// añadirselo y quitar toda instancia de esa clase en sus hermanos.
		if (!$(this).hasClass('selected')) {
			
			$(this).siblings().removeClass('selected');
			$(this).addClass('selected');
			
		}
		
		// Desvanecemos el contenedor con id 'content' y despues se ejecuta una funcion anonima:
		//    a. ocultamos a todo elemento con clase 'page' via la propiedad css 'display'
		//    b. descubrimos unicamente al elemento con clase 'page' que tambien lleva id
		//       correspondiente al <li> en el que se hizo clic
		$('#content').fadeOut('slow', function() {
			
			$('.page').css('display', 'none');
			$('.page#p_' + selectionId).css('display', 'block');
			
		});
		
		// Volvemos a mostrar el contendor con id 'content', que ahora ya tiene contenido nuevo.
		$('#content').fadeIn('slow');
		
	});
	
});