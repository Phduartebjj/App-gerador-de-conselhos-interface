const botao = document.getElementById('btn-trocar-conselho')
const cardConselho = document.getElementById('card-conselho')
const url = 'https://api.adviceslip.com/advice'


async function buscarConselho() {
    try{
        let conselho = await fetch(url) 

        if(!conselho.ok){
            throw new Error("Erro ao buscar o conselho")
        }

        return conselho.json()

    }catch(error){
        alert("Erro ao buscar o conselho")
    }
}

async function ExibirConselho() {
    const conselhoTirado = await novoConselho()
    let conselhoAcessado = conselhoTirado.slip.advice
    cardConselho.innerText = `${conselhoAcessado}`

}

botao.addEventListener('click', ()=> {
    ExibirConselho()
})