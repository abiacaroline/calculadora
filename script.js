const display = document.querySelector(".display")

function adicionarCaracter(caracter) {
    display.value += caracter
}

function limparTela() {
    display.value = ''
}

function inverte() {
    display.value = Number(display.value) * -1

}