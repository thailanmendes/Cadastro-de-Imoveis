/*
Escreva um programa em javascript que funcione como um cadastro de imóveis e atenda aos seguintes requisitos:
Deve ter um menu interativo que sempre é exibido até que o usuário escolha sair.
O menu interativo deve mostrar no topo a quantidade de imóveis cadastrados.
O menu deve ter a opção de salvar um imóvel.
Para salvar um novo imóvel o programa deve pedir as seguintes informações: Nome do proprietário.Quantidade de quartos.Quantidade de banheiros.Se possui garagem.
Nome do proprietário.
Quantidade de quartos.
Quantidade de banheiros.
Se possui garagem.
O menu também deve ter a opção de mostrar todos os imóveis salvos.
*/

let imoveis = []  //arrays de imoveis
let opcao = ""  

do {
    
    //menu interativo  // imoveis.length = para mostrar a quantidade de imoveis cadastrados
    opcao = prompt(
        "Bem-vindo ao Cadastro de Imóveis.\nTotal de imóveis: " + imoveis.length +
        "\n\nEscolha uma opção:\n1. Novo imóvel\n2. Listar imóveis\n3. Sair"
      )

    switch (opcao) {
        case "1":
            let imovel = {}; // Objeto para armazenar cada imóvel
    
            // Pedir o nome do proprietário e garantir que não esteja vazio
            //O laço do-while garante que o programa continue pedindo o dado até que um valor válido seja inserido. Ele é usado para todos os campos: nome do proprietário, quantidade de quartos, banheiros e a resposta sobre a garagem.
            do {
                imovel.proprietario = prompt("Informe o nome do proprietário:");
                if (imovel.proprietario.trim() === "") { //O método trim() em JavaScript remove os espaços em branco do início e do final de uma string. Isso é útil quando você deseja garantir que o usuário não insira apenas espaços em branco, especialmente em entradas de texto, como o nome do proprietário ou outras informações.
                    alert("Por favor, digite um nome válido para o proprietário!");
                }
            } while (imovel.proprietario.trim() === "" ); // Repete até que o nome não esteja vazio
    
            // Pedir a quantidade de quartos e garantir que não esteja vazio ou não seja um número
            do {
                imovel.quartos = prompt("Informe a quantidade de quartos:");
                if (imovel.quartos.trim() === "" || isNaN(imovel.quartos) || (imovel.quartos.length > 2 || Number(imovel.quartos) > 10)) {
                    alert("Por favor, digite um valor válido para a quantidade de quartos!");
                }
            } while (imovel.quartos.trim() === "" || isNaN(imovel.quartos) || (imovel.quartos.length > 2 || Number(imovel.quartos) > 10)) // Repete até que seja válido
    
            // Pedir a quantidade de banheiros e garantir que não esteja vazio ou não seja um número
            do {
                imovel.banheiros = prompt("Informe a quantidade de banheiros:");
                if (imovel.banheiros.trim() === "" || isNaN(imovel.banheiros) || (imovel.banheiros.length > 2 || Number(imovel.banheiros) > 10)) {
                    alert("Por favor, digite um valor válido para a quantidade de banheiros!");
                }
            } while (imovel.banheiros.trim() === "" || isNaN(imovel.banheiros) || (imovel.banheiros.length > 2 || Number(imovel.banheiros) > 10)) // Repete até que seja válido
    
            // Pedir se possui garagem e garantir que a resposta seja "Sim" ou "Não"
            do {
                imovel.garagem = prompt("O imóvel possui garagem? (Sim/Não):").toLowerCase();
                if (imovel.garagem.trim() === "" || (imovel.garagem !== "sim" && imovel.garagem !== "não")) {
                    alert("Por favor, responda apenas 'Sim' ou 'Não' para a garagem!");
                }
            } while (imovel.garagem.trim() === "" || (imovel.garagem !== "sim" && imovel.garagem !== "não")); // Repete até que a resposta seja "Sim" ou "Não"
            

            // Perguntando ao usuario se ele tem certeza de salvar o imovel com o confirm() retorna true ou false
            let confirmacao = confirm(
                "Tem certeza que deseja salvar esse imovel ?\n" +
                "\nProprietario: " + imovel.proprietario +
                "\nQuartos: " + imovel.quartos +
                "\nBanheiros: " + imovel.banheiros +
                "\nGaragem: " + imovel.garagem
            )

            // caso o usuario confirme ao salvar o imovel sera adicionado a lista com o metodo push
            if (confirmacao) {  
                imoveis.push(imovel)  // adicionando o imovel a lista de array imoveis
                alert("Imovel cadastrado com susesso")
            } else {
                alert("Voltando para o menu") // caso o usuario nao confirma salvar pelo algum fato de ter digitado errado etc.. sera retornado para o menu
            }
            break
        case "2":
            //laco de repeticao para alertar cada imovel da lista
            for (let i = 0; i < imoveis.length; i++) {
                alert(
                  "Imóvel " + (i + 1) +
                  "\nProprietário: " + imoveis[i].proprietario + //misturando as sixtaxes de arrays e objetos
                  "\nQuartos: " + imoveis[i].quartos +
                  "\nBanheiros: " + imoveis[i].banheiros +
                  "\nPossui Garagem? " + imoveis[i].garagem
                )
              }
            break
        case "3":
            alert("Saindo...")
            break
        default:
            alert("Opcao invalida !!")
    }

}while(opcao !== "3")



