import React, { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { fetchProducts } from "../../requests/getProducts";
import Button from "../Button/Button";
import ProductItem from "../ProductItem/ProductItem";
import styles from "./ProductPage.module.css";

const Product = () => {
  const { id } = useParams();
  const [product, setProduct] = useState([]);

  // const requestUrl = `https://fakestoreapi.com/products/${id}`;

  const navigate = useNavigate();
  const goBack = () => navigate(-1);

  useEffect(() => {
    fetchProducts(`https://fakestoreapi.com/products/${id}`, setProduct);
  }, [id]);

  return (
    <section className='product'>
      <div className={styles.productContainer}>
        <div className={styles.productTop}>
          <Button handler={goBack} className={styles.btn}>
            Назад
          </Button>
          <h2 className={styles.productTitle}>
            Здесь представлено подробное описание товара
          </h2>
        </div>
        <ProductItem
          key={product.id}
          linkSrc=''
          imageSrc={product.image}
          title={product.title}
          description={product.description}
          price={product.price}
        />
      </div>
    </section>
  );
};

export default Product;
