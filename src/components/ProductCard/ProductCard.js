import React from 'react';

const ProductCard = props => {
  console.log(`carregando o produto --- ${props.produto.name}`);
  const carregarBotaoDeCompra = (product) => {
    return product.stock > 0 ? <button>Comprar</button> : <p>Produto Indisponível no momento</p>
  }

  return (
    <div className="product-container">
      <img className="product-img" src={props.produto.pictureUrl} alt={props.produto.name} />
      <p>{props.produto.name}</p>
      <p>Price: {props.produto.price}</p>

      {carregarBotaoDeCompra(props.produto)}
    </div>
  );
};

export default ProductCard;
