const formy = document.getElementById('formy');
var envio = document.getElementById('envio');


envio.addEventListener('click',function (e) {
    
    e.preventDefault();

    const form = new FormData(formy);

    fetch('php/formi.php',{
        body:form,
        method:'post'
    })
    .then(res => res.json())
    .then(data => {

        if (data) {
            envio_alert('success', true);
        }
        else{
            envio_alert('danger', false);
        }
    });

})

function envio_alert (alert, correo) {
    let alerta = document.getElementById(alert);
    alerta.style.display = 'block';

    if (correo) {
        formy.reset();
        envio.disabled = true;
        envio.innerHTML = 'Gracias'
    }

    setTimeout(() => {
        alerta.style.display = 'none';
    }, 3500);
}

