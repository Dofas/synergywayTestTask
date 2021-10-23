import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { fetchProduct } from "../../store/reducers/productReducer/actionCreators";
import { addProduct } from "../../store/reducers/basketReducer/basketSlice";
import styles from "./Product.module.css";

const Product = () => {
  const dispatch = useDispatch();
  const { products, isLoading, error } = useSelector(
    (state) => state.productReducer
  );

  const addItem = (product) => {
    dispatch(addProduct(product));
  };

  useEffect(() => {
    if (!products.length) {
      dispatch(fetchProduct());
    }
  });

  return (
    <>
      {isLoading && <h1>Товари загружаються</h1>}
      {error && <h1>{error}</h1>}
      <ul className={styles.list}>
        {products &&
          products.map((product) => (
            <li className={styles.listItem} key={product.id}>
              {product.id}.{product.title}
              <div className={styles.listItemPrice}>
                Ціна: ${product.price}
                <button
                  className={styles.listItemButton}
                  onClick={() => addItem(product)}
                >
                  Додати товар до кошика
                </button>
              </div>
            </li>
          ))}
      </ul>
    </>
  );
};

export default Product;
