import { FunctionComponent } from "react";
import styles from "../styles/Products.module.css";
// components
import ProductCard from "../components/ProductCard";
import Filter from "../components/Filter";
// context
// import { filterContext } from "../store";
// types
import { ProductInfo } from "../types/product";
// hooks
import { useFilter } from "../hooks/useFilter";

const fakeProducts: Array<ProductInfo> = [
  {
    id: "1",
    name: "The New product",
    tags: [
      { text: "30 Days Free Returns", color: "#0E9F6D" },
      { text: "50% Off 2nd Battery", color: "#0E9F6D" },
    ],
    icon: "",
    imgUrl: "/vercel.svg",
    pageLink: "product-gen-3",
    price: ["6,999"],
    payment: "STARTING AT $93/MO WITH AFFIRM",
    productType: ["Speakers"],
  },
  {
    id: "2",
    name: "product 2",
    tags: [{ text: "30 Days Free Returns", color: "#0E9F6D" }],
    icon: "",
    imgUrl: "/vercel.svg",
    pageLink: "product-gen-2",
    price: ["6,299", "5,199"],
    payment: "STARTING AT $93/MO WITH AFFIRM",
    productType: ["Speakers"],
  },
  {
    id: "3",
    name: "Explorer Pack",
    tags: [{ text: "30 Days Free Returns", color: "#0E9F6D" }],
    icon: "",
    imgUrl: "/vercel.svg",
    pageLink: "explorer-pack",
    price: ["7,999", "5,999"],
    payment: "STARTING AT $93/MO WITH AFFIRM",
    productType: ["Speakers", "Bundles"],
  },

  {
    id: "4",
    name: "product x RF50",
    tags: [
      { text: "30 Days Free Returns", color: "#0E9F6D" },
      { text: "600. Donation pr. Speaker Sold", color: "#0E9F6D" },
    ],
    icon: "",
    imgUrl: "/vercel.svg",
    pageLink: "product-x-rf50",
    price: ["6,999"],
    payment: "STARTING AT $93/MO WITH AFFIRM",
    productType: ["Speakers"],
  },
  {
    id: "5",
    name: "product x Mikkeller",
    tags: [{ text: "Out of Stock", color: "#FA4616" }],
    icon: "",
    imgUrl: "/vercel.svg",
    pageLink: "product-mikkeller-edition-dk",
    price: ["7,199"],
    payment: "STARTING AT $93/MO WITH AFFIRM",
    productType: ["Speakers"],
  },
  {
    id: "6",
    name: "Orange Grill",
    tags: [],
    icon: "",
    imgUrl: "/vercel.svg",
    pageLink: "grill-orange",
    price: ["999"],
    payment: "STARTING AT $93/MO WITH AFFIRM",
    productType: ["Grills"],
  },

  {
    id: "7",
    name: "White Grill",
    tags: [],
    icon: "",
    imgUrl: "/vercel.svg",
    pageLink: "grill-white",
    price: ["999"],
    payment: "STARTING AT $93/MO WITH AFFIRM",
    productType: ["Grills"],
  },
  {
    id: "8",
    name: "Black Grill",
    tags: [],
    icon: "",
    imgUrl: "/vercel.svg",
    pageLink: "grill-black",
    price: ["999"],
    payment: "STARTING AT $93/MO WITH AFFIRM",
    productType: ["Grills"],
  },
  {
    id: "9",
    name: "product x JOHAN BUCHLER GRILL",
    tags: [
      { text: "Artist Editions", color: "#FA4616" },
      { text: "3 left in stock", color: "#FFCB3E" },
    ],
    icon: "",
    imgUrl: "/vercel.svg",
    pageLink: "product-x-johan-buchler-grill",
    price: ["999"],
    payment: "STARTING AT $93/MO WITH AFFIRM",
    productType: ["Grills", "Special Editions"],
  },
  {
    id: "10",
    name: "Backpack",
    tags: [{ text: "Compatible with all product versions", color: "#212222" }],
    icon: "",
    imgUrl: "/vercel.svg",
    pageLink: "backpack",
    price: ["999"],
    payment: "STARTING AT $93/MO WITH AFFIRM",
    productType: ["Accessories"],
  },
  {
    id: "11",
    name: "BATTERYBOKS",
    tags: [{ text: "Compatible with all product versions", color: "#212222" }],
    icon: "",
    imgUrl: "/vercel.svg",
    pageLink: "batteryboks",
    price: ["1,099"],
    payment: "STARTING AT $93/MO WITH AFFIRM",
    productType: ["Accessories"],
  },
  {
    id: "12",
    name: "Charger",
    tags: [],
    icon: "",
    imgUrl: "/vercel.svg",
    pageLink: "charger",
    price: ["369"],
    payment: "STARTING AT $93/MO WITH AFFIRM",
    productType: ["Accessories"],
  },
  {
    id: "13",
    name: "Gift Card",
    tags: [],
    icon: "",
    imgUrl: "/vercel.svg",
    pageLink: "gift-card",
    price: ["Min. 250"],
    payment: "STARTING AT $93/MO WITH AFFIRM",
    productType: ["Accessories"],
  },
];

const ProductsView: FunctionComponent = () => {
  const products = useFilter(fakeProducts);

  return (
    <>
      <Filter />
      <section className={styles.productContainer}>
        {products.map((product: ProductInfo) => {
          return (
            <ProductCard key={`product-${product.id}`} productInfo={product} />
          );
        })}
      </section>
    </>
  );
};

export default ProductsView;
