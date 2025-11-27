const display = document.querySelector(".display")

function adicionarCaracter(caracter) {
    if (display.value === "0") {
        display.value = caracter
    } else {
        display.value += caracter
    }
}

function limparTela() {
    display.value = '0'
}

function inverte() {
    display.value = Number(display.value) * -1

}