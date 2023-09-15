import * as React from "react";
import { Product } from "../Global/GlobalStorage";
import Close from "../assets/Line 14.png";
import Close2 from '../assets/Line 13.png';
import "./style.css";
export interface IModalProps {
  selectedProduct: Product;
  closeModal: React.MouseEventHandler<HTMLButtonElement>;
}

export function Modal(props: IModalProps) {
  const [count, setCount] = React.useState<number>(1); // Inicializa o contador com 1

  const handleIncrement = () => {
    setCount((prevCount) => prevCount + 1);
  };

  const handleDecrement = () => {
    if (count > 1) {
      setCount((prevCount) => prevCount - 1);
    }
  };

  return (
    <div className="modal-overlay">
      <div className="modal">
        <div className="modal-content">
          <img
            id="photo-product"
            src={props.selectedProduct.photo}
            alt="Foto do Produto"
          />
          <div className="data">
            <p id="title-modal">LOREM IPSUM DOLOR SIT AMET</p>
            <p id="price-modal">
              {props.selectedProduct.price > 1000
                ? props.selectedProduct.price.toLocaleString("pt-BR", {
                    style: "currency",
                    currency: "BRL",
                  })
                : props.selectedProduct.price.toLocaleString("pt-BR", {
                    minimumFractionDigits: 2,
                    style: "currency",
                    currency: "BRL",
                  })}
            </p>
            <p id="description-modal">
              Many desktop publishing packages and web page editors
              <br /> now many desktop publishing
            </p>
            <p id="see-more">Veja mais detalhes do produto &gt;</p>
            <div className="input-container">
              <span className="icon-modal minus" onClick={handleDecrement}><svg xmlns="http://www.w3.org/2000/svg" width="21" height="20" viewBox="0 0 21 20" fill="none">
<path d="M4.53816 9.81812H16.3843" stroke="#041E50" stroke-width="2" stroke-linecap="square" stroke-linejoin="round"/>
</svg></span>
              <input type="text" className="counter-input" value={count} readOnly />
              <span className="icon-modal plus" onClick={handleIncrement}><svg xmlns="http://www.w3.org/2000/svg" width="21" height="20" viewBox="0 0 21 20" fill="none">
  <path d="M10.6925 4.09094V15.5455" stroke="#041E50" stroke-width="2" stroke-linecap="square" stroke-linejoin="round"/>
  <path d="M4.76863 9.81812H16.6148" stroke="#041E50" stroke-width="2" stroke-linecap="square" stroke-linejoin="round"/>
</svg></span>
            </div>

            <button id="modal-button">COMPRAR</button>
          </div>
          <span className="close-button" onClick={props.closeModal}>
            <img className="image1" src={Close} alt="" />
            <img className="image2"src={Close2} alt="" />
          </span>
        </div>
      </div>
    </div>
  );
}
export default Modal;
