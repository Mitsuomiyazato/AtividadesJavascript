var button = document.getElementById('botao');

button.onclick = function contar(){
    var inicio = document.getElementById("inicio");
    var fim = document.getElementById("fim");
    var passo = document.getElementById("passo");

    if((inicio.value.length == 0) || (fim.value.length == 0) || (passo.value.length == 0))
    {
        window.alert('[ERRO] PREENCHA TODOS OS DADOS!');
    }
    else
    {
        if(Number(passo.value) == 0)
        {
            window.alert('[ERRO] O PASSO NÃO PODE SER 0')
        }
        else{
        var text = document.getElementById('texto');

        text.innerHTML = 'Sequência: ';
        
        if(Number(inicio.value) == Number(fim.value))
        {
            text.innerHTML += '\u{1F600}';    
        }
        else if(Number(inicio.value) < Number(fim.value))
        {
        for(let i = Number(inicio.value); i <= Number(fim.value) + 1; i+= Number(passo.value))
        {
            text.innerHTML += i + '\u{1F449}';
        }
        text.innerHTML += '\u{1F600}';
        }
        else
        {
            for(let i = Number(inicio.value); i >= Number(fim.value); i-= Number(passo.value))
            {
            text.innerHTML += i + '\u{1F449}';
            }
            text.innerHTML += '\u{1F600}';
        }
        }
    }
}