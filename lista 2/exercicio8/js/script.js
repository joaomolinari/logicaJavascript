function combustivel() {

    var tempo = parseFloat(prompt("Digite o tempo total da viagem:"))
    var velocidade = parseFloat(prompt("Digite a velocidade média na viagem:"))
    var distancia = parseFloat
    var litrosUsados = parseFloat

    var distancia = tempo * velocidade
    var litrosUsados = distancia / 12

    alert("A velocidade média foi de:"+velocidade)
    alert("O tempo da viagem foi de:"+tempo)
    alert("A distancia percorrida foi de:"+distancia)
    alert("A quantidade de litros de combustível usados na viagem foi de:"+litrosUsados)

}