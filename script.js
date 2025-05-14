function toggleMenu() {
    const navMenu = document.querySelector('.nav-menu');
    navMenu.classList.toggle('active');
  } const cargoElement = document.getElementById('cargo');
  const cargos = ['Designer UX', 'Designer UI', 'Designer UX/UI Sênior', 'Designer de Produto'];
  let currentCargoIndex = 0;
  let currentCharIndex = 0;
  let typing = true;

  function type() {
      if (typing) {
          if (currentCharIndex < cargos[currentCargoIndex].length) {
              cargoElement.textContent += cargos[currentCargoIndex][currentCharIndex];
              currentCharIndex++;
              setTimeout(type, 100); // Velocidade de digitação
          } else {
              typing = false;
              setTimeout(() => {
                  cargoElement.textContent = '';
                  currentCharIndex = 0;
                  typing = true;
                  currentCargoIndex = (currentCargoIndex + 1) % cargos.length;
                  type(); // Começa a digitar o próximo cargo
              }, 1000); // Tempo de pausa antes de apagar o texto
          }
      } else {
          if (cargoElement.textContent.length > 0) {
              cargoElement.textContent = cargoElement.textContent.slice(0, -1);
              setTimeout(type, 50); // Velocidade de apagamento
          } else {
              typing = true;
              currentCargoIndex = (currentCargoIndex + 1) % cargos.length;
              setTimeout(type, 100); // Começa a digitar o próximo cargo
          }
      }
  }

  type(); // Inicia a função de digitação

  //fechar o menu quando clicar fora ou em um link
  function toggleMenu() {
    const navMenu = document.querySelector(".nav-menu");
    navMenu.classList.toggle("active");
  
    const hamburger = document.querySelector(".hamburger");
    hamburger.classList.toggle("active");
  
    const closeIcon = document.querySelector(".close-icon");
    if (hamburger.classList.contains("active")) {
      closeIcon.style.display = "block";
    } else {
      closeIcon.style.display = "none";
    }
  }
  
  // Fecha o menu ao clicar em um item do menu
  document.querySelectorAll('.nav-menu a').forEach(item => {
    item.addEventListener('click', () => {
      const navMenu = document.querySelector(".nav-menu");
      const hamburger = document.querySelector(".hamburger");
      const closeIcon = document.querySelector(".close-icon");
  
      navMenu.classList.remove("active");
      hamburger.classList.remove("active");
      closeIcon.style.display = "none";
    });
  });
  