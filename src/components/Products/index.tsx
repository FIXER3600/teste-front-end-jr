import * as React from 'react';
import './style.css';
export interface IProductsProps {
	
}

export default function Products (props: IProductsProps) {
  return (
    <div className='productBoard'>
     <p className='titleBoard'>Produtos</p>
     <p className='descriptionBoard'>Lorem ipsum dolor sit<br/> amet, consectetur</p>
     <button className='checkButton'>CONFIRA</button>
    </div>
  );
}