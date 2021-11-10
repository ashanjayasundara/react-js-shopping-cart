import { useContext, useState } from "react";
import ShoppingCartContext from "../../store/shopping-cart-context";
import mainNavCSS from './MainNavigation.module.css';
import CartItemList from "../shopping/CartItemsList";
import CartIcon from "../../ui/CartIon";

function MainNavigation(props) {
    const shoppingCartCtx = useContext(ShoppingCartContext);
    const [showShoppingCart, setShowShoppingCart] = useState(false);

    function showCart() {
        setShowShoppingCart(!showShoppingCart)
    }
    return <header className={mainNavCSS.header}>
        <div className={mainNavCSS.leftSideBar}>Sizes</div>
        <div className={mainNavCSS.rightSideBar}>
            <div style={{ display: "flex", flexDirection: 'row', flex: 1 }}>
                {shoppingCartCtx.totalItemsCount} Product(s) Found
            </div>
            <div style={{ display: "flex", flex: 1, flexDirection: 'row-reverse', marginRight: '150px' }}>
                <select name="order" id="order" style={{
                    width: '100px', marginLeft: '20px'
                }}>
                    <option value="">SELECT</option>
                    <option value="saab">Type</option>
                    <option value="opel">Size</option>
                </select>
                <label>Order By</label>

            </div>

        </div>
        <div className={mainNavCSS.cartBtn}>
            <CartIcon onClick={showCart} isOpen={showShoppingCart} fullView={false} />
        </div>
        {showShoppingCart &&
            <CartItemList closeNav={showCart} onClick={showCart} isOpen={showShoppingCart}/>
        }
    </header>
}

export default MainNavigation;