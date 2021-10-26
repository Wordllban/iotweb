import styles from "./Catalog.module.scss";
import { CatalogItem } from "./CatalogItem";
import { Filter } from "./../FilterItems/Filter";
interface dataProps {
    id: number;
    title: string;
}

export const Catalog = () => {
    const data: dataProps[] = [
        {"id": 1,"title": "item1"},
        {"id": 2,"title": "item2"},
        {"id": 3,"title": "item3"},
        {"id": 4,"title": "item4"},
        {"id": 5,"title": "item5"},
        {"id": 6,"title": "item6"},
        {"id": 7,"title": "item7"},
        {"id": 8,"title": "item8"},
        {"id": 9,"title": "item9"},
        {"id": 10,"title": "item10"},
    ]

    const itemList = data.map( (item) => <CatalogItem key={item.id} title={item.title}/>)
    
    return (
        <div>
            <h1 className={styles.catalogTitle}>Catalog</h1>
            <Filter />
            <div className={styles.wrapper}>
                {itemList}
            </div>
        </div>
    )
}