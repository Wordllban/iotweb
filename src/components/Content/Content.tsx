import { ContentItem } from "./ContentItem"
import { Button } from "../Button/Button"

import styles from "./Content.module.scss"

export const Content = () => {
    return (
        <section className={styles.section}>
            <span className={styles.heading}>Popular devices</span>

            <div className={styles.content}>
                <ContentItem label="Nano Pusska" content="PUSSKA<3" imageURL="https://images.unsplash.com/photo-1555543451-eeaff357e0f3?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1189&q=80"/>
                <ContentItem label="Mega Pusska" content="PUSSKA<3" imageURL="https://images.unsplash.com/photo-1555543451-eeaff357e0f3?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1189&q=80"/>
                <ContentItem label="Micro Pusska" content="PUSSKA<3" imageURL="https://images.unsplash.com/photo-1555543451-eeaff357e0f3?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1189&q=80"/>
            </div>

            <div className={styles.viewMore}>
                <button className={styles.viewMoreButton} name="viewMore">
                    View More
                </button>
            </div>
        </section>
    )
}
