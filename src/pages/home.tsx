import * as React from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import Highlights from "../components/Highlights";
import Category from "../components/Category";
import Products from "../components/Products";
import BrandItem from "../components/BrandItem";
import "./style.css";
import Partners from "../components/Partners";
import ProductCard from "../components/ProductCard";
import { categories } from "../constants/categories";
import { useGlobalContext } from "../hooks/useGlobalContext";
import { Product } from "../Global/GlobalStorage";
import Modal from "./modal";
import RowItem from "../components/RowItem";

export function Home() {
  const [currentIndex, setCurrentIndex] = React.useState(0);
  const nextSlide = () => {
    setCurrentIndex((prevIndex) => {
      const nextIndex = prevIndex + 4;
      if (nextIndex >= products.length) {
        // Se estiver no final da lista, volte ao início mostrando os primeiros 2 itens
        return 0;
      } else if (nextIndex + 2 >= products.length) {
        // Se chegar aos últimos 2 itens, mostre-os junto com os primeiros 2 itens
        return products.length - 4;
      } else {
        return nextIndex;
      }
    });
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) => {
      if (prevIndex === 0) {
        // Se estiver no início, vá para os últimos 2 itens mostrando os primeiros 2 itens
        return products.length - 4;
      } else if (prevIndex <= 2) {
        // Se estiver nos primeiros 2 itens, vá para o início da lista
        return 0;
      } else {
        return prevIndex - 4;
      }
    });
  };

  const renderProductsInSlide = () => {
    return products.slice(currentIndex, currentIndex + 4).map((product) => (
      <ProductCard
        onClick={() => {
          openModal(product);
        }}
        img={product.photo}
        description={product.description}
        price={product.price}
        productName={product.name}
      />
    ));
  };
  const { products } = useGlobalContext();
  const [selectedProduto, setSelectedProduct] = React.useState<Product | null>(
    null
  );
  const openModal = (produto: Product) => {
    setSelectedProduct(produto);
  };
  const closeModal = () => {
    setSelectedProduct(null);
  };

  return (
    <div>
      <Header />
      <Highlights />
      <section className="categories">
        {categories.map((category) => (
          <Category img={category.img} title={category.title} />
        ))}
      </section>
      <div className="content-title-products">
        <div className="divider"></div>
        <div className="content-title-column">
          <h2 className="title">Produtos relacionados</h2>
        </div>
        <div className="divider"></div>
      </div>
      <div className="row-content">
        <RowItem name="CELULAR" />
        <RowItem name="ACESSÓRIOS" />
        <RowItem name="TABLETS" />
        <RowItem name="NOTEBOOKS" />
        <RowItem name="TVS" />
        <RowItem name="VER TODOS" />
      </div>
      
      <div className="carousel">
      <span onClick={prevSlide}>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="20"
          height="34"
          viewBox="0 0 20 34"
          fill="none"
          cursor={'pointer'}
        >
          <path
            d="M20 3.03939L16.9666 0L0 17L16.9666 34L20 30.9606L6.06684 17L20 3.03939Z"
            fill="#3F3F40"
          />
        </svg>
      </span>
        <div className={`slide ${currentIndex !== 0 ? 'slide-animation' : ''}`}>
          {renderProductsInSlide()}

          {selectedProduto && (
            <Modal selectedProduct={selectedProduto} closeModal={closeModal} />
          )}
        </div>

        {selectedProduto && (
          <Modal selectedProduct={selectedProduto} closeModal={closeModal} />
        )}
         <span onClick={nextSlide}>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="20"
          height="34"
          viewBox="0 0 20 34"
          fill="none"
          cursor={'pointer'}
        >
          <path
            d="M0 30.9606L3.03342 34L20 17L3.03342 0L0 3.03939L13.9332 17L0 30.9606Z"
            fill="#3F3F40"
          />
        </svg>
      </span>
      </div>
     
      <section className="product-content">
        <Partners />
        <Partners />
      </section>
      <div className="content-title-products">
        <div className="divider"></div>
        <div className="content-title-column">
          <h2 className="title">Produtos relacionados</h2>

          <p>Ver todos</p>
        </div>
        <div className="divider"></div>
      </div>
      <section className="product-content">
        <Products />
        <Products />
      </section>
      <h2 className="title">Navegue por Marcas</h2>
      <section className="brands">
        <BrandItem />
        <BrandItem />
        <BrandItem />
        <BrandItem />
        <BrandItem />
        <svg xmlns="http://www.w3.org/2000/svg" width="76" height="76" viewBox="0 0 76 76" fill="none" cursor={'pointer'}>
  <g filter="url(#filter0_d_1_1470)">
    <circle cx="38" cy="34" r="28" fill="white"/>
  </g>
  <path d="M41.0096 33.8506L41.3545 33.5L41.0096 33.1494L32.7017 24.7029L34.664 22.7122L45.2979 33.5L34.664 44.2878L32.7017 42.2971L41.0096 33.8506Z" fill="#0080BF" stroke="white"/>
  <defs>
    <filter id="filter0_d_1_1470" x="0" y="0" width="76" height="76" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
      <feFlood flood-opacity="0" result="BackgroundImageFix"/>
      <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
      <feOffset dy="4"/>
      <feGaussianBlur stdDeviation="5"/>
      <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.18 0"/>
      <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_1_1470"/>
      <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_1_1470" result="shape"/>
    </filter>
  </defs>
</svg>
      </section>
      <Footer />
    </div>
  );
}
export default Home;
