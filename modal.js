// --- LÓGICA DO MODAL DE IMAGEM ---

// Espera o documento carregar completamente antes de rodar o script
document.addEventListener('DOMContentLoaded', function() {

    // Pega todos os elementos necessários do DOM
    const modal = document.getElementById('imageModal');
    const modalImg = document.getElementById('modalImage');
    const closeModal = document.querySelector('.close-modal');
    const galleryImages = document.querySelectorAll('.gallery-image');

    // Função para abrir o modal
    function openModal(e) {
        modal.classList.add('visible'); // Adiciona a classe para tornar o modal visível
        modalImg.src = e.target.src; // Pega o 'src' da imagem clicada e coloca no modal
    }

    // Função para fechar o modal
    function closeModalFunction() {
        modal.classList.remove('visible'); // Remove a classe para esconder o modal
    }

    // Adiciona um "ouvinte" de clique para cada imagem da galeria
    galleryImages.forEach(image => {
        image.addEventListener('click', openModal);
    });

    // Adiciona o evento de clique no botão de fechar (X)
    closeModal.addEventListener('click', closeModalFunction);

    // Adiciona evento para fechar o modal ao clicar fora da imagem (na área escura)
    modal.addEventListener('click', function(e) {
        // Se o clique foi no fundo do modal (e não na imagem)
        if (e.target === modal) {
            closeModalFunction();
        }
    });

    // Adiciona evento para fechar o modal ao pressionar a tecla "Escape"
    document.addEventListener('keydown', function(e) {
        if (e.key === 'Escape' && modal.classList.contains('visible')) {
            closeModalFunction();
        }
    });

});