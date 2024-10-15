/* Chamar página recuperarSenha */
fetch('./html/components/recuperarSenha.html')
.then(response => response.text())
.then(data => {
    document.getElementById('my-i-recuperarSenhaImportacao').innerHTML = data;



    
})
.catch(error => console.error('Erro ao carregar a página:', error));