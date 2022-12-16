function valores(){
    var numeroA=parseFloat(prompt("Digite o valor da variável A:"))
    var numeroB=parseFloat(prompt("Digite o valor da variável B:"))
    var numeroC=parseFloat(prompt("Digite o valor da variável C:"))

    var contaA=numeroA*numeroA
    var contaB=numeroB*numeroB
    var contaC=numeroC*numeroC

    var quadrado=contaA+contaB+contaC

    alert("A soma do quadrado dos três valores é:" + " " +  quadrado)
}