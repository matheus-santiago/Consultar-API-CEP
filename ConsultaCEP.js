const apiUrl = 'https://brasilapi.com.br/api/cep/v1/89025301';

async function getcep(){
    try{
    const response = await fetch(apiUrl);
    const data = await response.json()

    console.log('Consulta realizada com sucesso')
    console.log('CEP consultado:', data.cep)
    console.log('ESTADO:', data.state)
    console.log('CIDADE:', data.city)
    console.log('BAIRRO:', data.neighborhood)
    console.log('RUA:', data.street)
    
} catch (error){
    console.error(error)
}}

getcep()