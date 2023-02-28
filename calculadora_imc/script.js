function calcular(){
    var resultado = document.getElementById('resultado')
    
    var txtaltura = window.document.getElementById('altura')
    
    var altura = Number(txtaltura.value)

    var txtpeso = window.document.getElementById('peso')

    var peso = Number(txtpeso.value)

    var imc = peso/(altura*altura)

    var status = ''

    if(imc < 18.5){

        status = 'Abaixo do peso normal'

    }else if(imc >= 18.5 && imc <= 24.9){

        status = 'Peso normal'

    }else if (imc >= 25 && imc <=29.9){

        status = 'Excesso de peso'

    }else if (imc >= 30 && imc <= 34.9){

        status = 'Obesidade nível 1'

    }else if (imc >= 35 && imc <= 39.9){

         status = 'Obesidade nível 2'

    }else if (imc >= 40){

        status = 'Obesidade nível 3'
    }

    var imc = imc.toFixed(1)

    if(txtaltura.value.length == 0 || txtpeso.value.length == 0){
        window.alert('Erro! verifique os dados e tente novamente.')
    }else{

        resultado.innerHTML = `<p>Seu IMC é: <strong>${imc}</strong></p>`
        resultado.innerHTML += `<p>Sua condição é: <strong>${status}</strong><p/>`

    }

}