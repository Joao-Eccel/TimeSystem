
function carregar() {
    var msg = document.getElementById('msg')
    var img = document.getElementById('foto')
    var data = new Date()
    var hora = data.getHours()
    var minuto = data.getMinutes() 

    msg.innerHTML = `Agora são <strong>${hora}:${minuto}h</strong>.`

    if (hora >= 4 && hora < 11) {
        img.src = 'manha.jpg'
    } else if (hora >= 11 && hora < 16) {
        img.src = 'tarde.png'
    } else if (hora >= 16 && hora < 18) {
        img.src = 'entardecer.jpg'
    } else if (hora >= 18 && hora < 4) {
        img.src = 'noite.jpg'
    } else {
        window.alert('Erro, nunca deveria ter chegado aqui!')
    }

}