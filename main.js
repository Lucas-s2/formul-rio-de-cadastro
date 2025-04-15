const form = document.getElementById('contato-form');
const tabela = document.getElementById('tabela-contatos').querySelector('tbody');
const contador = document.getElementById('contador');
let totalContatos = 0;

form.addEventListener('submit', function(event) {
  event.preventDefault();

  const nome = document.getElementById('nome').value;
  const telefone = document.getElementById('telefone').value;

  const novaLinha = document.createElement('tr');
  const colunaNome = document.createElement('td');
  const colunaTelefone = document.createElement('td');

  colunaNome.textContent = nome;
  colunaTelefone.textContent = telefone;

  novaLinha.appendChild(colunaNome);
  novaLinha.appendChild(colunaTelefone);
  tabela.appendChild(novaLinha);

  // Atualiza o contador
  totalContatos++;
  contador.textContent = `Contatos cadastrados: ${totalContatos}`;

  // Limpa os campos
  form.reset();
});