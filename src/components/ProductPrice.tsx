import { FunctionComponent } from "react";
import styles from "../styles/Products.module.css";
// components

interface PriceProps {
  price: Array<string>;
}

const ProductPrice: FunctionComponent<PriceProps> = ({ price }) => {
  const { priceWrapper } = styles;

  const getPriceClass = (count: number, current: number) => {
    // only 1 price string in the array
    if (count === 1) {
      return styles.price;
    }

    if (current === 1) {
      return styles.priceCurrent;
    }

    if (current === 0) {
      return styles.pricePrevious;
    }
  };

  const getPrice = () => {
    // if the array is greater than 2 values, we remove those and only use the latest
    const prices = price.slice(price.length - 2);

    return prices.map((price, idx) => {
      return (
        <h4 key={`price-${idx}`} className={getPriceClass(prices.length, idx)}>
          {price} kr.
        </h4>
      );
    });
  };

  return <div className={priceWrapper}>{getPrice()}</div>;
};

export default ProductPrice;
