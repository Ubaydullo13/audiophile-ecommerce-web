import styles from './index.module.css'
import { Link } from "react-router-dom"
import item1 from "../../assets/home/item1.png"
import item2 from "../../assets/home/item2.png"
import item3 from "../../assets/home/item3.png"
import arrow from "../../assets/home/Path.png"

function ItemGroup() {
  return (
    <div className={styles.cardsContainer}>
        <div className={styles.cardWrapper}>
            <div className={styles.cardImg}>
                <img className={styles.item1} src={item1} alt="img" />
            </div>
            <div className={styles.cardInfo}>
                <h3 className={styles.cardTitle}>Headphones</h3>
                <Link to="/headphones">
                    <p>shop</p>
                    <img src={arrow} alt="arrow" />
                </Link>
            </div>
        </div>
        
        <div className={styles.cardWrapper}>
            <div className={styles.cardImg}>
                <img className={styles.item2} src={item2} alt="img" />
            </div>
            <div className={styles.cardInfo}>
                <h3 className={styles.cardTitle}>Speakers</h3>
                <Link to="/speakers">
                    <p>shop</p>
                    <img src={arrow} alt="arrow" />
                </Link>
            </div>
        </div>

        <div className={styles.cardWrapper}>
            <div className={styles.cardImg}>
                <img className={styles.item3} src={item3} alt="img" />
            </div>
            <div className={styles.cardInfo}>
                <h3 className={styles.cardTitle}>Earphones</h3>
                <Link to="/earphones">
                    <p>shop</p>
                    <img src={arrow} alt="arrow" />
                </Link>
            </div>
        </div>
    </div>
  )
}

export default ItemGroup