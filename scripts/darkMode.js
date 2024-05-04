document.addEventListener("DOMContentLoaded", function() {
    const darkButton = document.getElementById('darkBtn'); // Referência ao botão de modo escuro

    darkButton.addEventListener('click', function() {
        document.body.classList.toggle('dark'); // Adiciona ou remove a classe 'dark' do corpo do documento
    });
});
