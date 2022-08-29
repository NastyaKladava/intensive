import React from "react";
import { useNavigate, useParams } from "react-router-dom";
import { useSelector } from "react-redux";
import Button from "../Button/Button";
import ProductItem from "../ProductItem/ProductItem";
import styles from "./ProductPage.module.css";

const Product = () => {
  const { id } = useParams();
  const product = useSelector((toolkitStore) => toolkitStore.shop.products[id]);
  const navigate = useNavigate();
  const goBack = () => navigate(-1);

  return (
    <section className="product">
      <div className={styles.productContainer}>
        <div className={styles.productTop}>
          <Button handler={goBack} className={styles.btn} classtype="primary">
            Назад
          </Button>
          <h2 className={styles.productTitle}>
            Здесь представлено подробное описание товара
          </h2>
        </div>
        <ProductItem
          key={product.id}
          linkSrc=""
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
