const html = document.querySelector('html');
const focoBtn = document.querySelector('.app__card-button--foco');
const curtoBtn = document.querySelector('.app__card-button--curto');
const longoBtn = document.querySelector('.app__card-button--longo');
const startBtn = document.querySelector('#start-pause');
const appTitle = document.querySelector('.app__title');
const img = document.querySelector('.app__image');
const timer = document.querySelector('#timer');
const btnArra = document.querySelectorAll('.app__card-button');
const togleMusica = document.querySelector('#alternar-musica');
const musica = new Audio('./sons/luna-rise-part-one.mp3');
const pausePlay = document.querySelector('#start-pause span');
const playIcon = document.querySelector('#start-pause img');

let tempoRestante = 1500;
let intervaloId = null;

musica.loop = true;
togleMusica.addEventListener('change', () => {
    if (musica.paused) {
        musica.play();
    } else {
        musica.pause();
    }
});

const focoTimer = 1500;
const curtoTimer = 300;
const longoTimer = 900; 


focoBtn.addEventListener('click', () => {
    tempoRestante = 1500;
    alterarContexto('foco');
    focoBtn.classList.add('active');
})

curtoBtn.addEventListener('click', () => {
    tempoRestante = 300;
    alterarContexto('descanso-curto');
    curtoBtn.classList.add('active');
});


longoBtn.addEventListener('click', () => {
    tempoRestante = 900;
    alterarContexto('descanso-longo');
    longoBtn.classList.add('active');
});

function alterarContexto(contexto) {
    mostrarTempo();
    btnArra.forEach((btn) => {
        btn.classList.remove('active');
    });
    html.setAttribute('data-contexto', contexto);
    img.setAttribute('src', `./imagens/${contexto}.png`);
    switch (contexto) {
        case 'foco':
            appTitle.innerHTML = ` Otimize sua produtividade,<br>
                <strong class="app__title-strong">mergulhe no que importa.</strong>`;
            break;
        case 'descanso-curto':
            appTitle.innerHTML = ` Sua saúde é importante,<br>
                <strong class="app__title-strong">faça uma pausa.</strong>`;
            break;
        case 'descanso-longo':
            appTitle.innerHTML = ` Recarregue suas energias,<br>
                <strong class="app__title-strong">faça uma pausa longa.</strong>`;
            break;
    }
}

const contagemRegressiva = () => {
    if (tempoRestante <= 0) {
        alert('Tempo esgotado!');
        const focoAtivo = html.getAttribute('data-contexto') == 'foco'
        if(focoAtivo) {
            const evento = new CustomEvent('FocoFinalizado')
            document.dispatchEvent(evento)
        }
        clearInterval(intervaloId);
        return;
    }
    tempoRestante -= 1;
    mostrarTempo();
}


function iniciarOuPausar() {
    if (intervaloId) {
        zerar();
        return;
    }
    intervaloId = setInterval(contagemRegressiva, 1000);
    playIcon.setAttribute('src', './imagens/pause.png');
    pausePlay.textContent = 'Pausar';
}

function zerar() {
    clearInterval(intervaloId);
    playIcon.setAttribute('src', './imagens/play_arrow.png');
    pausePlay.textContent = 'Iniciar';
    intervaloId = null;
}

function mostrarTempo() {
    const tempo = new Date(tempoRestante * 1000);
    const tempoFormatado = tempo.toLocaleTimeString('pt-BR', {
        minute: '2-digit',
        second: '2-digit',
    });
    timer.innerHTML = `${tempoFormatado}`;
}

mostrarTempo();