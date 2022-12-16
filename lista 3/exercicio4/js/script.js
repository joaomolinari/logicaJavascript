function dolar(){
    var saldo=parseFloat(prompt("Digite seu saldo em reais:"))
    var cotacaoDolar=parseFloat(prompt("Digite o valor do dólar hoje:"))
    var dolar=parseFloat(prompt("Digite quantos dólares você quer comprar:"))

    var saldoAtual=saldo-dolar
    var saldoDolar=cotacaoDolar*dolar
    alert("Pedido concluído com sucesso, seus" + "$ "+ saldoDolar + " " + "dólares" + " " + "já estão em sua carteira americana")
    alert("Seu saldo atual em reais é de:" + " " + "R$" + saldoAtual)
}