import { ContentItem } from "./ContentItem"
import { Button } from "../Button/Button"

import styles from "./Content.module.scss"

export const Content = () => {
    return (
        <section className={styles.section}>
            <span className={styles.heading}>Popular Devices</span>

            <div className={styles.content}>
                <ContentItem label="ESP-32" content="Arduino ESP-32 is new models. Now you have enough pins. Extremely HIGH network speed because of new procerssor and optimized newtwork stack." imageURL="https://images.unsplash.com/photo-1555543451-eeaff357e0f3?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1189&q=80"/>
                <ContentItem label="Mega" content="Arduino Mega is based on ATmega2560 microcontroller. 54 pins, 4 UART, 16 MHz crystal, USB connector, power connector, ICSP connector for in-circuit programming and reset button." imageURL="https://images.unsplash.com/photo-1555543451-eeaff357e0f3?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1189&q=80"/>
                <ContentItem label="Due" content="Arduino Due is based on the Atmel SAM3X8E ARM Cortex-M3 microprocessor. This is the first Arduino board based on a 32-bit ARM microcontroller.  " imageURL="https://images.unsplash.com/photo-1555543451-eeaff357e0f3?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1189&q=80"/>
            </div>

            <div className={styles.viewMore}>
                <button className={styles.viewMoreButton} name="viewMore">
                    View More
                </button>
            </div>
        </section>
    )
}
