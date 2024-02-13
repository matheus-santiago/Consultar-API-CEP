async function consultarCEP(){
//Obtém o valor do CEP do input
    const cep = document.getElementById('cepInput').value;


    //Constante para construir a varíavel com o CEP do usuário
    const apiUrl = `https://brasilapi.com.br/api/cep/v1/${cep}`;
    
        try{
            //Faz a requisição à API
            const response = await fetch(apiUrl);
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