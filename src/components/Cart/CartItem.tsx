import { useAppDispatch } from '../../hooks/redux.store.hooks';
import { removeFromCart } from './cart.slice';

import styles from "./CartItem.module.scss";

interface CartItemProps {
    id: string | number;
    model: string;
    price: number
    amount: any;
}

export function CartItem(props: CartItemProps) {
    const dispatch = useAppDispatch();
    const handleRemoveFromCart = (productId: string | number) => dispatch(removeFromCart(productId)) 

    return (
        <div className={styles.item}>
            <div className={styles.description}>
                <img className={styles.image} src="https://images.unsplash.com/photo-1555543451-eeaff357e0f3?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1189&q=80" alt="product" />
                <p className={styles.name}>{props.model}</p>
            </div>
            <div className={styles.remove}>
                <div>
                    <p>Price: <span className={styles.bold}>{props.price * props.amount}</span></p>
                    <p className={styles.amount}>Amount: <span className={styles.bold}>{props.amount}</span></p>
                </div>
                <button className={styles.button} onClick={() => handleRemoveFromCart(props.id)}>Remove</button>
            </div>
        </div>
    )
}
