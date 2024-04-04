import { useState, useEffect, useRef } from "react"
import { Link } from "react-router-dom"
import { useNavigate } from "react-router-dom"
import styles from "./index.module.css"

import headphones1 from '../../assets/image/category/category-headphones1.svg'
import headphones2 from '../../assets/image/category/category-headphones2.svg'
import headphones3 from '../../assets/image/category/category-headphones3.svg'
import earphones from '../../assets/image/category/category-earphones.svg'
import speaker1 from '../../assets/image/category/category-speaker1.svg'
import speaker2 from '../../assets/image/category/category-speaker2.svg'

function Checkout() {
    const navigate = useNavigate()
    const [showModal, setShowModal] = useState(false);
    const [products, setProducts] = useState([]);

    const name = useRef();
  const email = useRef();
  const phoneNumber = useRef();
  const adress = useRef();
  const zipCode = useRef();
  const city = useRef();
  const country = useRef();
  const payMoney = useRef();
  const payCash = useRef();

  function validate(name, email, phoneNumber, address, zipCode, city, country) {
    if (!name.current.value.trim()) {
      name.current.focus();
      alert("Please enter a name")
      return false;
    }
    if (!email.current.value.trim()) {
      email.current.focus();
      return false;
    }
    if (!phoneNumber.current.value.trim()) {
      phoneNumber.current.focus();
      return false;
    }
    if (!address.current.value.trim()) {
      address.current.focus();
      return false;
    }
    if (!zipCode.current.value.trim()) {
      zipCode.current.focus();
      return false;
    }
    if (!city.current.value.trim()) {
      city.current.focus();
      return false;
    }
    if (!country.current.value.trim()) {
      country.current.focus();
      return false;
    }

    return true;
  }

  function handleSubmit(e) {
    e.preventDefault();
    let isValid = validate()
    if (isValid) {
      name.current.value="";
      email.current.value="";
      phoneNumber.current.value="";
      adress.current.value="";
      zipCode.current.value="";
      city.current.value="";
      country.current.value="";
      payMoney.current.value="";
      payCash.current.value="";


      setShowModal(true);
    }
  }

    let total = 0;
    function getData(){
        let data = [];
        if(localStorage.getItem('cartArr')){
            data = JSON.parse(localStorage.getItem('cartArr'));
        }
        return data;
    }

    useEffect(() => {
        let data = getData();
        data.forEach((product) => {
            total = total + Number(product.price * product.number_of_product);
        })
        setProducts(data);
    }, [])

    // function openModal(e) {
    //     e.stopPropagation();
    //     setShowModal(!showModal);
    // }

    useEffect(() => {
        if(showModal) {
            document.addEventListener('click', handleCloseModal);
        }else {
            document.removeEventListener('click', handleCloseModal);
        }
    }, [showModal])

    function handleCloseModal(e) {
        if(!e.target.classList.contains(styles.modal)) {
            setShowModal(false);
        }
    }

  return (
    <>
      <div
        style={showModal ? { backgroundColor: "black", opacity: "0.2" } : {}}
        className={styles.checkout__wrapper}
      >
        <button onClick={() => navigate(-1)} className={styles.backBtn}>
          Go Back
        </button>
        <div className={styles.form__wrapper}>
          <form className={styles.form}>
            <h2>CHECKOUT</h2>
            <div className={styles.build}>
              <p>Billing Details</p>
              <div className={styles.DETAILS}>
                <label>
                  <p>Name</p>
                  <input ref={name} type="text" placeholder="Alexei Ward" />
                </label>
                <label>
                  <p>Email</p>
                  <input ref={email} type="email" placeholder="alexei@mail.com" />
                </label>
              </div>
              <label>
                <p>Phone Number</p>
                <input ref={phoneNumber} type="tel" placeholder="+1 202-555-0136" />
              </label>
            </div>
            <div className={styles.shipping}>
              <p>Shipping Info</p>
              <label>
                <p>Address</p>
                <input
                  type="text"
                  placeholder="1137 Williams Avenue"
                  ref={adress}
                />
              </label>
              <div className={styles.code__city}>
                <label>
                  <p>ZIP Code</p>
                  <input ref={zipCode} type="number" name="" id="" placeholder="10001" />
                </label>
                <label>
                  <p>City</p>
                  <input ref={city} type="text" name="" id="" placeholder="New York" />
                </label>
              </div>
              <label className={styles.country}>
                <p>Country</p>
                <input ref={country} type="text" name="" id="" placeholder="United States" />
              </label>
            </div>
            <div className={styles.payments}>
              <p>Payment Details</p>
              <div className={styles.method}>
                <p>Payment Method</p>
                <div className={styles.select}>
                  <div className={styles.money}>
                    <input type="radio" name="cost" id="" />
                    <h3>e-money</h3>
                  </div>
                  <div className={styles.card}>
                    <input type="radio" name="cost" id="" />
                    <h3>Cash on Delivery</h3>
                  </div>
                </div>
              </div>
              <div className={styles.payment__order}>
                <label>
                  <p>e-money Number</p>
                  <input ref={payCash} type="text" name="" id="" placeholder="238521993" />
                </label>
                <label>
                  <p>e-money PIN-code</p>
                  <input ref={payMoney} type="text" name="" id="" placeholder="6891" />
                </label>
              </div>
            </div>
          </form>

          <div className={styles.details}>
            <h2>SUMMARY</h2>
            <div className={styles.cards__summary}>
              {products.map((product, index) => {
                total += Number(product.count * product.price);

                return (
                  <div key={index} className={styles.card}>
                    <div className={styles.img__cost}>
                      <div className={styles.card__img}>
                      <img width={60} height={60} src={ product.id == 1 && earphones ||
                          product.id == 2 && headphones3 ||
                          product.id == 3 && headphones2 ||
                          product.id == 4 && headphones1 ||
                          product.id == 5 && speaker2 || 
                          product.id == 6 && speaker1}alt={product.name} />
                      </div>
                      <div className={styles.info}>
                        <h3>{product.title}</h3>
                        <p>${product.price / 100}</p>
                      </div>
                    </div>
                    <div className={styles.num}>
                      <span>{`x${product.quantity}`}</span>
                    </div>
                  </div>
                );
              })}
            </div>
            <div className={styles.info1}>
              <div className={styles.price}>
                <h4>TOTAL</h4>
                <span>{total}</span>
              </div>
              <div className={styles.price}>
                <h4>SHIPPING</h4>
                <span>$ 50</span>
              </div>
              <div className={styles.price}>
                <h4>TOTAL ADDITIONAL (ADDED)</h4>
                <span>$ 1,079</span>
              </div>
              <div className={styles.garond__total}>
                <h4>TOTAL SUM</h4>
                <span>$ {(total += 50)}</span>
              </div>
            </div>
            <button onClick={handleSubmit}>CONTINUE & PAY</button>
          </div>
        </div>
      </div>
      {showModal && (
        <div className={styles.modal}>
          <h2>THANK YOU FOR YOUR ORDER</h2>
          <p>Please confirm your email shortly.</p>
          <div className={styles.modal__info}>
            <div className={styles.card__info}>
              {products.map((product, index) => (
                <div key={index} className={styles.card__modal}>
                  <div className={styles.card__img}>
                  <img width={60} height={60} src={ product.id == 1 && earphones ||
                          product.id == 2 && headphones3 ||
                          product.id == 3 && headphones2 ||
                          product.id == 4 && headphones1 ||
                          product.id == 5 && speaker2 || 
                          product.id == 6 && speaker1}alt={product.name} />
                  </div>
                  <div className={styles.modal__text__card}>
                    <h5>{product.name}</h5>
                    <h4>${product.price / 100}</h4>
                  </div>
                  <span>X{product.quantity}</span>
                </div>
              ))}
              <p></p>
            </div>
            <div className={styles.black__info}>
              <p>GRAND TOTAL</p>
              <h3>{total}</h3>
            </div>
          </div>
          <Link style={{ textDecoration: "none" }} to="/">
            <button>BACK TO HOME</button>
          </Link>
        </div>
      )}
    </>
  )
}


export default Checkout