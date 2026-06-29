const overlayBg = document.querySelector(".overlay") 

function statusConselho(status){
    if(!status){
        const mensagemCard = document.createElement("div")
        mensagemCard.classList.add("cardAviso")
        const mensagem = document.createElement("h3")
        mensagem.textContent = "Erro ao carregar o conselho"
        mensagem.style.color = 'red'
        overlayBg.appendChild(mensagemCard)
        mensagemCard.appendChild(mensagem)
    }
}
console.log(overlayBg)

export {statusConselho}