let nome = prompt("Digite seu nome")
let notaUm = prompt("Digite a nota da primeira prova:")
let notaDois = prompt("Digite a nota da segunda prova:")
let notaTres = prompt("Digite a nota da terceira prova:")

let notaMedia = (Number(notaUm) + Number(notaDois) + Number(notaTres)) / 3

notaMedia = notaMedia.toFixed(2)

if (notaMedia >= 6){
    alert("Parabéns, " + nome + "! Sua média foi de " + notaMedia + " e você passou de semestre!")
} else if (notaMedia <= 3) {
    alert (nome + ", você voi reprovado(a)")
} else {
    alert(nome + ", sua média foi de " + notaMedia + " e você precisa estudar para a prova de recuperação.")
}
