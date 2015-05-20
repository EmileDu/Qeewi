<?php

  include 'config.php';
  include 'connect.php';
  include 'commons.func.php';

  if($_SERVER["REQUEST_METHOD"] == "POST"){
    // Sanetization
    $mail = trim(strip_tags($_POST['email']));

    // Verification
    if (!filter_var($mail, FILTER_VALIDATE_EMAIL)){
      http_response_code(200);
      $output = json_encode(array('status' => 'fail', 'message' => "Votre adresse email n'est pas valide"));
      die($output);
    }

    // Si pas encore enregistrer
    $query = "SELECT * FROM subscriber WHERE mail = :mail";
    try {
      $preparedStatement = $dbh->prepare($query);
      $preparedStatement->bindParam(':mail', $mail);
      $preparedStatement->execute();
      $data = $preparedStatement->fetch();
      $preparedStatement->closeCursor();

      $isSubscribable = array_filter($data);
    } catch(PDOException $e) {
      echo 'Statement échouée : ' . $e->getMessage();
    }

    if (empty($isSubscribable)) {
      $key = md5(microtime().rand());

      $query = "INSERT INTO subscriber (mail, secret_key) VALUE (:mail, :key)";

      try {
        $preparedStatement = $dbh->prepare($query);
        $preparedStatement->bindParam(':mail', $mail);
        $preparedStatement->bindParam(':key', $key);
        $preparedStatement->execute();

      } catch(PDOException $e) {
        echo 'Statement échouée : ' . $e->getMessage();
      }

      $mail_template = getEmailContents('mail_template.html.php', array('key' => $key));

      $subject  = 'Merci de votre confiance !';

      $headers  = 'MIME-Version: 1.0' . "\r\n";
      $headers .= 'Content-type: text/html; charset=iso-8859-1' . "\r\n";
      $headers .= "From: Qeewi.io <newsletter@qeewi.io>" . "\r\n";

      $send = mail($mail, $subject, $mail_template, $headers);
      if ($send) {
        http_response_code(200);
        $output = json_encode(array('status' => 'done', 'message' => "Vous êtes bien inscrit à la newsletter."));
        die($output);
      }
    } else {
      http_response_code(200);
      $output = json_encode(array('status' => 'fail', 'message' => "Vous êtes déjà inscrit à la newsletter"));
      die($output);
    }
  } else {
    http_response_code(403);
    $output = json_encode(array('status' => 'fail', 'message' => "Une erreur c'est produite."));
    die($output);
  }

?>
