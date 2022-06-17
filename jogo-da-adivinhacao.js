let result = prompt("Adivinhe o número que estou pensando! Está entre 0 e 10!")
const randomNumber = Math.round(Math.random() * 10)
let xAttempts = 1

while(Number(result) != randomNumber) {
result = prompt("Não foi dessa vez, tente de novo!")
xAttempts ++
}

if(xAttempts == 1){
    alert(`Uau! Você acertou de primeira! O número que eu pensei foi ${randomNumber}!`)
}

alert(`Parabéns! O número que eu pensei foi ${randomNumber} e você adivinhou em ${xAttempts} tentativas!`)



//console.log(result, randomNumber, match)