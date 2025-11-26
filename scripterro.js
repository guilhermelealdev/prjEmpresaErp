const API_BASE = "https://dog.ceo/api"
//1 carregar lista de raças ao abrir a pagina

async function loadBreeds() {

    const select = document.getElementById("breedSelect")
    
    try{
        const response = await fetch(API_BASE + "/breeds/list/all")
        const data = await response.json();

        select.innerHTML=""; //<p>Aceita tag html</p>
        // select.textContent = "Só aceita texto"

        const optionDefaul = document.createElement.createElement("option")
        optionDefault.value = "";
        optionDefaul.textContent = "Selecione uma raça";
        select.appendChild(optionDefault); //cola elemento dentro de uma div

        const breeds = Object.jeys(data.message).sort();
        breeds.array.forEach(breed=>{
            const option = document.createElement("option");
            option.value = breed;
            option.textContent = breed;
            select.appendChild(option);
        });
    } catch(error){
        console.error(error);
        select.innerHTML = "<option>Erro ao carregar as raças</option>"
        
        }
    }
loadBreeds();