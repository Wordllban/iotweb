import React from 'react'
import { useAppSelector } from '../../hooks/redux.store.hooks'
import { getCartProducts, getTotalPrice } from './cart.slice'
import { CartItem } from './CartItem';

import styles from "./Cart.module.scss";

export const Cart: React.FC = () => {
    const totalPrice = useAppSelector(getTotalPrice);
    const cartProducts = useAppSelector(getCartProducts);

    return (
        <div className={styles.cart}>
            <h1 className={styles.title}>Cart</h1>
            <div className={styles.items_container}>
                {cartProducts.map(product => <CartItem key={product.id} id={product.id} model={product.model} price={product.price} amount={product.amount}/>)}
            </div>
            <div className={styles.order}>
                <h5 className={styles.price}>Total price: {totalPrice} $</h5>
                <button className={styles.button}>Make order</button>
            </div>
        </div>
    );
}
