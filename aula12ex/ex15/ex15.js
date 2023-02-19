function verificar(){
  var data = new Date()
  var anoAtual = data.getFullYear()
  var anoNasc = document.getElementById('ano')
  var res = document.querySelector('div#res')

  if(anoNasc.value.lenght == 0 || Number(anoNasc.value) > anoAtual){
    window.alert('[ERRO] Ano invalido!')
  } else {
    var sex = document.getElementsByName('sex')
    var idade = anoAtual - Number(anoNasc.value)
    var genero = ''
    var img = document.createElement('img') // createElement() cria um elemento dentro do html atraves do js
    img.setAttribute('id', 'img') // setAttribute('class/id/name', ' "nome" para essa tag ') 

    if(sex[0].checked){ // [0] que dizer que se o primeiro radio estiver marcado é pq é homem
     
      genero = 'Homem'

      if(idade >= 0 && idade <= 10){ // bebe
        img.setAttribute('src', './img/bebeM.png')
      } else if(idade >= 11 && idade <= 17){ // jovem
        img.setAttribute('src', './img/jovemM.png') 
      } else if(idade >= 18 && idade <= 65){ // adulto
        img.setAttribute('src', './img/adulto.png')
      } else {
        img.setAttribute('src', './img/idosoM.png')
      }

    } else {

      genero = 'Mulher'

      if(idade >= 0 && idade <= 10){ // bebe
        img.setAttribute('src', './img/bebeF.png')
      } else if(idade >= 11 && idade <= 17){ // jovem
        img.setAttribute('src', './img/jovemF.png') 
      } else if(idade >= 18 && idade <= 65){ // adulto
        img.setAttribute('src', './img/adulta.png')
      } else {
        img.setAttribute('src', './img/idosaF.png')
      }
    } 

    res.innerHTML = `Detectamos ${genero} com ${idade} anos!`
    res.appendChild(img) // acrescenta a div 'res' o elemento 'img'

  }

}