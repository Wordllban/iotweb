import React from 'react';
import { useAppDispatch } from '../../hooks/redux.store.hooks';
import { addToCart } from '../Cart/cart.slice';
import { dataProps } from './Catalog';

interface addToCartProps {
    id: number | string;
    title: string;
    price: number;
}

export const AddToCartButton = (props: addToCartProps) => {
    const dispatch = useAppDispatch();
    const itemToAdd = {
        id: props.id,
        model: props.title,
        price: props.price
    }
    
    return <button onClick={() => dispatch(addToCart(itemToAdd))}>Add to Cart</button>
}
