// MODO NOTURNO
const trocarTema = document.getElementById('trocar-tema');
const body = document.body;
const textClaro = document.querySelectorAll('.textClaro');
const contdestaque = document.getElementById('destaque-esc');
const agrupEsc = document.getElementById('agrup-esc')
const lineEsc = document.getElementById('line-esc')
const blocoEsc = document.querySelectorAll('#bloc-esc')
const textCinza = document.querySelectorAll('#pCinza')
const secEsc = document.querySelector('.section-esc')
const lupaEsc = document.getElementById('input-esc')
const lupa = document.getElementById('lupa')

let modoEscuro = false;

trocarTema.addEventListener("click", () => {
    modoEscuro = !modoEscuro;

    if (modoEscuro) {
        body.classList.add("modo-escuro");
        textClaro.forEach(textB => {
            textB.style.color = 'white';
        });
        blocoEsc.forEach(bloco => {
            bloco.style.backgroundColor = '#262626'
            bloco.style.borderColor = 'white'
        })
        textCinza.forEach(pcinza => {
            pcinza.style.color = '#E2DDDD'
        })
        lupa.style.stroke = 'white'
        lupaEsc.style.backgroundColor = '#4F3E5B'
        lupaEsc.style.color = 'white'
        secEsc.style.backgroundColor = '#2C3D28'
        lineEsc.style.backgroundColor = 'white'
        agrupEsc.style.backgroundColor = '#262626'
        agrupEsc.style.borderColor = 'white'
        contdestaque.style.background = 'linear-gradient(108deg, #272A26 31.67%, rgba(38, 38, 38, 0.42) 62.39%)';
    
    } else {
        body.classList.remove("modo-escuro");
        textClaro.forEach(textB => {
            textB.style.color = '';
        });
        blocoEsc.forEach(bloco => {
            bloco.style.backgroundColor = '';
            bloco.style.borderColor = '';
        });
        textCinza.forEach(pcinza => {
            pcinza.style.color = '';
        });
        lupaEsc.style.backgroundColor = '';
        lupaEsc.style.color = '';
        secEsc.style.backgroundColor = '';
        lineEsc.style.backgroundColor = '';
        agrupEsc.style.backgroundColor = '';
        agrupEsc.style.borderColor = '';
        contdestaque.style.background = '';
        botaoIcone.style.color = '#FFF';
    }
});








//blocos








// const body = document.body;
// const ContDestaque = document.getElementById('destaque')
// const trocarTema = document.getElementById('trocar-tema');
// const textoBranco = document.querySelectorAll('.textClaro');
// const h1Escuro = document.querySelectorAll('.h1Claro');
// const pEscuros = document.getElementById('pCinza');
// const pEscuro = document.getElementById('pClaro'); 

// const aEscuro = document.querySelectorAll('.aClaro');
// let modoEscuro = false;

// trocarTema.addEventListener("click", () => {
//      modoEscuro = !modoEscuro;

//     if (modoEscuro) {
//         body.classList.add("modo-escuro");
//         textoBranco.forEach(txclaro => {
//             txclaro.classList.add("textClaro");
//             txclaro.style.color = 'white'
//         });
//         h1Escuro.forEach(h1Claro => {
//             h1Claro.classList.add("texto-claro");
//         });
   
//     }else {
//         body.classList.remove("modo-escuro");
//         aEscuro.forEach(aClaro => {
//             aClaro.classList.remove("texto-claro");
//         });
//         h1Escuro.forEach(h1Claro => {
//             h1Claro.classList.remove("texto-claro");
//         });
//         pEscuros.forEach(pCinza => {
//             pCinza.classList.remove("texto-cinza");
//         });
//         pEscuro.forEach(pClaro => {
//             pClaro.classList.remove("texto-pClaro");
//         });
//         escurecerTema.forEach(section4 => {
//             section4.classList.remove("txt-claro");
//         });
      
//       }
// });
    
