<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    // Sanitiza os dados recebidos do formulário
    $nome = filter_var($_POST['nome'], FILTER_SANITIZE_STRING);
    $email = filter_var($_POST['email'], FILTER_SANITIZE_EMAIL);
    $assunto = filter_var($_POST['assunto'], FILTER_SANITIZE_STRING);
    $mensagem = filter_var($_POST['mensagem'], FILTER_SANITIZE_STRING);

    // Validação básica
    if (!empty($nome) && !empty($email) && !empty($assunto) && !empty($mensagem)) {
        // Endereço de e-mail onde você receberá as mensagens
        $para = "tucka.cabral@gmail.com"; // Substitua pelo seu e-mail
        $titulo = "Contato do portfólio: " . $assunto;

        // Corpo da mensagem
        $corpo = "Nome: $nome\n";
        $corpo .= "E-mail: $email\n";
        $corpo .= "Assunto: $assunto\n";
        $corpo .= "Mensagem:\n$mensagem\n";

        // Cabeçalhos do e-mail
        $cabecalhos = "From: $email" . "\r\n" .
                      "Reply-To: $email" . "\r\n" .
                      "X-Mailer: PHP/" . phpversion();

        // Enviar e-mail
        if (mail($para, $titulo, $corpo, $cabecalhos)) {
            echo "Mensagem enviada com sucesso!";
        } else {
            echo "Falha ao enviar mensagem. Tente novamente mais tarde.";
        }
    } else {
        echo "Por favor, preencha todos os campos.";
    }
} else {
    echo "Método de requisição inválido.";
}
?>

