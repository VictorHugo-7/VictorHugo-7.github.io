/* Chamar página menu */
fetch('./html/components/menu.html')
.then(response => response.text())
.then(data => {
    document.getElementById('my-i-menuImportacao').innerHTML = data;
})
.catch(error => console.error('Erro ao carregar a página:', error));

