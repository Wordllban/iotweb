import { withRouter } from "react-router-dom";
import { ChangeEvent, useEffect, useState } from "react";

import { CatalogItem } from "./CatalogItem";
import { Loader } from "./Loader";
import { getFilteredData } from "../../services/api";

import styles from "./Catalog.module.scss";

export interface dataProps {
    id: string | number;
    model: string;
    price: number;
}

const Catalog = () => {    
    // items
    const [items, setItems] = useState<dataProps[]>();
    // search item
    const [titleFilter, setTitleFilter] = useState('')
    const [priceFilter, setPriceFilter] = useState('')
    // loading effect
    const [loading, setLoading] = useState(true)
    
    
    useEffect(() => {
        setTimeout( async () => {
            setItems( await getFilteredData(titleFilter, priceFilter));
            setLoading(false);
        }, 300)
    }, [priceFilter, titleFilter])

    // search by title
    const inputHandler = (event: ChangeEvent<HTMLInputElement>) => {
        setLoading(true);
        const enteredName: string = event.target.value;
        setTitleFilter(enteredName);
    }

    // search by price
    const [inputValue, setInputValue] = useState({value: ' '})

    const priceChange = (event: ChangeEvent<HTMLInputElement>) => {
        setLoading(true)  
        const enteredPrice: string | number = event?.currentTarget?.value 
        setInputValue({ value: event?.currentTarget?.value });
        setPriceFilter(enteredPrice);       
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
                    </div>

                    <p className={styles.slider__price}>Search item from price: {inputValue.value} $</p>

                    <div className={styles.filter__price}>
                        <input style={{ backgroundColor: "#202020", width: "400px"}} className={styles.slider} type="range" step="100" min="100" max="15000" value={inputValue.value} onChange={priceChange}/>
                    </div>
                </div>

                <div className={styles.wrapper}>                      
                        { loading ? (
                                <Loader />
                            ) : (
                            items ? ( 
                                [...items.slice(0, count)].map( item => <CatalogItem key={item.id} id={item.id} title={item.model} price={item.price}/>)
                            ) : (
                                <h2>No Items Found</h2>
                                )
                            )
                            
                        }
                </div>
                    
                <div className={styles.button__container}>
                    { showMore ? (
                        items && items?.length > 4 ? (
                            <button className={styles.view_more_button} name="view more button" onClick={showMoreButton}>View More</button>
                        ) : (
                            <button style={{display: "none"}} className={styles.view_more_button} name="view more button" onClick={showMoreButton}>View More</button>
                        )
                    ) : (
                        <button style={{display: "none"}} className={styles.view_more_button} name="view more button" onClick={showMoreButton}>View More</button>
                    )
                        
                    }
                </div>
        </div>
    )
}

export default withRouter(Catalog)