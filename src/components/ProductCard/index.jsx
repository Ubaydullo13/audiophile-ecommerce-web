// import headphones1Img from "../../assets/image/category/category-headphones1.svg";
// import headphones3Img from "../../assets/image/category/category-headphones3.svg";
// import earphonesImg from "../../assets/image/category/category-earphones.svg";
// import speakerImg from "../../assets/image/category/category-speaker1.svg";
import styles from "./index.module.css"
import { useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";

function ProductCard(props) {
  const { data } = props;
  const navigate = useNavigate();
  const [imageSrc, setImageSrc] = useState(null);
  function handleClick() {
    navigate(`/products/${data.id}`)
    window.scrollTo({
      top: 0,
      behavior: "smooth"
    })
  }

  useEffect(() => {
    async function loadImage() {
      let imgSrc;

      if (data.id === 2) {
        imgSrc = await import("../../assets/image/category/category-earphones.svg");
      } else if (data.id === 1) {
        imgSrc = await import("../../assets/image/category/category-headphones3.svg");
      } else if (data.id === 6) {
        imgSrc = await import("../../assets/image/category/category-speaker1.svg");
      } else {
        imgSrc = await import("../../assets/image/category/category-headphones1.svg");
      }

      setImageSrc(imgSrc.default);
    }

    loadImage();
  }, [data.id]);


  return (
    <div className={styles.card}>
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
      <div className={styles.texts}>
        <span className={styles.status}>NEW PRODUCT</span>
        <h2 className={styles.title}>{data.name}</h2>
        <p className={styles.desc}>{data.description}</p>
        <button
          onClick={handleClick}
          className={styles.seeButton}
        >
          See Product
        </button>
      </div>
    </div>
  );
}

export default ProductCard;
