<?php
if (isset($_POST['submit'])) {
    $fname = $_POST['fname'];
    $lname = $_POST['lname'];
    $mailFrom = $_POST['mail'];
    $phone = $_POST['phone'];
    $message = $_POST['message'];

    $mailTo = "thaibxer87@gmail.com"
    $headers = "From: ".$mailFrom;
    $txt = "You have recieved an Email From: ".$fname.$lname.".\n\n".$message;

    mail($mailTo, $txt, $headers );
    header("Location: index.html?mailsend")
} 
?>