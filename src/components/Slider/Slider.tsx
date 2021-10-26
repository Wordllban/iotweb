import { ChangeEvent, useState } from "react";
import styles from "./Slider.module.scss"

interface sliderProps {
    step: number | string;
    min: number | string;
    max: number | string;
}

export const Slider = (props: sliderProps) => {
    const [inputValue, setInputValue] = useState({value: ' '})

    const handleChange = (event: ChangeEvent<{ value: string }>) => {
        setInputValue({ value: event?.currentTarget?.value });
    }

    return (
        <>
            <input className={styles.slider} type="range" step={props.step} min={props.min} max={props.max} value={inputValue.value} onChange={handleChange}/>
            <p className={styles.sliderPrice}>Search item from price: {inputValue.value} $</p>
        </>
    )
}

