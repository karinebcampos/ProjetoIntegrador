const user = JSON.parse( localStorage.getItem('user') ).user;
document.getElementById('nome_usuario').innerHTML = user.nome;