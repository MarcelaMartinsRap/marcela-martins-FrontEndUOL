# Projeto de Redirecionamento Automático

**Descrição:**

Este projeto demonstra como criar um sistema simples que redireciona o usuário para uma nova página HTML após um determinado tempo de espera. 
**Tecnologias Utilizadas:**

* HTML
* CSS
* JavaScript

**Como Usar:**

1. Abra os arquivos HTML em um navegador web.
2. A página inicial será exibida com a imagem de carregamento
3. Após 4 segundos, o usuário será automaticamente redirecionado para a página "Introdução".

**Personalização:**

* **Tempo de espera:** Modifique o valor dentro da função `setTimeout` para ajustar o tempo de espera.
* **Imagem de carreagamento:** Altere a imagem loading de acordo com o que desejar dentro do index html com o nome de classe "loading"
* **Estilos:** Adicione mais estilos CSS para customizar a aparência das páginas.


* **index.html:** Cria a página inicial com a div container onde são exibidas as imagens de 'logo-pomo' e 'loading' para exibir o carregamento.
* **intro.html:** Cria a página de destino com o título "Introdução".
* **style.css:** Define os estilos para as páginas, como o posicionamento das imagens de carregamento.
* **main.js:**
    * A função `setTimeout` é utilizada para executar uma função após um determinado tempo.
    * A função anônima dentro do `setTimeout` redireciona o usuário para a página `intro.html` usando o método `window.location.href` que mostra a localização da página a ser redirecionado após o tempo determinado.

#Aprendizado Semana 2

* **Principais tags html
* **JavaScript
* **Estilização com css
* **Flexbox - Conceitos de posicionamneto de div's
* **Integração de JavaScript no html para mostrar respostas ao usuário e manipular dados