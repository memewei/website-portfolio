<?php 

$name = $_POST["name"];
$email = $_POST["email"];
$subject = $_POST["subject"];
$message = $_POST["message"];

require "vendor/autoload.php";

use PHPMailer\PHPMailer\PHPMailer;
use PHPMailer\PHPMailer\SMTP;

$mail = new PHPMailer(true);

$mail->isSMTP();
$mail->SMTPAuth = true;
$mail->Mailer = 'smtp';

$mail->Host = "smtp.gmail.com";
$mail->SMTPSecure = PHPMailer::ENCRYPTION_STARTTLS;
$mail->Port = 587;

$mail->Username = "smemewei@gmail.com";
$mail->Password = "lchs aioi nhia hyha";

$mail->setFrom($email, $name);
$mail->addAddress("smemewei@gmail.com", "Min Wei");

$mail->Subject = $subject;
$mail->Text = $message;

$mail->send();

header("Location: index.html");