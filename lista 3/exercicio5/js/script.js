function real(){
    var saldo=parseFloat(prompt("Digite seu saldo em dólar:"))
    var cotacaoDolar=parseFloat(prompt("Digite o valor do dólar hoje:"))
    var reais=parseFloat(prompt("Digite quantos dólares você quer converter em reais:"))

    var saldoAtual=saldo-reais
    var saldoDolar=cotacaoDolar*reais
    alert("Pedido concluído com sucesso, seus" + "R$ "+ saldoDolar + " " + "reais" + " " + "já estão em sua carteira.")
    alert("Seu saldo atual em dólares é de:" + " " + "$" + saldoAtual + " " + "dólares")
}