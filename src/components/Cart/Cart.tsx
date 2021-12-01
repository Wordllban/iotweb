import React from 'react'
import { useAppDispatch, useAppSelector } from '../../hooks/redux.store.hooks'
import { getCartProducts, getTotalPrice, removeFromCart } from './cart.slice'
import { CartItem } from './CartItem';

interface CartProps {

}

export const Cart: React.FC<CartProps> = ({}) => {
    const totalPrice = useAppSelector(getTotalPrice);
    const cartProducts = useAppSelector(getCartProducts);

    console.log('cart products: ', cartProducts);
    

    return (
        <div>
            <h2>Cart</h2>
            <h5>{totalPrice} $</h5>
            {cartProducts.map(product => <CartItem key={product.id} id={product.id} model={product.model} amount={product.amount}/>)}
        </div>
    );
}
