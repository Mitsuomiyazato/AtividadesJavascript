var botao = document.getElementById('botao');

botao.onclick = function verificar(){
    var data = new Date;
    var ano = data.getFullYear();

    var fano = document.getElementById('ano');
    var res = document.getElementById('texto');

    var radiobutton = document.getElementsByName("radsex");

    var imagemdiv = document.getElementById('imagemdiv');
    var img = document.getElementById('imagem');
    
    if((fano.value.length == 0))
    {
        res.innerHTML = 'Preencha os dados para verificar sua idade!';
    }
    else if(Number(fano.value) > ano)
    {
        res.innerHTML = 'Valor inválido: Ano de Nascimento superior ao ano atual!';
    }
    else
    {
        var idade = ano - fano.value;
        imagemdiv.hidden = false;
        res.innerHTML = 'Você tem ' + idade + ' anos.';
        
        if(radiobutton[0].checked)
        {
            if(idade <= 5)
            {
                img.src = "bebemenino.jpg";
            }
            else if(idade <= 11)
            {
                img.src = "criancamenino.jpg";
            }
            else if(idade <= 17)
            {
                img.src = "jovemmenino.jpg";
            }
            else if(idade < 50)
            {
                img.src = "adultohomem.jpg";
            }
            else
            {
                img.src = "idoso.jpg";
            }
               
        }
        else
        {
            if(idade <= 5)
            {
                img.src = "bebemenina.webp";
            }
            else if(idade <= 11)
            {
                img.src = "criancamenina.jpg";
            }
            else if(idade <= 17)
            {
                img.src = "jovemmenina.jpg";
            }
            else if(idade < 50)
            {
                img.src = "adultomulher.jpg";
            }
            else
            {
                img.src = "idosa.jpg";
            }
        }
    }

}



