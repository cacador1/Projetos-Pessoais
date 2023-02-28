function sortear(){

    var lista_brawlers = ['8bit.png', 'amber.png', 'ash.png', 'barley.png','bea.png', 'belle.png', 'bibi.png', 'bo.png',
    'bonnie.png', 'brock.png', 'bull.png', 'buster.png', 'buzz.png', 'byron.png', 'carl.png', 'chester.png',
    'colette.png', 'colt.png', 'coronel_ruffs.png', 'corvo.png', 'darryl.png', 'dynamike.png', 'edgar.png', 'el_primo.png',
    'emz.png', 'eugenio.png', 'eve.png', 'fang.png', 'frank.png', 'gale.png', 'gray.png', 'griff.png', 'grom.png', 'gus.png',
    'jacky.png', 'jessie.png', 'leon.png', 'lola.png', 'lou.png', 'mandy.png', 'max.png', 'meg.png', 'mister_p.png', 'mortis.png', 
    'nani.png', 'nita.png', 'otis.png', 'pam.png', 'penny.png', 'piper.png', 'poco.png', 'rico.png','rosa.png', 'sam.png'
    , 'sandy.png', 'shelly.png', 'spike.png', 'sprout.png', 'squeak.png', 'stu.png', 'tara.png', 'tick.png', 'wattson.png']

    var numero_sorteado = Math.floor(Math.random()*64)
    var brawler_sorteado = lista_brawlers[numero_sorteado]

    var foto = document.getElementById('imagem')

    foto.src = brawler_sorteado



}
