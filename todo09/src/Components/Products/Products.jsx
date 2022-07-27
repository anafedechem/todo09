import styles from "./Products.module.css"
import Cards from "../Cards/Cards"

function Products(){
    return(
        <div className={styles.ProductsSession}>
            <Cards/>
        </div>
    )
}

export default Products