 const API_BASE = "https://dog.ceo/api";

    // 1) Carregar lista de raças ao abrir a página
    async function loadBreeds() {
      const select = document.getElementById("breedSelect");

      try {
        const response = await fetch(API_BASE + "/breeds/list/all");
        const data = await response.json();

        select.innerHTML = ""; // limpa
        const optionDefault = document.createElement("option");
        optionDefault.value = "";
        optionDefault.textContent = "Selecione uma raça";
        select.appendChild(optionDefault);

        const breeds = Object.keys(data.message).sort();
        breeds.forEach(breed => {
          const option = document.createElement("option");
          option.value = breed;
          option.textContent = breed;
          select.appendChild(option);
        });
      } catch (error) {
        console.error(error);
        select.innerHTML = "<option>Erro ao carregar raças</option>";
      }
    }

    // 2) Buscar 1 imagem da raça
    async function getOneImage() {
      const breed = document.getElementById("breedSelect").value;
      const container = document.getElementById("imagesContainer");

      if (!breed) {
        container.textContent = "Escolha uma raça primeiro.";
        return;
      }

      container.textContent = "Carregando...";
      container.style.textAlign = "center";

      try {
        const response = await fetch(`${API_BASE}/breed/${breed}/images/random`);
        const data = await response.json();

        container.innerHTML = "";
        const img = document.createElement("img");
        img.src = data.message;
        img.alt = "Cachorro da raça " + breed;
        
        container.appendChild(img);
        
      } catch (error) {
        console.error(error);
        container.textContent = "Erro ao buscar imagem.";
      }
    }

    // 3) Buscar 4 imagens da raça
    async function getFourImages() {
      const breed = document.getElementById("breedSelect").value;
      const container = document.getElementById("imagesContainer");

      if (!breed) {
        container.textContent = "Escolha uma raça primeiro.";
        return;
      }

      container.textContent = "Carregando...";
      container.style.textAlign = "center";

      try {
        const response = await fetch(`${API_BASE}/breed/${breed}/images/random/4`);
        const data = await response.json();

        container.innerHTML = "";
        data.message.forEach(url => {
          const img = document.createElement("img");
          img.src = url;
          img.alt = "Cachorro da raça " + breed;
          container.appendChild(img);
        });
      } catch (error) {
        console.error(error);
        container.textContent = "Erro ao buscar imagens.";
      }
    }

        async function getTenImages() {
      const breed = document.getElementById("breedSelect").value;
      const container = document.getElementById("imagesContainer");

      if (!breed) {
        container.textContent = "Escolha uma raça primeiro.";
        return;
      }

      container.textContent = "Carregando...";
      container.style.textAlign = "center";

      try {
        const response = await fetch(`${API_BASE}/breed/${breed}/images/random/10`);
        const data = await response.json();

        container.innerHTML = "";
        data.message.forEach(url => {
          const img = document.createElement("img");
          img.src = url;
          img.alt = "Cachorro da raça " + breed;
          container.appendChild(img);
        });
      } catch (error) {
        console.error(error);
        container.textContent = "Erro ao buscar imagens.";
      }
    }

           async function getOneHundredImages() {
      const breed = document.getElementById("breedSelect").value;
      const container = document.getElementById("imagesContainer");

      if (!breed) {
        container.textContent = "Escolha uma raça primeiro.";
        return;
      }

      container.textContent = "Carregando...";
      container.style.textAlign = "center";

      try {
        const response = await fetch(`${API_BASE}/breed/${breed}/images/random/100`);
        const data = await response.json();

        container.innerHTML = "";
        data.message.forEach(url => {
          const img = document.createElement("img");
          img.src = url;
          img.alt = "Cachorro da raça " + breed;
          container.appendChild(img);
        });
      } catch (error) {
        console.error(error);
        container.textContent = "Erro ao buscar imagens.";
      }
    }

    // Eventos dos botões
    document.getElementById("btnOne").addEventListener("click", getOneImage);
    document.getElementById("btnFour").addEventListener("click", getFourImages);
    document.getElementById("btnTen").addEventListener("click", getTenImages)
    document.getElementById("btn100").addEventListener("click", getOneHundredImages)

    // Inicializa
    loadBreeds();