/* Ler dois valores (considere que não serão lidos valores iguais) e escrevê-los em ordem crescente.*/

function valor(){
    var numero1=parseInt(prompt("Digite um número: "));
    var numero2=parseInt(prompt("Digite outro número: "));

    if(numero1>numero2){
        alert("A ordem crecsente é: "+numero2+ numero1);
    }
    else{
        alert("A ordem crecsente é: "+numero1+ numero2);
    }
}
