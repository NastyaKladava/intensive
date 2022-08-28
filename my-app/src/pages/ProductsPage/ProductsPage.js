import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import ProductItem from "../../components/ProductItem/ProductItem";
import Button from "../../components/Button/Button";
import { fetchProducts } from "../../toolkitStore/reducers/shopSlice";
import { productsSelector } from "../../toolkitStore/selectors/products";
import styles from "./ProductsPage.module.css";

export const Products = () => {
  const products = useSelector(productsSelector);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchProducts());
  }, []);

  const loadProducts = () => {
    dispatch(fetchProducts());
  };

  return (
    <>
      <section className='products'>
        <div className={styles.productsContainer}>
          <h2 className={styles.productsTitle}>Перечень наших товаров</h2>
          <div className={styles.productsBox}>
            {products.map((product) => (
              <ProductItem
                key={product.id}
                id={product.id}
                linkSrc={`/products/${product.id}`}
                imageSrc={product.image}
                title={product.title}
                price={product.price}
              />
            ))}
          </div>
          <Button type='button' classtype='load' handler={loadProducts}>
            Ещё товары!
          </Button>
        </div>
      </section>
    </>
  );
};
