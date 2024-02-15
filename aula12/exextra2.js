var time
var pontos
time = 'Corinthians'
pontos = 55
console.log(`Meu time é ${time}`)
console.log(`O ${time} está com ${pontos} pontos.`)
if( pontos <= 45 ) {
    console.log('Seu time está rebaixado')
} else if (pontos <= 60) {
    console.log('Sul-Americana')
} else if(pontos <= 65) {
    console.log('Pré-Libertadores')
} else if (pontos <= 70) {
    console.log('Libertadores')
} else {
     console.log('Libertadores e CAMPEÃO!!')
}