// script.js

// Inicializa o EmailJS com seu User ID
(function(){
    emailjs.init("eCw1Itwn4K0fi2BsNPgpt");
})();

document.getElementById('contact-form').addEventListener('submit', function(event) {
    event.preventDefault(); // Impede o envio padrão do formulário

    // Coleta os dados do formulário
    const nome = document.getElementById('nome').value;
    const email = document.getElementById('email').value;
    const celular = document.getElementById('celular').value;
    const mensagem = document.getElementById('mensagem').value;

    // Envia o email usando EmailJS
    emailjs.send("service_y5ysnjc", "template_m7furb3", {
        nome: nome,
        email: email,
        celular: celular,
        mensagem: mensagem
    })
    .then(function(response) {
        console.log('SUCCESS!', response.status, response.text);
        alert('Mensagem enviada com sucesso!');
    }, function(error) {
        console.log('FAILED...', error);
        alert('Falha ao enviar a mensagem. Tente novamente.');
    });
});
