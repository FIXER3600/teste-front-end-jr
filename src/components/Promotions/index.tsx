import './style.css'
export interface IPromotionsProps {
}

export default function Promotions (props: IPromotionsProps) {
  return (
    <div className='promotions'>
      <p id='title1'>CADASTRE-SE E RECEBA NOSSAS</p>
      <p id='title2'>NOVIDADES E PROMOÇÕES</p>
      <div className='form'>
      <p className='description'>Excepteur sint occaecat cudatat non ent, sunt in culpa qui officia lorem ipsum</p>
     <div className='form2'> <input  type="text" placeholder='SEU E-MAIL'/>
      <button id='ok'>OK</button>
      </div>
      </div>
    </div>
  );
}
