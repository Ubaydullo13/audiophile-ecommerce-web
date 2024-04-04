import { useEffect, useRef, useState } from 'react'
import styles from "./index.module.css"
import ItemGroup from "../../components/ItemGroup"
import Bringing from "../../components/Bringing"
import { ToastContainer, toast } from 'react-toastify'
import "react-toastify/dist/ReactToastify.css";
import { useNavigate, useParams } from 'react-router-dom'
import { useSelector, useDispatch } from 'react-redux'
import { increment, decrement } from '../../redux/quantity'
// import { addToCart } from '../../redux/cartSlice'
import { formatPrice } from '../../utils'
import { addToCart } from '../../redux/addItemSlice'

import earphones from "../../assets/image/category/category-earphones.svg"; //id=1
import headphones3 from "../../assets/image/category/category-headphones3.svg"; //id=2
import headphones2 from "../../assets/image/category/category-headphones2.svg"; //id=3
import headphones1 from "../../assets/image/category/category-headphones1.svg"; //id=4
import speaker2 from "../../assets/image/category/category-speaker2.svg"; //id=5
import speaker1 from "../../assets/image/category/category-speaker1.svg"; //id=6


function ProductDetails() {
    const [data, setData] = useState([]);
    const navigate = useNavigate();
    const params = useParams();
    const quantityRef = useRef(0);
    const quantity = useSelector(state => state.quantity.value);
    const dispatch = useDispatch();
    const dollarAmount = formatPrice(data.price)
    const [request, setRequest] = useState({})
    const [cartArr, setCartArr] = useState(localStorage.getItem('cartArr') ? JSON.parse(localStorage.getItem('cartArr')) : [] );

    // const [imageSrc, setImageSrc] = useState(null);

    // useEffect(() => {
    //   async function loadImage() {
    //     let imgSrc;
  
    //     if (data && data && data.id === 2) {
    //       imgSrc = await import("../../assets/image/category/category-headphones3.svg");
    //     } else if (data && data && data.id === 1) {
    //       imgSrc = await import("../../assets/image/category/category-earphones.svg");
    //     } else if (data && data && data.id === 6) {
    //       imgSrc = await import("../../assets/image/category/category-speaker1.svg");
    //     } else {
    //       imgSrc = await import("../../assets/image/category/category-headphones1.svg");
    //     }
  
    //     setImageSrc(imgSrc.default);
    //   }
  
    //   loadImage();
    // }, [data.id]);
   
    
   useEffect(() => {
    fetch(`http://localhost:3000/data?id=${params.id}`)
    .then(res => res.json())
    .then(data => {
        if (data.length > 0) {
            setData(data[0]);
        }

     })
     .catch(err => {
        console.log(err);
      })
      window.scrollTo({
        top: 0,
        behavior: "smooth",
      });
      }, [navigate])

   
      useEffect(() => {
        
        fetch(`http://localhost:3000/data?id=${params.id}`)
        .then(res => res.json())
        .then(info => {
          info[0].quantity = quantity;
          setRequest(info[0]);       
        })
        .catch(err => {
          console.log(err);
        })
        }, [quantity]);

        function handleClick() {
            let copied = JSON.parse(JSON.stringify(cartArr));
            let exsist = copied.some(el => el.id === request.id);
            if (exsist) {
                copied = copied.map((el) => {
                    if (el.id === request.id) {
                        el.quantity += quantity;
                    }
                    return el;
                })
            }else{
                copied.push(request)
            }
            localStorage.setItem('cartArr', JSON.stringify(copied));
            window.scrollTo({
                top: 0,
                behavior: "smooth",
            })
            dispatch(addToCart(true))
            toast.success("Товар добавлен в корзину", {
                position: "top-center",
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
            }
            )
        }
     
      

      

  return (
    <div className={styles.contentWrapper}>
        <button onClick={() => navigate(-1)} className={styles.backBtn}>
            Go Back
        </button>
        <div className={styles.products}>
            <div className={styles.images}>
        
          <img className={styles.imgTop} src={
            (data.id == 1 && earphones) ||
            (data.id == 2 && headphones3) ||
            (data.id == 3 && headphones2) ||
            (data.id == 4 && headphones1) ||
            (data.id == 5 && speaker2) ||
            (data.id == 6 && speaker1)
          }
           alt="Product Image" />
        
            </div>
            <div className={styles.info}>
                <h5>NEW PRODUCT</h5>
                <h2>{data.name}</h2>
                <p>{data.description}</p>
                <h3>{dollarAmount}</h3>
                <div className={styles.counterWrapper}>
                    <div className={styles.count}>
                        <button onClick={() => dispatch(decrement())} className={styles.minus}>
                            -
                        </button>
                        <div ref={quantityRef} className={styles.counter}>{quantity}</div>
                        <button onClick={() => dispatch(increment())} className={styles.plus}>
                            +
                        </button>
                    </div>
                    <div className={styles.button}>
                        <button onClick={handleClick}>add to cart</button>
                    </div>
                </div>
            </div>
        </div>

        <div className={styles.description}>
            <div className={styles.features}>
                <h3>FEATURES</h3>
                <p>{data.features}</p>
            </div>

            <div className={styles.box}>
                <h3>IN THE BOX</h3>
                {/* {
                    data && data.includes && data.includes.map((el, i) => {
                        return (
                            <p key={i}>
                                {el.quantity}X <span>{el.item}</span>
                            </p>
                        )
                    })
                } */}
            </div>
        </div>

        {/* <div className={styles.groupImages}>
            <div className={styles.leftImg}>
              <div className={styles.top}>
                <img src={gallery.first} alt="" />
              </div>
              <div className={styles.bottom}>
                <img src={gallery.second} alt="" />
              </div>
            </div>
            <div className={styles.rightImg}>
              <img src={gallery.third} alt="" />
            </div>
          </div> */}
          
           <div className={styles.cardProduct}>
            <h3>YOU MAY ALSO LIKE</h3>
            <div className={styles.cardWrapper}>
                {
                    data && data.others && data.others.map((el, i) => {
                        return (
                            <div key={i} className={styles.card}>
                                <div className={styles.cardImg}>
                                    <img src={
                          i == 0 ?
                          ((data.id == 2 || data.id == 3) ? 
                          headphones1 :
                          (data.id == 1 || data.id == 4) ?
                          headphones2 :
                          data.id == 6 ? 
                          speaker2 :
                          speaker1) :
                          i == 1 ? 
                          ((data.id == 1 || data.id == 3 || data.id == 4) ? 
                            headphones3 :
                            headphones2
                          ):
                          (data.id == 5 || data.id == 6 ?
                            headphones3 :
                            speaker1)

                        } alt="" />
                                </div>
                                <h4>{el.name}</h4>
                                <button onClick={() => navigate(`/products/${el.id}`)} className={styles.btn}>
                                    see product
                                </button>
                            </div>
                        )
                    })
                }
            </div>
            </div>  
         <ItemGroup/>
         <Bringing/>
         <ToastContainer/>
    </div>
  )
}

export default ProductDetails