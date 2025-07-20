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

  fetch("https://formulario-absolute-server.onrender.com", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ nome, email, telefone, preferencia })
  })
    .then(res => {
      if (res.ok) {
        alert("Mensagem enviada com sucesso!");
        document.getElementById("formContato").reset();
      } else {
        alert("Erro ao enviar. Tente novamente.");
      }
    });
});
