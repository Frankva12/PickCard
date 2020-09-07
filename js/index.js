const seccionError = document.querySelector(".error-white");
const textbox = document.querySelector(".CreditNum");
const btnAccept = document.querySelector("#btn-send");
const btnReturn = document.querySelector("#btn-return");
const TextError = document.querySelector(".text-Error");
const seccionCorrect = document.querySelector(".correct");
const btnConfirm = document.querySelector("#btn-confirm")

btnAccept.addEventListener("click", function () {
    let numero = textbox.value;
    let validation = new RegExp("^[0-9]*$");
    if (numero != "" && numero != "0") {
        if (validation.test(numero)) {
            validate = validLuhm(numero);
            if (validate == 1) {
                seccionCorrect.classList.remove("hide");
                textbox.disabled = true;
            } else {
                seccionError.classList.remove("hide");
                TextError.innerHTML = "Su tarjeta de credito no es valida.";
                textbox.disabled = true;
            }
        } else {
            seccionError.classList.remove("hide");
            TextError.innerHTML = "Por favor ingrese solo números en la tarjeta.";
            textbox.disabled = true;
        }
    } else {
        seccionError.classList.remove("hide");
        TextError.innerHTML = "Por favor ingrese una tarjeta de crédito.";
        textbox.disabled = true;
    }
})

btnReturn.addEventListener("click", function () {
    textbox.disabled = false;
    seccionError.classList.add("hide");
    textbox.value = "";
})

btnConfirm.addEventListener("click", function () {
    textbox.disabled = false;
    seccionCorrect.classList.add("hide");
    textbox.value = "";
})

function validLuhm(value) {
    let nCheck = 0,
        bEven = false;
    for (let i = value.length - 1; i >= 0; i--) {
        let cDigit = value.charAt(i);
        nDigit = parseInt(cDigit, 10);
        if (bEven && (nDigit *= 2) > 9) nDigit -= 9;
        nCheck += nDigit;
        bEven = !bEven;
    }
    return (nCheck % 10) == 0;
}