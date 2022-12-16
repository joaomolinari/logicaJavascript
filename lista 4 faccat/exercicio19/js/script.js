/*Ler dois valores (considere que não serão lidos valores iguais) e escrever o maior deles. */

function valor(){
    var numero1=parseInt(prompt("Digite um número: "));
    var numero2=parseInt(prompt("Digite outro número: "));

    if(numero1>numero2){
        alert("O número maior é: "+numero1)
    }
    else{
        alert("O número maior é: "+numero2)
    }
}