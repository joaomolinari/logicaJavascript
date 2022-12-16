function diasVividos(){
    var idade=parseFloat(prompt("Digite a sua idade em anos:"))
    var meses=parseFloat(prompt("Digite a quantidade de meses que passou do seu aniversário:"))
    var dias=parseFloat(prompt("Digite a quantidade de dias que passou do seu mêsversario:"))

    var conta=idade*365+meses*30+dias
    
    var resultado=parseFloat(prompt("A quantidade de dias vividos são:"+conta))
}