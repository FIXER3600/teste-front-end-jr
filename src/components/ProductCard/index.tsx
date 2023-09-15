import * as React from 'react';
import './style.css';
export interface IProductCardProps {
  img:string,
  description:string,
  price:number,
  productName:string,
  onClick:React.MouseEventHandler<HTMLDivElement>
}

export default function ProductCard (props: IProductCardProps) {
  return (
    <div className='card' onClick={props.onClick}>
      <img src={props.img} alt="" />
      <p id='description-card'>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
      <p id='old-value'>R$ 30,90</p>
      <p id='price'>{props.price > 1000 ? props.price.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' }) : 
      props.price.toLocaleString('pt-BR', { minimumFractionDigits: 2, style: 'currency', currency: 'BRL' })}</p>
      <p id='portion'>ou 2x de R$ 49,95 sem juros</p>
      <p id='freight'>Frete grátis</p>
      <button id='button-card'>COMPRAR</button>
    </div>
  );
}
