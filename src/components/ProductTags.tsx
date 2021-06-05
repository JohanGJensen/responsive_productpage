import { FunctionComponent } from "react";
import styles from "../styles/Products.module.css";
// components
// types
import { Tag } from "../types/product";

interface TagProps {
  tags: Array<Tag>;
}

const ProductTags: FunctionComponent<TagProps> = ({ tags }) => {
  const { tagsWrapper } = styles;

  return (
    <div className={tagsWrapper}>
      {tags.map((tag, idx) => {
        return (
          <h6
            key={`tag-${idx}`}
            className={styles.tag}
            style={{ backgroundColor: tag.color }}
          >
            {tag.text}
          </h6>
        );
      })}
    </div>
  );
};

export default ProductTags;
