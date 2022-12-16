/*  Ler  um  valor  e  escrever  a  mensagem  É  MAIOR  QUE  10! 
 se  o  valor  lido  for  maior  que  10,  caso contrário escrever NÃO É MAIOR QUE 10! */

function valor(){
    var numero1 = parseInt(prompt("Digite um número: "));

    if (numero1 > 10) {
        alert("O número é maior que 10");
    }
    else {
        alert("Menor que 10");
    }
}