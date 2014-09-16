<?php
error_reporting(E_ALL);
ini_set('error_reporting', E_ALL);

$ass1 = @trim($_POST['ass1']);
$ass2 = @trim($_POST['ass2']);

header('Content-Type: application/json; charset=utf-8');

$ass1 = mb_convert_encoding($ass1, "cp1251", "utf8");
$ass2 = mb_convert_encoding($ass2, "cp1251", "utf8");

$to = "SETMAIL@gmail.com";
$headers ="From: <$to>\n";
$headers.="X-Mailer: PHP/".phpversion()."\n";
$headers.="Content-Type: text/html; charset=cp1251";
$subject = "Обратный звонок: ";
$message = "
<table>
<tr>
    <td><strong>Обратный звонок</strong></td>
</tr>
<tr>
    <td><strong>Телефон:</strong></td>
    <td> $ass1 </td>
</tr>
<tr>
    <td><strong>Имя:</strong></td>
    <td> $ass2 </td>
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