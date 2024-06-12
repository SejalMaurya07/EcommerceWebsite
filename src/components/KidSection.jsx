import Header1 from './Header1';
import React from 'react';
import styles from "./WomenSection.module.css"; // Import CSS module

function KidSection({ products }) {
  return (
    <>
   
      <section className={`${styles.men} ${styles.section1}`} id="women">
        <h1 className={styles.catheading}>KID'S SECTION</h1>
        <div className={styles["grid-container"]}>
          {products.map((product, index) => (
            <div key={index} className={styles["grid-item"]}>
              <img src={product.image} alt={product.name} />
              <div className={styles["product-details"]}>
                <p className={styles["product-name"]}>{product.name}</p>
                <p className={styles["price-container"]}>
                  <span className={styles["product-price"]}>{product.price}</span>
                  <span className={styles["product-false"]}>{product.originalPrice}</span>
                </p>
                <p className={styles["product-discount"]}>{product.discount}</p>
                <button className={styles["add-to-cart-btn"]}>Add to Cart</button>
              </div>
            </div>
          ))}
        </div>
      </section>
    </>
  );
}

export default KidSection;
