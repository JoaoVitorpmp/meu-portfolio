// Seleção de elementos do DOM
const themeToggleBtn = document.getElementById('theme-toggle');
const body = document.body;

// Funcionalidade de Alternar Modo Claro / Escuro
themeToggleBtn.addEventListener('click', () => {
    body.classList.toggle('dark-mode');

    // Altera a legenda do botão dependendo do tema ativo
    if (body.classList.contains('dark-mode')) {
        themeToggleBtn.textContent = '☀️ Modo Claro';
    } else {
        themeToggleBtn.textContent = '🌙 Modo Escuro';
    }
});
