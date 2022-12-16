// devem ser somadas e
// multiplicadas A com B, A com C e A com D. Depois B com C, B com D e por fim C com D.

function valores(){
    var numeroA=parseFloat(prompt("Digite o valor da variável A:"))
    var numeroB=parseFloat(prompt("Digite o valor da variável B:"))
    var numeroC=parseFloat(prompt("Digite o valor da variável C:"))
    var numeroD=parseFloat(prompt("Digite o valor da variável D:"))

    var somaA=parseFloat
    var multiplicA=parseFloat

    var somaA=numeroA+numeroB
    var multiplicA=numeroA*numeroB
    alert("A soma de A + B é de:"+somaA)
    alert("A multiplicação de A * B é:"+multiplicA)

    var somaAC=parseFloat
    var multiplicAC=parseFloat

    var somaAC=numeroA+numeroC
    var multiplicAC=numeroA*numeroC
    alert("A soma de A + C é de:"+somaAC)
    alert("A multiplicação de A * C é:"+multiplicAC)

    var somaAD=parseFloat
    var multiplicAD=parseFloat

    var somaAD=numeroA+numeroD
    var multiplicAD=numeroA*numeroD 
    alert("A soma de A + D é de:"+somaAD)
    alert("A multiplicação de A * D é:"+multiplicAD)

    var somaB=parseFloat
    var multiplicB=parseFloat

    var somaB=numeroB+numeroC
    var multiplicB=numeroB*numeroC
    alert("A soma de B + C é de:"+somaB)
    alert("A multiplicação de B * C é:"+multiplicB)

    var somaBD=parseFloat
    var multiplicBD=parseFloat

    var somaBD=numeroB+numeroD
    var multiplicBD=numeroB*numeroD
    alert("A soma de B + D é de:"+somaBD)
    alert("A multiplicação de B * D é:"+multiplicBD)

    var somaCD=parseFloat
    var multiplicCD=parseFloat

    var somaCD=numeroC+numeroD
    var multiplicCD=numeroC+numeroD
    alert("A soma de C + D é de:"+somaCD)
    alert("A multiplicação de C * D é:"+multiplicCD)

}