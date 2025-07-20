document.getElementById("formContato").addEventListener("submit", function (e) {
  e.preventDefault();

  const nome = document.getElementById("floatingNome").value;
  const email = document.getElementById("floatingEmail").value;
  const telefone = document.getElementById("floatingTelefone").value;
  const preferencia = document.getElementById("floatingPreferencia").value;
  const consentimento = document.getElementById("lgpdConsentimento").checked;

  if (!consentimento) {
    alert("Você precisa aceitar o termo.");
    return;
  }

  fetch("https://formulario-absolute-server.onrender.com/enviar-contato", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ nome, email, telefone, preferencia })
  })
    .then(res => {
      if (res.ok) {
        // Mostrar alerta bonito
        document.getElementById("mensagemSucesso").classList.remove("d-none");

        // Limpar o formulário
        document.getElementById("formContato").reset();

        // Esconder mensagem após 5s (opcional)
        setTimeout(() => {
          document.getElementById("mensagemSucesso").classList.add("d-none");
        }, 5000);
      } else {
        alert("Erro ao enviar. Tente novamente.");
      }
    });
});
