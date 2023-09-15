import * as React from 'react';
import './style.css'
export interface IHighlightsProps {
}

export default function Highlights (props: IHighlightsProps) {
  return (
    <section className='highlights'>
       <div className='highlight-text'>
    <p>Venha conhecer nossas</p>
    <p className='promo-text'>promoções</p>
  </div>
      <p className='promotion'>50% Off nos produtos</p>
      <button id='button-highlight'>Ver produto</button>
    </section>
  );
}
