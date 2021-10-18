import styles from "./ContentItem.module.scss"

interface ContentItemProps {
    label: string;
    content: string;
    imageURL: string;
}

export const ContentItem = (props: ContentItemProps) => {
    return (
        <div className={styles.item}>
            <div className={styles.front}>
                <img className={styles.image} src={props.imageURL} alt="content item image"/>
            </div>
            <div>
                <h3 className={styles.itemName}>{props.label}</h3>
                <p>
                    {props.content}
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                    Maiores ad doloribus distinctio expedita cum dolorem minima quas quod 
                </p>
            </div>  
        </div>
    )
}

