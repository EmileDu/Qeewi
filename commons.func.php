<?php
  // Return le contenu du mail a envoyer;
  function getEmailContents($file, array $var){
    extract($var);
    ob_start();
    include $file;
    return ob_get_clean();
  }

?>
