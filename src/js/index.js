let botao = document.getElementById('btn-trocar-conselho')

let cardConselho = document.getElementById('card-conselho')

async function novoConselho() {
    const url = 'https://api.adviceslip.com/advice'
    let conselho = await fetch(url) 
    return await conselho.json()
}

async function tirarConselho() {
    const conselhoTirado = await novoConselho()
    let conselhoAcessado = conselhoTirado.slip.advice
    cardConselho.innerText = `${conselhoAcessado}`

}

botao.addEventListener('click', ()=> {
    tirarConselho()
})