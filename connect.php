<?php

$user = $dataConfiguration['user'];
$pwd = $dataConfiguration['password'];
$dsn = 'mysql:dbname='.$dataConfiguration['database'].';host='.$dataConfiguration['host'];

try {
  $dbh = new PDO($dsn, $user, $pwd);
} catch (PDOException $e) {
  echo 'Connexion échouée : ' . $e->getMessage();
}


?>
