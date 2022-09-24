
var horario = document.getElementById('hora');
var imagem = document.getElementById('img');
var body = document.getElementById('corpo');

const intervalo = setInterval(() =>
{
const data = new Date();
var hora = data.getHours();
var min = data.getMinutes();
var sec = data.getSeconds();




if((hora >= 0) && (hora < 6))
{
    horario.innerHTML = '<b>Boa madrugada!<b><p>' + hora + ":" + min + ":"+sec;
    imagem.src = 'madrugada.jpg';
    body.style.backgroundColor = 'rgb(0, 0, 70)';
}
else if(hora < 12)
{
    horario.innerHTML = '<b>Bom dia!<b><p>' + hora + ":" + min + ":"+sec;
    imagem.src = 'manha.jpg';
    body.style.backgroundColor = 'rgb(0, 0, 255)';
}
else if(hora < 18)
{
    horario.innerHTML = '<b>Boa tarde!<b><p>' + hora + ":" + min + ":"+sec;
    imagem.src = 'dia.jpg';
    body.style.backgroundColor = 'rgb(81, 250, 39)';
}
else if(hora < 19)
{
    horario.innerHTML = '<b>Boa tarde!<b><p>' + hora + ":" + min + ":"+sec;
    imagem.src = 'tarde.jpg';
    body.style.backgroundColor = 'rgb(250, 183, 39)';
}
else if(hora < 24)
{
    horario.innerHTML = '<b>Boa noite!<b><p>' + hora + ":" + min + ":"+sec;
    imagem.src = 'noite.jpg';
    body.style.backgroundColor = 'rgb(23, 2, 119)';
}


},1000);
