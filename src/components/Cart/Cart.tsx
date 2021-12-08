import React, { useState } from 'react'
import { useAppSelector } from '../../hooks/redux.store.hooks'
import { getCartProducts, getTotalPrice } from './cart.slice'
import { CartItem } from './CartItem';
import { OrderForm } from './OrderForm';

import styles from "./Cart.module.scss";

export const Cart: React.FC = () => {
    const totalPrice = useAppSelector(getTotalPrice);
    const cartProducts = useAppSelector(getCartProducts);
    const [order, setOrder] = useState(false)

    return (
        <>
            {order ? (
                <OrderForm/>
            ) : (
                <div className={styles.cart}>
                    <h1 className={styles.title}>Cart</h1>
                    {cartProducts.length === 0 ? (
                        <h3>Add something to cart!</h3>
                    ) : (
                        <>
                            <div className={styles.items_container}>
                                {cartProducts.map(product => <CartItem key={product.id} id={product.id} model={product.model} price={product.price} amount={product.amount}/>)}
                            </div>
                            <div className={styles.order}>
                                <h5 className={styles.price}>Total price: {totalPrice} $</h5>
                                <button className={styles.button} onClick={() => setOrder(!order)}>Make order</button>
                            </div>
                        </>
                    )}
                </div>
            )}
        </>
    );
}
