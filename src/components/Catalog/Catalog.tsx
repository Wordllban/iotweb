import { ChangeEvent, useState } from "react";

import { CatalogItem } from "./CatalogItem";

import styles from "./Catalog.module.scss";

interface dataProps {
    id: number;
    title: string;
    price: number;
}

const data: dataProps[] = [
    {"id": 1, "title": "item1", "price": 1000},
    {"id": 2, "title": "item2", "price": 2000},
    {"id": 3, "title": "item3", "price": 3000},
    {"id": 4, "title": "item4", "price": 4000},
    {"id": 5, "title": "item5", "price": 5000},
    {"id": 6, "title": "item6", "price": 6000},
    {"id": 7, "title": "item7", "price": 7000},
    {"id": 8, "title": "item8", "price": 8000},
    {"id": 9, "title": "item9", "price": 9000},
    {"id": 10, "title": "item10", "price": 11000},
    {"id": 11, "title": "item10", "price": 12000},
    {"id": 12, "title": "item10", "price": 13000},
    {"id": 13, "title": "item10", "price": 14000},
    {"id": 14, "title": "item10", "price": 15000},
    {"id": 15, "title": "item10", "price": 16000},
    {"id": 16, "title": "item10", "price": 17000},
]

// render item list
export const itemList = data.map( (item) => <CatalogItem key={item.id} title={item.title} price={item.price}/>)

export const Catalog = () => {
    // search item
    const [query, setQuery] = useState('');
    const [result, setResult] = useState<dataProps[] | undefined>();
    
    // by title
    const inputHandler = (event: ChangeEvent<HTMLInputElement>) => {
        const enteredName: string = event.target.value;
        setQuery(enteredName);
    }

    const searchByTitle = () => {
        const foundItems = data.filter( (item) => 
            item.title.toLowerCase().includes(query.toLocaleLowerCase())
        );
        setResult(foundItems)
    }

    // by price
    const [inputValue, setInputValue] = useState({value: ' '})

    const priceChange = (event: ChangeEvent<HTMLInputElement>) => {
        const enteredPrice: string | number = event.target.value
        setInputValue({ value: event?.currentTarget?.value });
        setQuery(enteredPrice);
    }

    const searchByPrice = () => {
        const foundItems = data.filter( (item) => 
            item.price > parseInt(query)
        );        
        setResult(foundItems)
    }

    // show more
    const [showMore, setShowMore] = useState(true);
    const [count, setCount] = useState(8);

    const showMoreButton = () => {
        setCount(count + 8);
        const newShowMore = count < 8;                
        setShowMore(newShowMore)
    }

    return (
        <div className={styles.item_list}>
            <div className={styles.filter}>
                <div className={styles.filter__title}>
                    <input className={styles.input} type="text" name="search item" placeholder="Search device" onChange={inputHandler}/>
                    <button className={styles.search_title} onClick={searchByTitle}>Search</button>
                </div>

                <div className={styles.filter__price}>
                    <input style={{ backgroundColor: "#202020", width: "400px"}} className={styles.slider} type="range" step="100" min="100" max="15000" value={inputValue.value} onChange={priceChange}/>
                    <span className={styles.slider__price}>Search item from price: {inputValue.value} $</span>
                    <button className={styles.search_price} onClick={searchByPrice}>Search</button>
                </div>
            </div>
                
            <div className={styles.wrapper}>
                {result && result.length > 0 ? (
                    [...result.slice(0, count)].map( item => <CatalogItem key={item.id} title={item.title} price={item.price}/>)
                ) : !result ? ( 
                    [...data.slice(0, count)].map( item => <CatalogItem key={item.id} title={item.title} price={item.price}/>)
                ) : (
                    <h2>No Items Found</h2>
                )}
            </div>
                
            <div className={styles.button__container}>
                { showMore
                    &&
                <button className={styles.view_more_button} name="view more button" onClick={showMoreButton}>View More</button>
                }
            </div>
        </div>
    )
}
