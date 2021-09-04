import React from 'react';
import './App.css';

import Counter from './components/Counter/Counter';
import ProductCard from './components/ProductCard/ProductCard';

const produtos = [
  {
    id: 1,
    name: 'Jogo Banco Imobiliário',
    price: 100,
    stock: 0,
    pictureUrl: 'https://a-static.mlcdn.com.br/1500x1500/jogo-banco-imobiliario-tabuleiro-estrela/magazineluiza/181205900/bf4a18f528f318348b69cda561c32382.jpg',
  },
  {
    id: 2,
    name: 'Jogo War',
    price: 120,
    stock: 8,
    pictureUrl: 'https://lojagrow.vteximg.com.br/arquivos/ids/168661-1000-1000/02000_Grow_War.png?v=637491622878800000',
  },
  {
    id: 3,
    name: 'Detetive',
    price: 80,
    stock: 8,
    pictureUrl: 'https://a-static.mlcdn.com.br/618x463/jogo-detetive-com-aplicativo-estrela/patotabrinquedos/2880/f011a6aca16296ccd2767555a497e2d3.jpg',
  },
  {
    id: 4,
    name: 'Jogo da Vida',
    price: 160,
    stock: 10,
    pictureUrl: 'https://images-americanas.b2w.io/produtos/01/00/img7/01/00/item/356/7/356753_1GG.jpg',
  }
];

// COMPONENTE
function App() {
  console.log('MEU COMPONENTE APP FOI INVOCADO PELO REACT!!!!! :-)');

  const [counter, setCounter] = React.useState(0); // Criar variáveis de estado dentro do nosso componente

  const adicionarContador = () => {
    console.log('VALOR DE COUNTER -> ', counter);

    // counter += 1;

    const novoCounter = counter + 1;

    setCounter(novoCounter); // TEMOS QUE PASSAR NO setCounter O NOVO VALOR QUE O NOSSO counter VAI ASSUMIR!!
  };

  const carregarProdutos = listaDeProdutos => {
    // fazer loop na lista de produtos e montar um novo array de JSX
    // Array de OBJETOS -----> Array de JSX
    return listaDeProdutos.map((produto) => {
      return <ProductCard key={produto.id} produto={produto} />;
    });
  };

  return (
    <div className="container">
      <h1>Nosso primeiro contador! Clique no botão abaixo para adicionar 1 ao contador</h1>
      <Counter>{counter}</Counter>
      <button onClick={adicionarContador}>Adicionar 1</button>
      <h1>Ecommerce de Produtos</h1>
      <div className="todos-os-produtos">
        {carregarProdutos(produtos)}
      </div>
    </div>
  );
}

export default App;
