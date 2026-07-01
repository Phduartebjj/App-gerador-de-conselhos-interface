
function salvarState (state){
    localStorage.setItem("state",JSON.stringify(state))
}
console.log(carregarState())
function carregarState(){
    
    return JSON.parse(localStorage.getItem("state"))
}

export {salvarState, carregarState}

