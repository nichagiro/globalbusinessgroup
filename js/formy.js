var formy = document.getElementById('formy');

formy.addEventListener('click',function (e) {
    
    e.preventDefault();

    const form = FormData(formy);

    fetch('php/formi.php'{
        body:form,
        method:'post'
    })
    .then(res => res.json())
    .then(data => {
        if (data) {
            
        }
    })

})


