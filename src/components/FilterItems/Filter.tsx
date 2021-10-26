import { ChangeEvent, useState } from "react";
import { Slider } from "../Slider/Slider";
import styles from "./Filter.module.scss";

export const Filter = () => {
    return (
        <div>
            <div className={styles.filter}>
                <input className={styles.textInput} type="text" name="search item" placeholder="Search pusska"/>
                <button className={styles.searchButton}>Search</button>
            </div>
            <p>Search items from: </p>
            <Slider step="100" min="0" max="99900"/>
        </div>
    )
}

