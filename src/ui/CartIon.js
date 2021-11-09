import { useContext } from "react";
import ShoppingCartContext from "../store/shopping-cart-context";
import cartCSS from './CartIcon.module.css';

function CartIcon(props) {
    const shoppingCartCtx = useContext(ShoppingCartContext);

    

    return <div style={{ display: "flex", flexDirection: 'column',position:'relative' }}>
        <p className={cartCSS.icon} onClick={props.onClick}>&#128722; {props.fullView?' Bags ':''}
        </p>
        {shoppingCartCtx.cartItemCount > 0 &&
            <div className={cartCSS.badge}> {shoppingCartCtx.cartItemCount}</div>
        }
    </div>
}

export default CartIcon;