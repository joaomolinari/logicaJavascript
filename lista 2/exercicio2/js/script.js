function eleitores(){
    var eleitores=parseInt(prompt("Digite a quantidade de eleitores do município:"))
    var votosBrancos=parseFloat(prompt("Digite a quantidade de votos brancos:"))
    var votosNulos=parseFloat(prompt("Digite a quantidade de votos nulos:"))
    var votosValidos=parseFloat(prompt("Digite a quantidade de votos válidos:"))
    var porcentVotosBrancos=parseFloat
    var porcentVotosNulos=parseFloat
    var porcentVotosValidos=parseFloat

    var porcentVotosBrancos=votosBrancos/eleitores*100
    var porcentVotosNulos=votosNulos/eleitores*100
    var porcentVotosValidos=votosValidos/eleitores*100

    alert("A porcentagem de votos brancos foi de:"+ porcentVotosBrancos + "%")
    alert("A porcentagem de votos nulos foi de:"+ porcentVotosNulos + "%")
    alert("A porcentagem de votos válidos foi de:"+ porcentVotosValidos +"%")

}