import Head from "next/head";
import styles from "../styles/Home.module.css";
// context
import { FilterContextProvider } from "../Provider";

// components
import Header from "../layouts/Header";
import ProductsView from "../layouts/ProductsView";
import Footer from "../layouts/Footer";

export default function StorePage() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Responsive ProductPage</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Header />
      <FilterContextProvider>
        <ProductsView />
      </FilterContextProvider>
      <Footer />
    </div>
  );
}