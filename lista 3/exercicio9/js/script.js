function salario(){
    var salarioMensal=parseFloat(prompt("Digite o salário mensal:"))
    var percentReajuste=parseFloat(prompt("Digite o percentual de reajuste:"))

    var reajuste=percentReajuste*salarioMensal/100
    var salarioAtualizado=reajuste+salarioMensal

    alert("O salário atualizado é:" + " " + salarioAtualizado)
}