<?php

  include 'config.php';
  include 'connect.php';
  include 'commons.func.php';

  $key = $_GET['k'];

  $query = "DELETE FROM subscriber WHERE secret_key = :key";

  try {
    $preparedStatement = $dbh->prepare($query);
    $preparedStatement->bindParam(':key', $key);
    $preparedStatement->execute();
    echo 'Statement successfull';
  } catch(PDOException $e) {
    echo 'Statement échouée : ' . $e->getMessage();
  }

  header("Location: http://qeewi.io");
?>
