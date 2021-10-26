import { Button } from "../Button/Button";
import styles from "./CatalogItem.module.scss";

interface CatalogItemProps {
    key: number;
    title: string;
    /* content: string;
    price: number; */
}

export const CatalogItem = (props: CatalogItemProps) => {
    return (
        <div className={styles.catalogItem}>
            <img className={styles.itemImage} src="https://images.unsplash.com/photo-1555543451-eeaff357e0f3?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1189&q=80" alt="item"/>
            <p className={styles.itemTitle}>{props.title}</p>

            <p>props.content</p>

            <p>props.price</p>
            <p><Button label="More"/></p>
        </div>
    )
}

