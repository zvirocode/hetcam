<?php
  $dbhost = "eu-cdbr-azure-west-a.cloudapp.net"; // Имя хоста БД
  $dbusername = "b172c78c9035d8"; // Пользователь БД
  $dbpass = "ec52cec2"; // Пароль к базе

  $dbconnect = @mysql_connect ($dbhost, $dbusername, $dbpass); 
  if (!$dbconnect) { echo ("Не могу подключиться к серверу базы данных!"); }
?>