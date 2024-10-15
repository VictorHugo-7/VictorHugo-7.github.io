/* Chamar página recuperarSenha */
fetch('../components/recuperarSenha.html')
.then(response => response.text())
.then(data => {
    document.getElementById('my-i-recuperarSenhaImportacao').innerHTML = data;



    
})
.catch(error => console.error('Erro ao carregar a página:', error));