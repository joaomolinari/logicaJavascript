function trapezio(){
    var baseMaior=parseFloat(prompt("Digite a base maior do trapézio:"))
    var baseMenor=parseFloat(prompt("Digite a base menor do trapézio:"))
    var altura=parseFloat(prompt("Digite a altura do trapézio:"))
    var conta=(baseMaior*baseMenor)*altura/2
    var resultado=parseFloat(prompt("A área do trapézio é:"+conta))
}