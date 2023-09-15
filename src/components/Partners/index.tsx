import * as React from 'react';
import './style.css';
export interface IPartnersProps {
	
}

export default function Partners (props: IPartnersProps) {
  return (
    <div className='partner-board'>
    <p className='title-board'>Parceiros</p>
    <p className='description-board'>Lorem ipsum dolor sit<br/> amet, consectetur.</p>
    <button className='check-button'>CONFIRA</button>
   </div>
  );
}