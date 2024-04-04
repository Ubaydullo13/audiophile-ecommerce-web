import headphonesIcon from "../../assets/image/category/category-headphones2.svg";
import speakerIcon from "../../assets/image/category/category-speaker2.svg";
import styles from "./index.module.css";
import { useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";

function ProductCard(props) {
  const { data } = props;
  const navigate = useNavigate();
  const [imageSrc, setImageSrc] = useState(null);

  const handleClick = () => {
    navigate(`/products/${data.id}`);
    window.scrollTo({
      top: 0,
      behavior: "smooth"
    });
  };

  useEffect(() => {
    async function loadImage() {
      let imgSrc;

      if (data.id === 3) {
        imgSrc = await import("../../assets/image/category/category-speaker2.svg");
      } else {
        imgSrc = await import("../../assets/image/category/category-headphones2.svg");
      }

      setImageSrc(imgSrc.default);
    }

    loadImage();
  }, [data.id]);

  // const renderProductImage = () => {
  //   return data.id == 3 ? headphonesIcon : speakerIcon;
  // };

  return (
    <div className={styles.card}>
      <div className={styles.texts}>
        <span className={styles.status}>NEW PRODUCT</span>
        <h2 className={styles.title}>{data.name}</h2>
        <p className={styles.desc}>{data.description}</p>
        <button onClick={handleClick} className={styles.seeButton}>
          See Product
        </button>
      </div>
      <div className={styles.image}>
      {
          imageSrc && (
            <img
          className={styles.img}
          src={imageSrc}
          alt="Product Image"
        />
          )
        }
      </div>
    </div>
  );
}

export default ProductCard;
