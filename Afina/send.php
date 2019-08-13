<?
    if(isset($_POST['name'])){
        $name = clean($_POST['name']);
    }
    if(isset($_POST['phone'])){
        $phone = clean($_POST['phone']);
    }
    if(isset($_POST['mail'])){
        $mail = clean($_POST['mail']);
        $mail = filter_var($mail, FILTER_VALIDATE_EMAIL);
    }

    if(isset($_POST['descr'])){
        $descr = $_POST['descr'];
    }


    $to = "mortargrind91@gmail.com";
    $sendfrom   = "support@gaia.group"; 
    $headers  = "From: " . strip_tags($sendfrom) . "\r\n";
    $headers .= "Reply-To: ". strip_tags($sendfrom) . "\r\n";
    $headers .= "MIME-Version: 1.0\r\n";
    $headers .= "Content-Type: text/html;charset=utf-8 \r\n";
    $subject = "Заявка с сайта";

    $message = "$formData <br>
    <b>Имя пославшего:</b> $name<br>
    <b>Email:</b> $mail<br>
    <b>Телефон:</b> $phone<br>
    <b>Сообщение:</b> $descr";

    $send = mail ($to, $subject, $message, $headers);
    if ($send == 'true'){
     echo '<center>
        <b class="send_msg">Спасибо, сообщение отправлено успешно!</b>
    </center>';
       
    }else{

    echo '<center>
        <b class="send_msg">Ошибка. Сообщение не отправлено!</b>
    </center>';

    }

    function clean($val){
        $val = trim($val);
        $val = stripslashes($val);
        $val = strip_tags($value);
        $val = htmlspecialchars($val);
        return $val;
    }

?>
