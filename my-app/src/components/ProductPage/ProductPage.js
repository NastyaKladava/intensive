import React, { useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import Button from "../Button/Button";
import ProductItem from "../ProductItem/ProductItem";
import styles from "./ProductPage.module.css";
import { useDispatch, useSelector } from "react-redux";
import { fetchCurProduct } from "../../toolkitStore/thunks";
import { currentProdSelector } from "../../toolkitStore/selectors";

const Product = () => {
  const { id } = useParams();
  const endUrl = `products/${id}`;
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const product = useSelector(currentProdSelector);
  const goBack = () => navigate(-1);

  useEffect(() => {
    dispatch(fetchCurProduct(endUrl));
  }, [endUrl, dispatch]);

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
          isShowRange="true"
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
