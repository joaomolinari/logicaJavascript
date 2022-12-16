/* Ler  o  ano  atual  e  o  ano  de  nascimento  de  uma  pessoa.  
Escrever  uma mensagem  que  diga  se  ela poderá ou não votar este ano 
(não é necessário considerar o mês em que a pessoa nasceu). */

function valor(){
    var ano=parseInt(prompt("Digite o ano em que estamos: "));
    var nascimento=parseInt(prompt("digite o seu ano de nascimento: "));
    var resultado=ano-nascimento

    if(resultado>=18){
        alert("Está liberado para votar")
    }
    else{
        alert("Não poderá votar")
    }
}
