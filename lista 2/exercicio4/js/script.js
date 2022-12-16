function custo(){

    var custoFabrica=parseFloat(prompt("DIgite o custo de fábrica do carro:"));
    var custoDistribuidor=parseFloat
    var custoImposto=parseFloat
    var custoComprador=parseFloat
    const distribuidor= 28;
    const impostos= 45;

    var custoDistribuidor= distribuidor*custoFabrica/100
    var custoImposto= impostos*custoFabrica/100
    var custoComprador=custoFabrica+custoDistribuidor+custoImposto

    alert("O custo final do comprador é de:" + "R$" + custoComprador)

}