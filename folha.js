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