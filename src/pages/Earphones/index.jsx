import styles from "./index.module.css"
import ItemGroup from "../../components/ItemGroup"
import Bringing from "../../components/Bringing"
import ProductCard from "../../components/ProductCard"
import ProductCard2 from "../../components/ProductCard2"
import Title from "../../components/Title"
import Loader from "../../components/Loader"
import { useEffect, useState } from "react"


function Earphones() {
    const [data, setData] = useState([])
    const [isLoading, setIsLoading] = useState(false)

    useEffect(() => {
        fetch("http://localhost:3000/data?category=earphones")
        .then(res => res.json())
        .then(data => {
          setData(data);
          console.log(data);
        })
        .catch(err => {
          console.log(err);
        })
      }, [])

  return (
    <div className={styles.earphones}>
        <Title title={"earphones"}/>
        
            
            <main className={styles.main}>
            {
              data.length &&  data.map((item, i) => {
                    return (
                        i % 2 == 1 ? 
                        <ProductCard key={item.id} data={item}/> : <ProductCard2 key={item.id} data={item}/>
                    )
                })
            }

            <ItemGroup/>
            <Bringing/>
        </main>
        

       
    </div>
  )
}

export default Earphones