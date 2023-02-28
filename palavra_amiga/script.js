function mostrar(){
    let msg = document.getElementById('msg')
    let frases = [
    '<p>Nem todas as tempestades vêm para atrapalhar a sua vida. Algumas vêm para limpar seu caminho.<br><strong>Desconhecido</strong></p>',
    '<p>A persistência realiza o impossível.<br><strong>Provérbio Chinês</strong></p>',
    '<p>Não se desespere quando a caminhada estiver difícil, é sinal de que você está no caminho certo.<br><strong>Desconhecido</strong></p>',
    '<p>Seus sonhos não precisam de plateia, eles só precisam de você.<br><strong>Daniel Duarte</strong></p>',
    '<p>A persistência é o caminho do êxito.<br><strong>Charles Chaplin Vida e Pensamentos. Editora Martin Claret. 1997. p. 118</strong></p>',
    '<p>As pessoas costumam dizer que a motivação não dura sempre. Bem, nem o efeito do banho, por isso recomenda-se diariamente.<br><strong>Zig Ziglar</strong></p>',
    '<p>Motivação é a arte de fazer as pessoas fazerem o que você quer que elas façam porque elas o querem fazer.<br><strong>Dwight Eisenhower</strong></p>',
    '<p>Toda ação humana, quer se torne positiva ou negativa, precisa depender de motivação.<br><strong>Dalai Lama</strong></p>',
    '<p>A verdadeira motivação vem de realização, desenvolvimento pessoal, satisfação no trabalho e reconhecimento.<br><strong>Frederick Herzberg</strong></p>',
    '<p>Pedras no caminho? Eu guardo todas. Um dia vou construir um castelo.<br><strong>Nemo Nox</strong></p>',
    '<p>É parte da cura o desejo de ser curado.<br><strong>Sêneca</strong></p>',
    '<p>Tudo o que um sonho precisa para ser realizado é alguém que acredite que ele possa ser realizado.<br><strong>Roberto Shinyashiki</strong></p>',
    '<p>O que me preocupa não é o grito dos maus. É o silêncio dos bons.<br><strong>Martin Luther King Nota: Adaptação de um trecho da "Carta de uma Prisão de Birmingham" (1963).</strong></p>',
    '<p>O insucesso é apenas uma oportunidade para recomeçar com mais inteligência.<br><strong>Henry Ford</strong></p>'
    
    ]

    msg.innerHTML = frases[Math.floor(Math.random()*frases.length)]

    
    
}