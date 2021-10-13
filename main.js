function sistema() {
    let meses = new Array('Jan', 'Fev', 'Mar', 'Abr', 'Mai', 'Jun', 'Jul', 'Ago', 'Set', 'Out', 'Nov', 'Dez')
    let semana = new Array ('Dom', 'Seg', 'Ter', 'Qua', 'Qui', 'Sex', 'Sáb')
    let agora = new Date
    let saida = document.getElementById('saida')
    let dia = agora.getDate()
    let mes = agora.getMonth() // Jan = 0 | Fev = 1 | Mar = 2 e assim vai...
    let ano = agora.getFullYear()
    let sem = agora.getDay()  // Dom = 0 | Seg = 1 | Ter = 2 e assim vai...
    let hora = agora.getHours()
    let min = agora.getMinutes()
    let seg = agora.getSeconds()
    saida.innerHTML = `<p>Dia: ${dia}</p>`
    saida.innerHTML += `<p>Mês: ${meses[mes]}</p>`
    saida.innerHTML += `<p>Ano: ${ano}</p>`
    saida.innerHTML += `<p>Dia da semana: ${semana[sem]}</p>`
    saida.innerHTML += `<p>Hora: ${hora}</p>`
    saida.innerHTML += `<p>Minutos: ${min}</p>`
    saida.innerHTML += `<p>Segundos: ${seg}</p>`
}