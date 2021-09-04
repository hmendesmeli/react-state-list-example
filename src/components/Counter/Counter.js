import React from 'react';

const Counter = (props) => {
  console.log('CARREGANDO O COMPONENTE COUNTER!!!!')

  return <p>{props.children}</p>
};

export default Counter;
