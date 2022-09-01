import React from "react";
import styles from "./Loading.module.css";

const Loading = () => {
  return (
    <section className="products">
      <div className={styles.loadingContainer}>
        <p className={styles.loadingText}> Товары загружаются...</p>
      </div>
    </section>
  );
};
export default Loading;
