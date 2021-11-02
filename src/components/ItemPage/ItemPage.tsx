import { itemList } from "../Catalog/Catalog"
import styles from "./ItemPage.module.scss"

export const ItemPage = (props: { item: {} } ) => {
    return (
        <div>
            <div>
                <img src="https://images.unsplash.com/photo-1555543451-eeaff357e0f3?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1189&q=80"  /* {item.image}  */
                    alt="item"/>
            </div>
            
        </div>
    )
}

