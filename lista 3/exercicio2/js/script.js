function caixa(){
    var comprimento=parseFloat(prompt("Digite o comprimento da caixa retangular:"))
    var largura=parseFloat(prompt("Digite a largura da caixa retangular:"))
    var altura=parseFloat(prompt("Digite a altura da caixa retangular:"))

    var conta=comprimento*largura*altura

    alert("O volume da caixa retangular é:" + conta)
}