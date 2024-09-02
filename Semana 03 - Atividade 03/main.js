const lugaresVisitados = [];
const listaHTML = document.getElementById("lugares-visitados");

function mostrarMenu(nomeUsuario) {
  let opcao;
  do {
    opcao = prompt(
      `${nomeUsuario}, selecione uma das opções abaixo:\n\n` +
        "1 - Adicionar um lugar na lista de lugares visitados\n" +
        "2 - Remover um lugar da lista de lugares visitados\n" +
        "3 - Listar todos os lugares\n" +
        "4 - Mostrar todos os lugares no documento HTML\n" +
        "5 - Sair"
    );

    switch (opcao) {
      case "1":
        const novoLugar = prompt("Digite o nome do lugar:");
        if (confirm(`Deseja adicionar ${novoLugar} à lista?`)) {
          lugaresVisitados.push(novoLugar);
          alert("Lugar adicionado com sucesso!");
        }
        break;
      case "2":
        if (lugaresVisitados.length === 0) {
          alert("Você ainda não adicionou nenhum lugar.");
        } else {
          // Exibir a lista de lugares e solicitar o número para remover
          let lista = "Lugares visitados:\n";
          lugaresVisitados.forEach((lugar, index) => {
            lista += `${index + 1} - ${lugar}\n`;
          });
          const indiceParaRemover = prompt(
            lista + "Digite o número do lugar que deseja remover:"
          );
          if (
            !isNaN(indiceParaRemover) &&
            indiceParaRemover >= 1 &&
            indiceParaRemover <= lugaresVisitados.length
          ) {
            lugaresVisitados.splice(indiceParaRemover - 1, 1);
            alert("Lugar removido com sucesso!");
          } else {
            alert("Número inválido. Tente novamente.");
          }
        }
        break;
      case "3":
        if (lugaresVisitados.length === 0) {
          alert("Você ainda não adicionou nenhum lugar.");
        } else {
          alert("Lugares visitados:\n" + lugaresVisitados.join("\n"));
        }
        break;
      case "4":
        if (lugaresVisitados.length === 0) {
          alert("Você ainda não adicionou nenhum lugar.");
        } else {
          // Limpar a lista antes de adicionar novos elementos
          listaHTML.innerHTML = "";

          lugaresVisitados.forEach((lugar, index) => {
            const li = document.createElement("li");
            li.textContent = `${index + 1} - ${lugar}`;
            listaHTML.appendChild(li);
          });
        }
        // **Aqui encerramos o loop**
        break;
      default:
        if (opcao !== "5") {
          alert("Opção inválida.");
        }
        break;
    }
  } while (opcao !== "4" && opcao !== "5");
}
const nomeUsuario = prompt("Digite seu nome:");
mostrarMenu(nomeUsuario);
