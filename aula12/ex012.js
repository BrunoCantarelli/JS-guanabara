var agora = new Date()
var horas = agora.getHours()

console.log(`Agora são ${horas} horas.`)

if(horas >= 6 && horas < 12){
    console.log('Bom dia!')
} else if(horas >= 12 && horas < 18){
    console.log('Boa tarde!')
} else if(horas >= 00 && horas < 6){
    console.log('Madrugada!')
} else {
    console.log('Boa noite!')
}