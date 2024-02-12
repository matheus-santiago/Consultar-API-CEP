/*Cria variável para solicitar CEP ao usuário*/
cep = prompt("Qual seu CEP?")

/*Constante para construir a varíavel com o CEP do usuário*/
const apiUrl = `https://brasilapi.com.br/api/cep/v1/${cep}`;

/*Função para tratar os dados da API e apresentar no console*/
async function getcep(){
    
    try{
    /*Busca response da API e transforma em JSON*/
    const response = await fetch(apiUrl);
    const data = await response.json()

    /*Apresenta os dados no console*/
    console.log('Consulta realizada com sucesso')
    console.log('CEP consultado:', data.cep)
    console.log('ESTADO:', data.state)
    console.log('CIDADE:', data.city)
    console.log('BAIRRO:', data.neighborhood)
    console.log('RUA:', data.street)
    
    /*Apresenta em console o erro da API (Caso ocorra algum erro)*/
} catch (error){
    console.error(error)
}}

/*Chama a função*/
getcep()