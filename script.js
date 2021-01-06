const dino=document.querySelector('.dino')
const background=document.querySelector('.background')
let pulando=false
let posicao=0

function espacoPressionado(event){
    if(event.keyCode ===32){
        if(!pulando){
            pular()
        }
    }
}

function pular(){

    pulando=true

    let upInterval=setInterval(()=>{
        if(posicao >= 150){
            clearInterval(upInterval)

            let downInterval=setInterval(()=>{
              if(posicao<=0){
                  clearInterval(downInterval)
                  pulando=false
              }else{
                  posicao-=20
                  dino.style.bottom=posicao +'px'
              }
            },20)
        }else{
            posicao+=20
            dino.style.bottom=posicao + 'px'
        }
    },20)
}

function criandoCactus(){

    const arrCores = ['#f00', '#0f0', '#0ff'];
    const cactus=document.createElement('div')

    let posicaoCactus=1000
    let randomTime=Math.random() * 6000

    cactus.classList.add('cactus')
    cactus.style.left=1000 + 'px'
    background.appendChild(cactus)



    let intervaloEsquerda=setInterval(()=>{

        if(posicaoCactus<-60){
            clearInterval(intervaloEsquerda)
            background.removeChild(cactus)
        }else if(posicaoCactus>0 && posicaoCactus<60 && posicao < 60){
                //game over
            clearInterval(intervaloEsquerda)
            document.body.innerHTML='<h1 class="game-over">Fim de jogo</h1>'
        }else{
            posicaoCactus-=10
            cactus.style.left=posicaoCactus +'px'
        }

    },20)

    setTimeout(criandoCactus,randomTime)

}

criandoCactus()
document.addEventListener('keyup',espacoPressionado)



