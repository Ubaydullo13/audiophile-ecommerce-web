import styles from "./index.module.css"
import ItemGroup from "../../components/ItemGroup"
import Bringing from "../../components/Bringing"
import ProductCard from "../../components/ProductCard"
import ProductCard2 from "../../components/ProductCard2"
import Title from "../../components/Title"
import { useEffect, useState } from "react"


function Speakers() {
    const [data, setData] = useState([])

    useEffect(() => {
        fetch("http://localhost:3000/data?category=speakers")
        .then(res => res.json())
        .then(data => {
          setData(data);
          console.log(data);
        })
        .catch(err => {
          console.log(err);
        })
      }, [])

    console.log("speakers", data);

  return (
    <div className={styles.speakers}>
        <Title title={"speakers"}/>
        
            
            <main className={styles.main}>
            {
               data.length && data.map((item, i) => {
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

export default Speakers