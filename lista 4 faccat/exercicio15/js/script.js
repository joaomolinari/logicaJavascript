/* Ler um valor e escrever se é positivo ou negativo (considere o valor zero como positivo). */

function valor(){
    var numero1=parseInt(prompt("Digite um número"));

    if(numero1>=0)
    alert("O número é positivo");

    else{
        alert("O número é negativo");
    }
}