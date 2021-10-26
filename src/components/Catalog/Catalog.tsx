import { ChangeEvent, useState } from "react";

import { Slider } from "../Slider/Slider";
import { CatalogItem } from "./CatalogItem";

import styles from "./Catalog.module.scss";

interface dataProps {
    id: number;
    title: string;
}

const data: dataProps[] = [
    {"id": 1, "title": "item1"},
    {"id": 2, "title": "item2"},
    {"id": 3, "title": "item3"},
    {"id": 4, "title": "item4"},
    {"id": 5, "title": "item5"},
    {"id": 6, "title": "item6"},
    {"id": 7, "title": "item7"},
    {"id": 8, "title": "item8"},
    {"id": 9, "title": "item9"},
    {"id": 10, "title": "item10"},
]

// render item list
export const itemList = data.map( (item) => <CatalogItem key={item.id} title={item.title}/>)

export const Catalog = () => {
    // search item
    const [query, setQuery] = useState('');
    const [result, setResult] = useState<dataProps[] | undefined>();

    const inputHandler = (event: ChangeEvent<HTMLInputElement>) => {
        const enteredName: string = event.target.value;
        setQuery(enteredName);
    } 

    const search = () => {
        const foundItems = data.filter( (item) => 
            item.title.toLowerCase().includes(query.toLocaleLowerCase())
        );
        setResult(foundItems)
    }

    return (
        <div className={styles.itemList}>
            <div className={styles.filter}>
                <div className={styles.filterTitle}>
                    <input className={styles.textInput} type="text" name="search item" placeholder="Search pusska" value={query} onChange={inputHandler}/>
                    <button className={styles.searchButton} onClick={search}>Search</button>
                </div>

                <div className={styles.filterPrice}>
                    <Slider step="100" min="0" max="9900"/>
                    <button className={styles.filterPriceButton}>Search</button>
                </div>
            </div>

            <div className={styles.wrapper}>
                {result && result.length > 0 ? (
                    result.map( item => <CatalogItem key={item.id} title={item.title}/>)
                ) : !result ? ( 
                    data.map( (item) => <CatalogItem key={item.id} title={item.title}/>)
                ) : (
                    <h2>No Items Found</h2>
                )}
            </div>
        </div>
    )
}

