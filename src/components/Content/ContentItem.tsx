import styles from "./ContentItem.module.scss"

interface ContentItemProps {
    label: string;
    content: string;
    imageURL: string;
}

export const ContentItem = (props: ContentItemProps) => {
    return (
        <div className={styles.item}>
            <div>
                <img className={styles.contentImage} src={props.imageURL} alt="content item"/>
            </div>
            <div>
                <h3 className={styles.itemName}>{props.label}</h3>
                <p>
                    {props.content}
                </p>
            </div>  
        </div>
    )
}

