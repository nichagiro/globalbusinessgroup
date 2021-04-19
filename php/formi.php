<?php

$name = $_POST['name'];
$asunto = $_POST['asunto'];
$phone = $_POST['phone'];
$msg = $_POST['msg'];
$email = $_POST['email'];

if($email == '' | $name == '' | $msg =='' | $phone =='' | $asunto ==''){
 
    echo json_encode(false);
 
}   else {
 
// $to = 'comercial@globalbusinessgroup.co';
$to = 'nichagiro@gmail.com';
$subject = "Correo desde pagina web";
$message =  "Email: $email".
            "\nNombre: $name".
            "\nTelefono: $phone".
            "\nAsunto: $asunto".
            "\nMensaje: $msg";
 
$headers = "From:".$name.' <'.$email.'>';
 
mail($to, $subject, $message, $headers);
 
echo json_encode (true);
 
}
