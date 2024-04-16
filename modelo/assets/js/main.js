function CalcularIMC() {
    const form = document.querySelector('form')
    const resultado = document.querySelector('#resultado')

    form.addEventListener("submit", (e) => {
        e.preventDefault()

        const peso = parseFloat(form.inPeso.value);
        const altura = parseFloat(form.inAltura.value);

        if(isNaN(peso) || peso <= 0) {
            resultado.innerHTML = 'Peso inválido'
            resultado.style.backgroundColor = 'rgb(59, 143, 226)'
            return;
        }

        if(isNaN(altura) || altura <= 0) {
            resultado.innerHTML = 'Altura inválida'
            resultado.style.backgroundColor = 'rgb(59, 143, 226)'
            return;
        }

        const IMC = peso / (altura * altura);

        if(IMC < 18.5) {
            resultado.innerHTML = ` Seu IMC é ${IMC.toFixed(2)} (Abaixo do peso)`
            resultado.style.backgroundColor = 'rgb(59, 143, 226)'
        } else if(IMC >= 18 && IMC <= 29.9) {
            resultado.innerHTML = ` Seu IMC é ${IMC.toFixed(2)} (Peso normal)`
            resultado.style.backgroundColor = 'rgb(59, 143, 226)'
        } else if(IMC >= 25 && IMC <= 29.9) {
            resultado.innerHTML = `Seu IMC é ${IMC.toFixed(2)} (Sobrepeso)`
            resultado.style.backgroundColor = 'rgb(59, 143, 226)'
        } else if(IMC >= 30 && IMC <= 34.9) {
            resultado.innerHTML = `Seu IMC é ${IMC.toFixed(2)} (Obsidade grau 1)`
            resultado.style.backgroundColor = 'rgb(59, 143, 226)'
        } else if(IMC >= 35 && IMC <= 39.9) {
            resultado.innerHTML = `Seu IMC é ${IMC.toFixed(2)} (Obsidade grau 2)`
            resultado.style.backgroundColor = 'rgb(59, 143, 226)'
        } else if(IMC > 40) {
            resultado.innerHTML = `Seu IMC é ${IMC.toFixed(2)} (Obsidade grau 3)`
        }
    })
}
CalcularIMC();