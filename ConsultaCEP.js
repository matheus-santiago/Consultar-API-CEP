async function consultarCEP(){
//Obtém o valor do CEP do input
    const cep = document.getElementById('cepInput').value;

    // Validação do formato do CEP (apenas dígitos, 8 caracteres)
    if (!/^\d{8}$/.test(cep)) {
        const resultadoDiv = document.getElementById('resultado');
        resultadoDiv.innerHTML = '<p>CEP inválido. Deve conter apenas dígitos e ter 8 números.</p>';
        return;
    }

    //Constante para construir a varíavel com o CEP do usuário
    const apiUrl = `https://brasilapi.com.br/api/cep/v1/${cep}`;
    
        try{
            //Faz a requisição à API
            const response = await fetch(apiUrl);

            // Verifica se a resposta da API está ok
            if (!response.ok) {
                throw new Error("Erro ao consultar a API. Verifique o CEP informado.");
            }

            const data = await response.json()

            //Exibe as informações na tela
            const resultadoDiv = document.getElementById('resultado');
            resultadoDiv.innerHTML = `
                <p>CEP consultado: ${data.cep}</p>
                <p>Estado: ${data.state}</p>
                <p>Cidade: ${data.city}</p>
                <p>Bairro: ${data.neighborhood}</p>
                <p>Rua: ${data.street}</p>
            `;

       // Exibe mensagens de erro na página
    } catch (error){
        const resultadoDiv = document.getElementById('resultado');
        resultadoDiv.innerHTML = '<p>Erro a consultar a API, verifique o CEP informado</p>'
}};