var genero = prompt("Escolha um gênero de jogo! 1: Ação, 2: Corrida.")


var Acao = ['https://cdn.cloudflare.steamstatic.com/steam/apps/812140/header.jpg', 'https://cdn.cloudflare.steamstatic.com/steam/apps/552520/header.jpg', 'https://cdn.cloudflare.steamstatic.com/steam/apps/1174180/header.jpg', 'https://cdn.cloudflare.steamstatic.com/steam/apps/750920/header.jpg', 'https://cdn.cloudflare.steamstatic.com/steam/apps/292030/header.jpg']
var nomAcao = ["Assassin's Creed® Odyssey", "Far Cry® 5", "Red Dead Redemption 2","Shadow of the Tomb Raider", "The Witcher® 3: Wild Hunt"]
var linkAcao = ["https://store.steampowered.com/app/812140/Assassins_Creed_Odyssey/", "https://store.steampowered.com/app/552520/Far_Cry_5/", "https://store.steampowered.com/app/1174180/Red_Dead_Redemption_2/", "https://store.steampowered.com/app/750920/Shadow_of_the_Tomb_Raider_Definitive_Edition/", "https://store.steampowered.com/app/292030/The_Witcher_3_Wild_Hunt/"]

var corrida = ['https://cdn.cloudflare.steamstatic.com/steam/apps/690790/header.jpg', 'https://cdn.cloudflare.steamstatic.com/steam/apps/1293830/header.jpg', 'https://cdn.cloudflare.steamstatic.com/steam/apps/1222680/header.jpg', 'https://cdn.cloudflare.steamstatic.com/steam/apps/378860/header.jpg', 'https://cdn.cloudflare.steamstatic.com/steam/apps/646910/header.jpg']
var nomCorrida = ['DiRT Rally 2.0', 'Forza Horizon 4', 'Need for Speed™ Heat', 'Project CARS 2', 'The Crew™ 2']
var linkCorrida = ['https://store.steampowered.com/app/690790/DiRT_Rally_20/', 'https://store.steampowered.com/app/1293830/Forza_Horizon_4/', 'https://store.steampowered.com/app/1222680/Need_for_Speed_Heat/', 'https://store.steampowered.com/app/378860/Project_CARS_2/', 'https://store.steampowered.com/app/646910/The_Crew_2/']



 for (var i = 0; i < corrida.length; i++){
   if (genero ==1) {
    document.write("<a href=" + linkAcao[i] + " target= '_blank'> <img src=" + Acao[i] + "></a>")
    document.write("<p>" + nomAcao[i] + "</p>")
   } else if (genero ==2) {
    document.write("<a href=" + linkCorrida[i] + " target= '_blank'> <img src=" + corrida[i] + "></a>")
    document.write("<p>" + nomCorrida[i] + "</p>")}
}       
