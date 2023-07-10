
function carregar() {
    var msg = document.getElementById('msg')
    var img = document.getElementById('foto')
    var data = new Date()
    var hora = data.getHours()
    var minuto = data.getMinutes() 

    msg.innerHTML = `Agora são ${hora}:${minuto}h`
}