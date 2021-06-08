function mostrarForm(){
    var btn = document.getElementById('btn_form');
    var form = document.getElementById('form-login');
    var body = document.getElementById('escurecer');

    btn.addEventListener('click', function() {
    if(form.style.visibility != 'visible') {
        form.style.visibility = 'visible';
        body.style.opacity = '0.5';
        return;
    }
    form.style.visibility = 'hidden';
    body.style.opacity = '1';
    });

}