export interface Tag {
  text: string;
  color: string;
}

export interface ProductInfo {
  id: string;
  name: string;
  tags: Array<Tag>;
  icon: string;
  imgUrl: string;
  pageLink: string;
  price: Array<string>;
  payment: string;
  productType: Array<string>;
}

export interface ProductProps {
  productInfo: ProductInfo;
}
