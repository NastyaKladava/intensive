import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import Button from "../Button/Button";
import Input from "../Input/Input";
import { addToCart, getTotals } from "../../toolkitStore/reducers/cartSlice";
import styles from "./ProductItem.module.css";
import { isLogInSelector } from "../../toolkitStore/selectors";
import { inputNumberValidate } from "../../utils/validation";

const ProductItem = ({
  id,
  linkSrc,
  title,
  imageSrc,
  description,
  price,
  isShowRange,
}) => {
  const isShow = isShowRange;
  const [inputQty, setInputQty] = useState(0);
  const isLogIn = useSelector(isLogInSelector);
  const dispatch = useDispatch();

  const addProductToCart = () => {
    dispatch(addToCart({ id, title, price, inputQty }));
    dispatch(getTotals());
  };

  const handleInputChanges = (e) => {
    const qty = inputNumberValidate(e.target.value);
    setInputQty(qty);
  };

  return (
    <div className={styles.productItem}>
      <Link to={linkSrc} className={styles.productLink}>
        <h3 className={styles.productTitle}>{title}</h3>
      </Link>
      <img src={imageSrc} className={styles.productImage} alt={title} />
      <p className={styles.productDescr}>{description}</p>
      <div className={styles.productBuy}>
        <span className={styles.productPrice}>{price}$</span>
        {!isLogIn ? (
          <span className={styles.productNotice}>
            Чтобы добавить товар в корзину залогиньтесь!
          </span>
        ) : (
          <div className={styles.productAdd}>
            <Button
              type="button"
              handler={addProductToCart}
              classtype="primary"
            >
              Добавить в корзину
            </Button>
            {isShow === "true" && (
              <Input
                classtype="range"
                id="inputQty"
                type="number"
                name="inputQty"
                min="0"
                max="20"
                value={inputQty}
                handleInputChanges={handleInputChanges}
              />
            )}
          </div>
        )}
      </div>
    </div>
  );
};

export default ProductItem;
