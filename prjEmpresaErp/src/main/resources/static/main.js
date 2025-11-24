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
		idSetor: document.getElementById("idSetor")
	};
	try {
		const resposta = await fetch(`${Api}/funcionario/salvar`, {
			method: "POST",
			headers: { "Content-type": "application/json" },
			body: JSON.stringify({ nomeFuncionario, salario, idSetor})
		});
		if (!resposta.ok) throw new Error(resposta.status);
		alert("FUNCIONARIO CADASTRADO COM SUCESSO!");
		document.getElementById("cadastroForm").reset();
	} catch (err) {
		alert("ERRO AO CADASTRAR");
		console.error(err);
	}

}

