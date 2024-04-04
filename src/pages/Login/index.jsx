import { Link } from "react-router-dom";
import { useState } from "react";
import styles from "./index.module.css";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../../firebase";
import { useNavigate } from "react-router-dom";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();

  function handleSubmit(e) {
    e.preventDefault();
    setIsLoading(true);
    signInWithEmailAndPassword(auth, email, password)
      .then((user) => {
        localStorage.setItem("token", user.user.accessToken);
        navigate("/");
        setIsLoading(false);
        setError("");
        setEmail("");
        setPassword("");
        
      })
      .catch((err) => {
        console.log(err);
        setError("SORRY, WE COULDN'T FIND YOUR ACCOUNT");
        setIsLoading(false);
      });
  }

  return (
    <div className={styles.container}>
      <form onSubmit={handleSubmit} className={styles.form}>
        <h1 className={styles.title}>Login</h1>
        <div className={styles.inputControl}>
          <label htmlFor="email">Email*</label>
          <input
            value={email}
            type="email"
            name="email"
            placeholder="Enter your email"
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <div className={styles.inputControl}>
          <label htmlFor="password">Password*</label>
          <input
            value={password}
            type="password"
            name="password"
            placeholder="Password must be at least 6 characters"
            onChange={(e) => setPassword(e.target.value)}
          />
          {error ? <div className={styles.error}>{error}</div> : ""}
        </div>
        <button className={styles.btn} disabled={isLoading}>
          {isLoading ? "...Loading" : "Sign In"}
        </button>
        <p className={styles.link}>
          Don`t have an account? <Link to="/register">Register</Link>
        </p>
      </form>
    </div>
  );
}

export default Login;
