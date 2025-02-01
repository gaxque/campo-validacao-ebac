const form = document.getElementById('form-validacao'); 

form.addEventListener('submit', function(e) { 
    e.preventDefault(); 

    const campoA = parseFloat(document.getElementById('campoA').value); 
    const campoB = parseFloat(document.getElementById('campoB').value); 

    if (campoB > campoA) { 
        alert('Formulário válido! Campo B é maior que o Campo A.'); 
    } else {
        alert('Formulário inválido! Campo B deve ser maior que o Campo A.');
    }
});