const Api = "http://localhost:8080";

async function cadastrarSetores(event) {
	event?.preventDefault();
	const nomeSetor = document.getElementById("nomeSetor").value.trim();

	try {

		const resposta = await fetch(`${Api}/setor/salvar`, {

			method: "POST",
			headers: { "Content-type": "application/json" },
			body: JSON.stringify({ nomeSetor: nomeSetor })

		});

		if (!resposta.ok) throw new Error(resposta.status);

		alert("SETOR CADASTRADO COM SUCESSO!")

		document.getElementById("cadastroForm")

	} catch (err) {
		alert("ERRO AO CADASTRAR");
		console.error(err)
	}
}
async function cadastrarFuncionario() {
	const nomeFuncionario = document.getElementById("nomeFuncionario").value.trim();
	const salario = document.getElementById("salario").value.trim();
	const setor = {
		idSetor: document.getElementById("idSetor").value
	};
	try {
		const resposta = await fetch(`${Api}/funcionario/salvar`, {
			method: "POST",
			headers: { "Content-type": "application/json" },
			body: JSON.stringify({ nomeFuncionario, salario, setor })
		});
		if (!resposta.ok) throw new Error(resposta.status);
		alert("FUNCIONARIO CADASTRADO COM SUCESSO!");
		document.getElementById("cadastroForm").reset();
	} catch (err) {
		alert("ERRO AO CADASTRAR");
		console.error(err);
	}

}

async function cadastrarDependente() {
	const nomeDependente = document.getElementById("nomeDependente").value.trim();
	const funcionario = {
		idFuncionario: document.getElementById("idFuncionario").value
	};
	try {
		const resposta = await fetch(`${Api}/dependente/salvar`, {
			method: "POST",
			headers: { "Content-type": "application/json" },
			body: JSON.stringify({ nomeDependente, funcionario })
		});
		if (!resposta.ok) throw new Error(resposta.status);
		alert("DEPENDENTE CADASTRADO COM SUCESSO!");
		document.getElementById("cadastroForm").reset();
	} catch (err) {
		alert("ERRO AO CADASTRAR");
		console.error(err);
	}
}

async function deletarDependente() {
	const idDependente = document.getElementById("idDependente").value.trim();
	try {
		const resposta = await fetch(`${Api}/dependente/${idDependente}`, {
			method: "DELETE",
			headers: { "Content-type": "application/json" },
			body: JSON.stringify({ idDependente })
		});
		if (!resposta.ok) throw new Error(resposta.status);
		alert("DEPENDENTE DELETADO COM SUCESSO!");
		document.getElementById("cadastroForm").reset();
	} catch (err) {
		alert("ERRO AO DELETAR");
		console.error(err);
	}
}

async function deletarSetor() {
	const idSetor = document.getElementById("idSetor").value.trim();
	try {
		const resposta = await fetch(`${Api}/setor/${idSetor}`, {
			method: "DELETE",
			headers: { "Content-type": "application/json" },
			body: JSON.stringify({ idSetor })
		});
		if (!resposta.ok) throw new Error(resposta.status);
		alert("SETOR DELETADO COM SUCESSO!");
		document.getElementById("cadastroForm").reset();
	} catch (err) {
		alert("ERRO AO DELETAR");
		console.error(err);
	}
}

async function deletarFuncionario() {
	const idFuncionario = document.getElementById("idFuncionario").value.trim();
	try {
		const resposta = await fetch(`${Api}/funcionario/${idFuncionario}`, {
			method: "DELETE",
			headers: { "Content-type": "application/json" },
			body: JSON.stringify({ idFuncionario })
		});
		if (!resposta.ok) throw new Error(resposta.status);
		alert("FUNCIONARIO DELETADO COM SUCESSO!");
		document.getElementById("cadastroForm").reset();
	} catch (err) {
		alert("ERRO AO DELETAR");
		console.error(err);
	}
}

// Função para listar todos os funcionários
function listarFuncionarios() {
    fetch(`${Api}/funcionario/listar`)
        .then(response => {
            if (!response.ok) {
                throw new Error(`Erro HTTP: ${response.status}`);
            }
            return response.json();
        })
        .then(data => {
            // Limpa a tabela antes de adicionar novos dados
            const tbody = document.getElementById('funcionarios-tabela').querySelector('tbody');
            tbody.innerHTML = '';

            if (data.length === 0) {
                alert('Nenhum funcionário encontrado.');
                return;
            }

            // Exibe os funcionários na tabela
            data.forEach(funcionario => {
                // Extrair apenas o nome do setor, se existir
                const nomeSetor = funcionario.setor ? funcionario.setor.nomeSetor : 'Sem setor';

                const linha = document.createElement('tr');
                linha.innerHTML = `
                    <td>${funcionario.idFuncionario}</td>
                    <td>${funcionario.nomeFuncionario}</td>
                    <td>R$ ${funcionario.salario.toFixed(2)}</td>
                    <td>${nomeSetor}</td>
                `;
                tbody.appendChild(linha);
            });
        })
        .catch(error => {
            console.error('Erro ao listar funcionários:', error);
            alert('Erro ao carregar a lista de funcionários!');
        });
}

function listarSetores() {
    fetch(`${Api}/setor/listar`)
        .then(response => {
            if (!response.ok) {
                throw new Error(`Erro HTTP: ${response.status}`);
            }
            return response.json();
        })
        .then(data => {
            const tbody = document.getElementById('setor-tabela').querySelector('tbody');
            tbody.innerHTML = '';

            if (data.length === 0) {
                alert('Nenhum setor encontrado.');
                return;
            }

            data.forEach(setor => {
                const linha = document.createElement('tr');
                linha.innerHTML = `
                    <td>${setor.idSetor}</td>
                    <td>${setor.nomeSetor}</td>
                `;
                tbody.appendChild(linha);
            });
        })
        .catch(error => {
            console.error('Erro ao listar setores:', error);
            alert('Erro ao carregar a lista de setores!');
        });
}

function listarDependentes() {
    fetch(`${Api}/dependente/listar`)
        .then(response => {
            if (!response.ok) {
                throw new Error(`Erro HTTP: ${response.status}`);
            }
            return response.json();
        })
        .then(data => {
            const tbody = document.getElementById('dependente-tabela').querySelector('tbody');
            tbody.innerHTML = '';

            if (data.length === 0) {
                alert('Nenhum dependente encontrado.');
                return;
            }

            data.forEach(dependente => {

				const nomeFuncionario = dependente.funcionario ? dependente.funcionario.nomeFuncionario : 'Sem funcionario'

                const linha = document.createElement('tr');
				
                linha.innerHTML = `
                    <td>${dependente.idDependente}</td>
                    <td>${dependente.nomeDependente}</td>
					<td>${nomeFuncionario}</td>
                `;
                tbody.appendChild(linha);
            });
        })
        .catch(error => {
            console.error('Erro ao listar dependentes:', error);
            alert('Erro ao carregar a lista de dependentes!');
        });
}

