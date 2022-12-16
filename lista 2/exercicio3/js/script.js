function salario(){
    var salario=parseFloat(prompt("Digite o salário atual:"))
    var reajuste=parseFloat(prompt("Digite o reajuste:"))
    var salarioNovo=parseFloat

    var totalReajuste=reajuste/100*salario
    var salarioNovo= totalReajuste+salario

    var resultado=parseFloat(prompt("O salario novo é de:"+ "R$" + salarioNovo))

}