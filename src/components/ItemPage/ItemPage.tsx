import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

// CRUD API
import { getById } from "../../services/api";
import { Loader } from "../Catalog/Loader";

// styles
import styles from "./ItemPage.module.scss"


export const ItemPage = () => {
    const { id } = useParams<{id: string }>();    
    const [item, setItem] = useState<any>();
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        setTimeout( async () => {
            setLoading(false)
            setItem(await getById(id));
        }, 300)
    }, [id])

    return (
        <div >
            { loading ? (
                <Loader />
            ) : (
                <div className={styles.item__page}>
                <div className={styles.image__container}>
                    <img className={styles.image} src="https://images.unsplash.com/photo-1555543451-eeaff357e0f3?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1189&q=80"  /* {item.image}  */
                        alt="device"/>
                </div>
                <div className={styles.description}>
                    <h1 className={styles.title}>{item?.model}</h1>
                    <p className={styles.about}>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Culpa officia exercitationem ad ipsum dolorum ut corporis est eius soluta harum, magni omnis voluptatibus esse ducimus quasi sed temporibus et aperiam? Doloribus cumque nesciunt rem vero?</p>
                    <p className={styles.price}>${item?.price}</p>
                </div>
                </div>
            )
            }
        </div>
    )
}
