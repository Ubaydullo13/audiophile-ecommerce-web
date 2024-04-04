import styles from "./index.module.css";
import bringingImg from "../../assets/home/bring.png"

function Bringing() {
  return (
    <div className={styles.bringing}>
      <div className={styles.bringingInfo}>
        <h2 className={styles.bringingTitle}>
          Bringing you the <span>best</span> audio gear
        </h2>
        <p className={styles.bringingDesc}>
          Located at the heart of New York City, Audiophile is the premier store
          for high end headphones, earphones, speakers, and audio accessories.
          We have a large showroom and luxury demonstration rooms available for
          you to browse and experience a wide range of our products. Stop by our
          store to meet some of the fantastic people who make Audiophile the
          best place to buy your portable audio equipment.
        </p>
      </div>
      <div className={styles.bringingImg}>
        <img src={bringingImg} alt="bringingImg" />
      </div>
    </div>
  );
}

export default Bringing;
