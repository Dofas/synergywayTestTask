import React from "react";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { removeProduct } from "../../store/reducers/basketReducer/basketSlice";

import styles from "./Basket.module.css";

const Basket = () => {
  const dispatch = useDispatch();
  const { myProducts } = useSelector((state) => state.basketReducer);
  const { total } = useSelector((state) => state.basketReducer);

  const handleRemove = (product) => {
    dispatch(removeProduct(product));
  };

  return (
    <>
      <ul className={styles.basketList}>
        {myProducts.length ? (
          myProducts.map((product) => (
            <li
              className={styles.basketListItem}
              key={Math.floor(Math.random() * 100)}
            >
              <span className={styles.basketItemTitle}>{product.title}</span>
              <div className={styles.basketListItemMenu}>
                Ціна: ${product.price}
                <button
                  className={styles.basketDeleteBtn}
                  onClick={() => handleRemove(product)}
                >
                  Видалити
                </button>
              </div>
            </li>
          ))
        ) : (
          <div>Ваш кошик порожній</div>
        )}
      </ul>
      <div className={styles.basketPrice}>Загальна сума: ${total}</div>
    </>
  );
};

export default Basket;
