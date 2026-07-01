
function salvarState(state) {
    localStorage.setItem("state", JSON.stringify(state))
}

function carregarState() {
    const data = localStorage.getItem("state")
    if (!data) return null
    return JSON.parse(data)
}

export { salvarState, carregarState }

