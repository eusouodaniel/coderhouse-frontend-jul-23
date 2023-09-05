export const buscaEndereco = (setEndereco, cep) => {
  let enderecos = [];
  console.log(cep)
  fetch(`https://viacep.com.br/ws/${cep}/json`).then((response) => {
    return response.json();
  }).then((result) => {
    enderecos.push(result)
    setEndereco(enderecos);
  })
}