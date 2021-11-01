import { ContentItem } from "./ContentItem"
import styles from "./Content.module.scss"
import { useState } from "react"

export const Content = () => {

    const [showMore, setShowMore] = useState(true);
    const [count, setCount] = useState(3);

    const imageURL = "https://images.unsplash.com/photo-1555543451-eeaff357e0f3?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1189&q=80"

    const MOST_POPULAR_DEVICES = [
        {"label": "ESP-32", "content": "Arduino ESP-32 is new models. Now you have enough pins. Extremely HIGH network speed because of new procerssor and optimized newtwork stack.", "image": imageURL},
        {"label": "Mega", "content": "Arduino Mega is based on ATmega2560 microcontroller. 54 pins, 4 UART, 16 MHz crystal, USB connector, ICSP connector for in-circuit programming and reset button.", "image": imageURL},
        {"label": "Due", "content": "Arduino Due is based on the Atmel SAM3X8E ARM Cortex-M3 microprocessor. This is the first Arduino board based on a 32-bit ARM microcontroller.  ", "image": imageURL},
        {"label": "Due 2", "content": "Arduino Due is based on the Atmel SAM3X8E ARM Cortex-M3 microprocessor. This is the first Arduino board based on a 32-bit ARM microcontroller.", "image": imageURL},
        {"label": "Due 3", "content": "Arduino Due is based on the Atmel SAM3X8E ARM Cortex-M3 microprocessor. This is the first Arduino board based on a 32-bit ARM microcontroller.", "image": imageURL},
        {"label": "Due 4", "content": "Arduino Due is based on the Atmel SAM3X8E ARM Cortex-M3 microprocessor. This is the first Arduino board based on a 32-bit ARM microcontroller.", "image": imageURL},
    ]
    
    const showMoreButton = () => {
        setCount(count + 3);
        const newShowMore = count < 3;        
        setShowMore(newShowMore)
    }

    return (
        <section className={styles.content}>
            <span className={styles.heading}>Popular Devices</span>

            <div className={styles.items}> 
                { [...MOST_POPULAR_DEVICES.slice(0, count)].map( (item, i) => <ContentItem key={i} label={item.label} content={item.content} imageURL={item.image} />) }
                
            </div>

            <div className={styles.view_more}>
                { showMore
                    &&
                <button className={styles.view_more_button} name="view more button" onClick={showMoreButton}>View More</button>
                }
            </div>
        </section>
    )
}
