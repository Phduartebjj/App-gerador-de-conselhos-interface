const state = {
    status: "idle",
    advice: null,
    language: "pt",
    error:null
}

function estadoPadrao(){
    state.status = "idle"
    state.advice = null
    state.language = "pt"
    state.error = null
}

export {state,estadoPadrao}