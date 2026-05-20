let enviado = false;

function mostrarMensagem() 
{
    if (enviado === false) {
        document.getElementById("contato").innerText = "Mensagem enviada!";
        enviado = true;
    } else {
        document.getElementById("contato").innerText = "Entrar em contato";
        enviado = false;
    }
}
    
function destacarSecao(id) {
    let secao = document.getElementById(id);

    secao.classList.add("destaque");

    setTimeout(function() {
        secao.classList.remove("destaque");
    }, 1000);
}
