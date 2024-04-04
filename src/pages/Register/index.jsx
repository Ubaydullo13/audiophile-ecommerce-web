import { Link } from "react-router-dom"
import { useState } from "react"
import styles from './index.module.css'
import { createUserWithEmailAndPassword } from "firebase/auth"
import { auth } from "../../firebase"

function Register() {
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [confirmPassword, setConfirmPassword] = useState("")
    const [error, setError] = useState("")
    const [isLoading, setIsLoading] = useState(false)


    function handleSubmit(e){
        e.preventDefault()
        setIsLoading(true)
        if(confirmPassword !== password){
            setError("Passwords do not match")
            setIsLoading(false)
            return
        }
        createUserWithEmailAndPassword(auth, email, password)
        .then((user) => {
             console.log(user)
             setIsLoading(false)
             setError("")
             setEmail("")
             setPassword("")
             setConfirmPassword("")
 
        })
        .catch((err) => {
             console.log(err)
             setError(err.message)
             setIsLoading(false)
         })
    }

  return (
    <div className={styles.container}>
    <form onSubmit={handleSubmit} className={styles.form}>
      <h1 className={styles.title}>Registration</h1>
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
      </div>
      <div className={styles.inputControl}>
        <label htmlFor="password2">Confirm password*</label>
        <input
         value={confirmPassword}
          type="password"
          name="password2"
          placeholder="Confirm your password"
          onChange={(e) => setConfirmPassword(e.target.value)}
        />
        {error ?  <div className ={styles.error}>{error}</div> : ""}
        
      </div>

      <button className={styles.btn}>{isLoading ? "...Loading" : "Sign Up"}</button>
      <p>Do you have account? <Link to="/login">Login</Link></p>
      
    </form>
    
  </div>
  )
}

export default Register