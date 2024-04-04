import { useEffect, useRef, useState } from "react";
import { useNavigate, useParams } from "react-router";
import { useDispatch, useSelector } from "react-redux";
import styles from "./index.module.css";
import { addToCart } from "../../redux/addItemSlice";
import { formatPrice } from "../../utils";
import { increment, decrement } from '../../redux/quantity'


import headphones1 from '../../assets/image/category/category-headphones1.svg'
import headphones2 from '../../assets/image/category/category-headphones2.svg'
import headphones3 from '../../assets/image/category/category-headphones3.svg'
import earphones from '../../assets/image/category/category-earphones.svg'
import speaker1 from '../../assets/image/category/category-speaker1.svg'
import speaker2 from '../../assets/image/category/category-speaker2.svg'

function Modal({ setModal }) {
  const navigate = useNavigate();
  let total = 0;
  const [products, setProducts] = useState([]);
  const dispatch = useDispatch();
  const quantity = useSelector(state => state.quantity.value);
  
  

  function getData() {
    let data = [];
    if (localStorage.getItem("cartArr")) {
      data = JSON.parse(localStorage.getItem("cartArr"));
    }
    return data;
  }

  function handleDelete() {
    localStorage.removeItem("cartArr");
    setProducts([])
    dispatch(addToCart(false));
    window.location.reload();
  }

  useEffect(() => {
    let data = getData();
    data.forEach((el) => {
      total = total + Number(el.price * el.number_of_product)
       
    });
    setProducts(data);
  }, []);

  return (
    <div className={styles.bg}>
      <div className={styles.modal}>
        <div className={styles.header}>
          <h1>CART ({products.length})</h1>
          <button className={styles.removeBtn} onClick={handleDelete}>Remove all</button>
          <button
            onClick={() => {
              setModal(false);
            }}
            className={styles.exit}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              width="22"
              height="22"
              fill="currentColor"
            >
              <path d="M11.9997 10.5865L16.9495 5.63672L18.3637 7.05093L13.4139 12.0007L18.3637 16.9504L16.9495 18.3646L11.9997 13.4149L7.04996 18.3646L5.63574 16.9504L10.5855 12.0007L5.63574 7.05093L7.04996 5.63672L11.9997 10.5865Z"></path>
            </svg>
          </button>
        </div>
        {products.map((product, index) => {
          total += Number(product.quantity * product.price);
          return (
            <div key={index} className={styles.card}>
              <div className={styles.images}>
                <img width={60} height={60} src={ product.id == 1 && earphones ||
                          product.id == 2 && headphones3 ||
                          product.id == 3 && headphones2 ||
                          product.id == 4 && headphones1 ||
                          product.id == 5 && speaker2 || 
                          product.id == 6 && speaker1}alt={product.name} />
                           
              </div>

              <div className={styles.name}>
                <h3>{product.name}</h3>
                <h6>${product.price / 100}</h6>
              </div>
              <div className={styles.count}>
                <button className={styles.minus} onClick={() => product.quantity - 1}>
                  -
                </button>
                <div  className={styles.counter}>
                  {product.quantity}
                </div>
                <button
                  className={styles.plus}
                  onClick={() => product.quantity + 1}
                >
                  +
                </button>
              </div>
            </div>
          );
        })}
        <div className={styles.total}>
          <h2>TOTAL</h2>
          <p>${total / 100}</p>
        </div>
        <button onClick={() => navigate("/checkout")} className={styles.button}>
          CHECKOUT
        </button>
      </div>
    </div>
  );
}

export default Modal;
