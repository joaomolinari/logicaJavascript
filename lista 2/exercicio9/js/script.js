function prestacao(){
    var valorPrestacao=parseFloat(prompt("Digite o valor da prestação:"));
    var taxa=parseFloat(prompt("Digite o valor da taxa diária por atraso:"));
    var diasAtraso=parseFloat(prompt("Digite o valor dos dias de atraso:"));

    var conta= valorPrestacao+(valorPrestacao*taxa/100)*diasAtraso;

    alert("O valor total da prestação é de:"+conta);

}