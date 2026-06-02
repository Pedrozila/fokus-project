const html = document.querySelector('html');
const focoBtn = document.querySelector('.app__card-button--foco');
const curtoBtn = document.querySelector('.app__card-button--curto');
const longoBtn = document.querySelector('.app__card-button--longo');
const startBtn = document.querySelector('.app__card-primary-button');
const appTitle = document.querySelector('.app__title');
const img = document.querySelector('.app__image');
const timer = document.querySelector('#timer');

const focoTimer = 1500;
const curtoTimer = 300;
const longoTimer = 900; 


focoBtn.addEventListener('click', () => {
    alterarContexto('foco');
})

curtoBtn.addEventListener('click', () => {
    alterarContexto('descanso-curto');
});


longoBtn.addEventListener('click', () => {
    alterarContexto('descanso-longo');
});

function alterarContexto(contexto) {
    html.setAttribute('data-contexto', contexto);
    img.setAttribute('src', `./imagens/${contexto}.png`);
}