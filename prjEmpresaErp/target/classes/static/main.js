const Api = "http://localhost:8080";

async function cadastrarSetores(event) {
	event?.preventDefault();
	const nomeSetor = document.getElementById("nomeSetor").value.trim();

	try {

		const resposta = await fetch(`${Api}/setor/salvar`,{
			
			method:"POST",
			headers:{"Content-type":"application/json"},
			body:JSON.stringify({nomeSetor:nomeSetor})
			
		});
		
		if(!resposta.ok) throw new Error(resposta.status);
		
		alert("CADASTRADO COM SUCESSO!")
		
		document.getElementById("cadastroForm")
		
	} catch (err) {
		
		alert("ERRO AO CADASTRAR");
		console.error(err)
	}

}