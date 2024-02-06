const convertButton = document.querySelector(".convert-button")
const currencySelect = document.querySelector(".currency-select")


function convertValues() {
    const inputConverted = document.querySelector(".input-value").value
    const currencyValueReal = document.querySelector(".currency-value-real")
    const currencyValueDolar = document.querySelector(".currency-value-dolar")




    const dolarToday = 5.2
    const euroToday = 6.2
    const libraToday = 4.5
    const biticoinToday = 2.9


    if (currencySelect.value == "Dolar") {
        currencyValueDolar.innerHTML = new Intl.NumberFormat("en-US", {
            style: "currency",
            currency: "USD"
        }).format(inputConverted / dolarToday)

    }

    if (currencySelect.value == "Euro") {
        currencyValueDolar.innerHTML = new Intl.NumberFormat("de-DE", {
            style: "currency",
            currency: "EUR"
        }).format(inputConverted / euroToday)

    }


    if (currencySelect.value == "libra") {
        currencyValueDolar.innerHTML = new Intl.NumberFormat("en-UK", {
            style: "currency",
            currency: "GBP"
        }).format(inputConverted / libraToday)

    }

      if (currencySelect.value == "biticoin") {
        currencyValueDolar.innerHTML = new Intl.NumberFormat("JAP", {
            style: "currency",
            currency: "BTC"
        }).format(inputConverted / biticoinToday)

    }


    currencyValueReal.innerHTML = new Intl.NumberFormat("pt-br", {
        style: "currency",
        currency: "BRL"
    }).format(inputConverted)




}

function changeCurrency() {
    const moeda = document.querySelector(".moeda-2")
    const currencyImg = document.querySelector(".currency-img")
    const currencyLibra = document.querySelector(".currency-libra")
    const currencyBiticoin = document.querySelector(".currency-biticoin")


    if (currencySelect.value == "Dolar") {
        moeda.innerHTML = "Dolar Americanoo"
        currencyImg.src = "./assets/dolar.png"

    }

    if (currencySelect.value == "Euro") {
        moeda.innerHTML = "Euro"
        currencyImg.src = "./assets/euro.png"
    }

    if (currencySelect.value == "libra") {
        moeda.innerHTML = "libra"
        currencyImg.src = "./assets/libra.png"
    }

    if (currencySelect.value == "biticoin") {
        moeda.innerHTML = "biticoin"
        currencyImg.src = "./assets/bitcoin 1.png"
    }



    convertValues()

}

currencySelect.addEventListener("change", changeCurrency)
convertButton.addEventListener("click", convertValues)

