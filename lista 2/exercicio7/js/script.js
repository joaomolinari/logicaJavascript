function lata(){
    var raio=parseFloat(prompt("Digite o raio da lata de óleo:"))
    var altura=parseFloat(prompt("Digite a altura da lata de óleo:"))
    const pi= 3.14

    var conta=pi*raio*raio*altura

    alert("O volume da lata de óleo é de:" + conta)
}