import Shield from "../../assets/icons/ShieldCheck.png";
import Truck from "../../assets/icons/Truck.png";
import Card from "../../assets/icons/CreditCard.png";
import Group from "../../assets/icons/Group.png";
import Heart from "../../assets/icons/Heart.png";
import UserCircle from "../../assets/icons/UserCircle.png";
import ShoppingCart from "../../assets/icons/ShoppingCart.png";
import Logo from "../../assets/logo.png";
import Crown from "../../assets/icons/CrownSimple.png";
import "./style.css";

export default function Header() {
  return (
    <header>
      <section className="top">
        <p>
          <img src={Shield} alt="" className="icon" />
          Compra <span className="high">100% Segura</span>
        </p>
        <p>
          <img src={Truck} alt="" className="icon" />
          <span className="high">Frete grátis</span> acima de R$ 200
        </p>
        <p>
          <img src={Card} alt="" className="icon" />
          <span className="high">Parcele</span> suas compras
        </p>
      </section>

      <section className="header">
        <span className="logo">
          <img src={Logo} alt="VTEX" />
        </span>
        <input
          type="text"
          id="search"
          placeholder="O que você está buscando?"
        />
        <div className="options">
          <img src={Group} alt="Grupo" />
          <img src={Heart} alt="Favoritos" />
          <img src={UserCircle} alt="Perfil" />
          <img src={ShoppingCart} alt="Carrinho" />
        </div>
      </section>

      <section className="category">
        <p>TODAS AS CATEGORIAS</p>
        <p>SUPERMERCADO</p>
        <p>LIVROS</p>
        <p>MODA</p>
        <p>LANÇAMENTOS</p>
        <p>OFERTAS DO DIA</p>

        <p>
          <img src={Crown} alt="Assinatura" className="icon" />
          ASSINATURA
        </p>
      </section>
    </header>
  );
}
