<?php

/*

	Script PHP para el envio de formularios
	Escrito por Christopher MacBain.

	http://christofer.conexpro.com

*/

// Email destinatario
$var_email_to = "chris.macbain@telefonica.net";

// Capturamos la informacion enviada por el formulario
$var_name = $_POST['f_nombre'];
$var_email_from = $_POST['f_email'];
$var_company = $_POST['f_empresa'];
$var_subject = $_POST['f_asunto'];
$var_body = "<p style=\"font: 14px Helvetica;\">" . $var_name . " de la empresa " . $var_company . " le escribe:</p>";
$var_body .= "<p style=\"font: 14px Helvetica;\">" . $_POST['f_mensaje'] . "</p>";

// Reemplazamos saltos de linea sin formato con <br /> para guardar el formato del <textarea>
$var_body = str_replace(array("\n\r"), array("<br /><br/>"), $var_body);

// Establecemos la informacion de cabecera (HTML/utf-8)
$var_headers = 'From: ' . $var_email_from . "\r\n";
$var_headers .= 'Reply-To: ' . $var_email_from . "\r\n";
$var_headers .= 'X-Mailer: PHP/' . phpversion() . "\r\n";
$var_headers .= 'Content-type: text/html; charset=utf-8' . "\r\n";

// Enviamos el email
mail($var_email_to, $var_subject, $var_body, $var_headers);

// Redirigimos al usuario
header("Location: ../success.html");

?>