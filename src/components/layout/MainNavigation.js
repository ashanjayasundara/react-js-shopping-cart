import { useContext } from "react";
import ShoppingCartContext from "../../store/shopping-cart-context";
import mainNavCSS from './MainNavigation.module.css';

function MainNavigation(props) {
    const shoppingCartCtx = useContext(ShoppingCartContext);

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
    </header>
}

export default MainNavigation;