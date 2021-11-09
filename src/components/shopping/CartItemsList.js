import { useContext } from 'react';
import ShoppingCartContext from '../../store/shopping-cart-context';
import CartIcon from '../../ui/CartIon';
import CartItem from './CartItem';
import listCSS from './CartsItemList.module.css';

function CartItemList(props) {
    const shoppingCartCtx = useContext(ShoppingCartContext);

    return (<div className={listCSS.modal}>
        <div className={listCSS.close} onClick={props.onClick}>X</div>
        <CartIcon onClick={props.onClick} fullView={true} />
        <div className={listCSS.itemList}>

            {shoppingCartCtx.cartItems.map((item, index) => {
                return <CartItem key={index + item.cartID} details={item.details} name={item.name} elementID={item.cartID} removeItem={(id) => {
                    // shoppingCartCtx.removeCartItem(item.cartID);
                    console.log('remove item click ' + id);
                }} />
            })

            }

        </div>

    </div>
    );
}

export default CartItemList;