
function carregar() {
    var msg = document.getElementById('msg')
    var img = document.getElementById('foto')
    var txt = document.getElementsByClassName('txt')
    var data = new Date()
    var hora = data.getHours()
    var minuto = data.getMinutes() 

    msg.innerHTML = `Agora são <strong>${hora}:${minuto}h</strong>.`
    
    if (hora >= 0 && hora < 11) {
        img.src = `img/manha.jpg`
        document.body.style.background = '#ffa53f'
    } else if (hora >= 11 && hora < 16) {
        img.src = 'img/tarde.png'
        document.body.style.background = '#549eff'
    } else if (hora >= 16 && hora < 18) {
        img.src = 'img/entardecer.jpg'
        document.body.style.background = '#fd511c'
    } else if (hora >= 18 && hora < 23) {
        img.src = `img/noite.jpg`
        document.body.style.background = '#140557'

    } else {
        window.alert('Erro, nunca deveria ter chegado aqui!')
    }

}