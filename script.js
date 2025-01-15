// Array de cores para o fundo
const cores = ['#FF6347', '#6A5ACD', '#FFD700', '#98FB98', '#FF4500', '#8A2BE2'];

// Função para mudar a cor do fundo
function mudarCorFundo() {
  const corAleatoria = cores[Math.floor(Math.random() * cores.length)];
  document.body.style.backgroundColor = corAleatoria;
}

// Mudar a cor a cada 0.7 segundos
setInterval(mudarCorFundo, 700);

// Inicializa com uma cor aleatória logo que a página carregar
mudarCorFundo();
