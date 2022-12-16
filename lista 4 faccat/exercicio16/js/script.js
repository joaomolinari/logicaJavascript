/*As  maçãs  custam  R$  1,30  cada  se  forem  compradas  menos  de  uma  dúzia, 
e  R$  1,00  se  forem compradas  pelo  menos  12.  
Escreva  um  programa  que  leia  o  número  de  maçãs  compradas,  calcule  e escreva o custo total da compra. */

function valor() {
    var maca = parseInt(prompt("Quantidade de maçãs compradas"));

    if (maca>=12){
        alert(maca * 1.30)
    }
    else{
        alert(maca)
    }
}