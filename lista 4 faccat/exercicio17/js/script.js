/* Ler  as  notas  da  1a.  e  2a.  avaliações  de  um  aluno.  
Calcular  a  média aritmética  simples  e  escrever uma mensagem que diga se o aluno foi ou não aprovado
(considerar que nota igual ou maior que 6 o aluno é aprovado). Escrever também a média calculada. */

function valor(){
    var nota1=parseInt(prompt("Digite a primeira nota: "));
    var nota2=parseInt(prompt("Digite a segunda nota: "));
    var media=nota1+nota1/2

    if(media>=6){
        alert("o aluno foi aprovado");
    }
    else{
        alert("o aluno foi reprovado")
    }
}