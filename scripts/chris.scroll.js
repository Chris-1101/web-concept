$(document).ready(function() {

	// Cuando se haga clic en el contenedor de id 'click_area'
	$('#click_area').on('click', function() {

		// Animar en 700ms un scroll desde arriba de 550px
		$('html, body').animate({scrollTop: '550px'}, 700);

	});

	// Cuando se haga clic en el contenedor de id 'index'
	$('#index').on('click', function() {

		// Animar en 700ms un scroll hacia el inicio de la pagina
		$('html, body').animate({scrollTop: '0'}, 700);

	});

});