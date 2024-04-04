import styles from "./index.module.css";
import stein from "../../assets/home/specar.png";
import earphones from "../../assets/home/xy1second.png";
import ItemGroup from "../../components/ItemGroup";
import Bringing from "../../components/Bringing";
import { useNavigate } from "react-router-dom";

function Home() {
  const navigate = useNavigate();

  function handleClick(url) {
    fetch(url)
      .then(res => res.json())
      .then(data => {
        navigate(`/products/${data[0].id}`);
      })
      .catch(err => {
        console.log(err);
      })
      window.scrollTo({
        top: 0,
        behavior: "smooth"
      });
  }
  return (
    <>
      <div className={styles.main}>
        <div className={styles.container}>
          <div className={styles.title}>
            <h4>New Product</h4>
            <h2>XX99 Mark II Headphones</h2>
            <p>
              Experience natural, lifelike audio and exceptional build quality
              made for the passionate music enthusiast.
            </p>
            
              <button onClick={() => handleClick(`${import.meta.env.VITE_API}/data?slug=xx99-mark-two-headphones`)}>See Product</button>
            
          </div>
        </div>
      </div>
      <ItemGroup></ItemGroup>

      <div className={styles.wrapperContainer}>
        <div className={styles.speaker}>
          <div className={styles.speakerImg}>
            <img src={stein} alt="" />
          </div>
          <div className={styles.speakerTitle}>
            <h3>ZX9 SPEAKER</h3>
            <p>
              Upgrade to premium speakers that are phenomenally built to deliver
              truly remarkable sound.
            </p>
            
              <button onClick={() => handleClick(`${import.meta.env.VITE_API}/data?slug=zx9-speaker`)}>See Product</button>
            
          </div>
        </div>

        <div className={styles.speak}>
          <div className={styles.speakTitle}>
            <h4>ZX7 SPEAKER</h4>
            
              <button onClick={() => handleClick(`${import.meta.env.VITE_API}/data?slug=zx7-speaker`)}>See Product</button>
            
          </div>
        </div>

        <div className={styles.earphones}>
          <div className={styles.earphonesImg}>
            <img src={earphones} alt="" />
          </div>
          <div className={styles.earphonesTitle}>
            <h4>YX1 EARPHONES</h4>
            
              <button onClick={() => handleClick(`${import.meta.env.VITE_API}/data?slug=yx1-earphones`)}>See Product</button>
          
          </div>
        </div>
        <Bringing></Bringing>
      </div>
    </>
  );
}

export default Home;
