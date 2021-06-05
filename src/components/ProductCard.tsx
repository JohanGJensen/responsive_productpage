import { FunctionComponent } from "react";
import styles from "../styles/Products.module.css";
// components
import Link from "next/link";
import Image from "next/image";
import ProductTags from "./ProductTags";
import ProductIcon from "./ProductIcon";
import ProductPrice from "./ProductPrice";
// types
import { ProductProps } from "../types/product";

const ProductCard: FunctionComponent<ProductProps> = ({ productInfo }) => {
  const { id, name, tags, icon, imgUrl, pageLink, price, payment } =
    productInfo;
  const {
    productCard,
    infoWrapper,
    productName,
    productPayment,
    nameWrapper,
    productImage,
  } = styles;

  const productPage = "";

  // TODO: Would be cool to split card up further into smaller components: mainly for the text based components
  return (
    <Link href={`${productPage}/${pageLink}`}>
      <article className={productCard}>
        {tags.length > 0 && <ProductTags tags={tags} />}
        {icon && <ProductIcon icon={icon} />}
        <Image
          className={productImage}
          src={imgUrl}
          alt={`store-image-${id}`}
          width={296}
          height={296}
        />
        <div className={infoWrapper}>
          <div className={nameWrapper}>
            <h4 className={productName}>{name}</h4>
            <ProductPrice price={price} />
          </div>
          <h5 className={productPayment}>{payment}</h5>
        </div>
      </article>
    </Link>
  );
};

export default ProductCard;
