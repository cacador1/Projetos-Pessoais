function gerar_cor(){
    let resultado = document.getElementById('resultado')
    let cod_cor = document.getElementById('cod_cor')
    let caixa_de_cor = document.getElementById('cor')
    
    codigo_1 = Math.floor(Math.random()*255)
    codigo_2 = Math.floor(Math.random()*255)
    codigo_3 = Math.floor(Math.random()*255)
    

    rgb = "rgb(" + codigo_1 + "," + codigo_2  + "," + codigo_3 + ")";


    cod_cor.innerHTML = `<p>Código da cor: ${codigo_1}, ${codigo_2}, ${codigo_3}</p>`

    caixa_de_cor.style.background = rgb

}

function colorir_fundo(){
    window.document.body.style.background = rgb

}

function limpar_fundo(){
    let cor_de_fundo = "rgb(" + 65 + "," + 157  + "," + 185 + ")";
    window.document.body.style.background = cor_de_fundo
}
