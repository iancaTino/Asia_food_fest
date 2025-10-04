const dataDoEvento = new Date("Jun 17, 2026 12:00:00").getTime();

const contaHoraS = setInterval(function () {
    const agora = new Date().getTime();
    const distancia = dataDoEvento - agora;

    const diaEmMs = 1000 * 60 * 60 * 24;
    const horaEmMs = 1000 * 60 * 60;
    const minutoEmMs = 1000 * 60;

    const dias = Math.floor(distancia / diaEmMs);
    const horas = Math.floor((distancia % diaEmMs) / horaEmMs);
    const minutos = Math.floor((distancia % horaEmMs) / minutoEmMs);
    const segundos = Math.floor((distancia % minutoEmMs) / 1000);

    if (distancia > 0) {
        document.getElementById('dias').innerHTML = `<span>${dias}</span>dias`;
        document.getElementById('horas').innerHTML = `<span>${horas}</span>horas`;
        document.getElementById('minutos').innerHTML = `<span>${minutos}</span>minutos`;
        document.getElementById('segundos').innerHTML = `<span>${segundos}</span>segundos`;
    } else {
        clearInterval(contaHoraS);
        document.getElementById('contador').innerHTML = 'Evento expirado';
    }
}, 1000);
