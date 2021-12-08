import styles from "./CatalogItem.module.scss";

import { AddToCartButton } from "./AddToCartButton";
import { ItemInfoButton } from "./ItemInfoButton";

interface CatalogItemProps {
    id: number | string;
    title: string;
    price: number;
}

export const CatalogItem = (props: CatalogItemProps) => {
    return (
        <div className={styles.item}>
            <img className={styles.image} src="https://images.unsplash.com/photo-1555543451-eeaff357e0f3?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1189&q=80" alt="item"/>
            <p className={styles.title}>{props.title}</p>

            <p>props.content</p>

            <p className={styles.price}>{props.price}</p>
            <p className={styles.view_more}>
                <AddToCartButton id={props.id} title={props.title} price={props.price}/>
                <ItemInfoButton itemId={props.id}/>
            </p>
        </div>
    )
}
