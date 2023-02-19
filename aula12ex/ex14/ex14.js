function load(){

  var body = document.getElementById('body')
  var msg = document.getElementById('msg')
  var img = document.getElementById('imagem')
  var data = new Date()
  var hora = data.getHours()

  msg.innerHTML = `<p>Agora são ${hora} horas</p>`

  if(hora >= 0 && hora < 12){

    img.src = './img/manha.png';
    document.body.style.background = '#3F60F5'
    
  } else if (hora >= 12 && hora < 18){

    img.src = './img/tarde.png';
    document.body.style.background = '#742c16'

  } else {

    img.src = './img/noite.png';
    document.body.style.background = '#122337'

  }

}