import { useAppDispatch } from '../../hooks/redux.store.hooks';
import { removeFromCart } from './cart.slice';

interface CartItemProps {
    id: string | number;
    model: string;
    amount: any;
}

export function CartItem(props: CartItemProps) {
    const dispatch = useAppDispatch();
    const handleRemoveFromCart = (productId: string | number) => dispatch(removeFromCart(productId)) 

    return (
        <div>
                <span>{props.model}</span>
                <p>{props.amount}</p>
                <button onClick={() => handleRemoveFromCart(props.id)}>Remove from cart</button>
        </div>
    )
}
