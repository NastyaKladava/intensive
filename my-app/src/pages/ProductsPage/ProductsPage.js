import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import ProductItem from "../../components/ProductItem/ProductItem";
import Button from "../../components/Button/Button";
import { changeLimit } from "../../toolkitStore/reducers/shopSlice";
import { limitSelector, productsSelector } from "../../toolkitStore/selectors";
import styles from "./ProductsPage.module.css";
import { fetchProducts } from "../../toolkitStore/thunks";

export const Products = () => {
  const dataSize = 20;
  const products = useSelector(productsSelector);
  const limit = useSelector(limitSelector);
  const endUrl = `products?limit=${limit}`;
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchProducts(endUrl));
  }, [endUrl, dispatch]);

  const loadMoreProducts = () => dispatch(changeLimit());

  return (
    <>
      <section className="products">
        <div className={styles.productsContainer}>
          <h2 className={styles.productsTitle}>Перечень наших товаров</h2>
          <div className={styles.productsBox}>
            {products.map((product) => (
              <ProductItem
                key={product.id}
                id={product.id}
                isShowRange="false"
                linkSrc={`/products/${product.id}`}
                imageSrc={product.image}
                title={product.title}
                price={product.price}
              />
            ))}
          </div>
          {limit <= dataSize && (
            <Button type="button" classtype="load" handler={loadMoreProducts}>
              Ещё товары!
            </Button>
          )}
        </div>
      </section>
    </>
  );
};
