<?php
error_reporting(E_ALL);
ini_set('error_reporting', E_ALL);

$myname = @trim($_POST['myname']);
$mymail = @trim($_POST['mymail']);
$mytel = @trim($_POST['mytel']);

header('Content-Type: application/json; charset=utf-8');

$myname = mb_convert_encoding($myname, "cp1251", "utf8");
$mymail = mb_convert_encoding($mymail, "cp1251", "utf8");
$mytel = mb_convert_encoding($mytel, "cp1251", "utf8");

$to = "SETMAIL@gmail.com";
$headers ="From: <$to>\n";
$headers.="X-Mailer: PHP/".phpversion()."\n";
$headers.="Content-Type: text/html; charset=cp1251";
$subject = "Месяц тестирования: ";
$message = "
<table>
<tr>
    <td><strong>Заполнение формы на месяц тестирования</strong></td>
</tr>
<tr>
    <td><strong>Имя:</strong></td>
    <td> $myname </td>
</tr>
<tr>
    <td><strong>Почта:</strong></td>
    <td> $mymail </td>
</tr>
<tr>
    <td><strong>Телефон:</strong></td>
    <td> $mytel </td>
</tr>
</table>";
$send = mail($to, $subject, $message, $headers);
if ($send == 'true')
{
    echo json_encode(array('success'    => true));
    exit;
} else {
    echo json_encode(array('success'    => false));
    exit;
}
?>