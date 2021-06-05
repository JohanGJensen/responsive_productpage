import { FunctionComponent } from "react";
import styles from "../styles/Products.module.css";
// components
import Image from "next/image";

interface IconProps {
  icon: string;
}

/*
 * TODO:
 * It would be cool to have the icons be determined based on different factors,
 * such as "out of stock" or "low on stock" etc.
 */

const ProductIcon: FunctionComponent<IconProps> = ({ icon }) => {
  return (
    <div className={styles.iconWrapper}>
      <Image src={`/images/${icon}.svg`} alt={icon} width={16} height={18} />
    </div>
  );
};

export default ProductIcon;
