import { useContext } from "react";
import ShoppingCartContext from "../../store/shopping-cart-context";
import { Card } from "../../ui";
import itemCSS from './ShoppingItem.module.css';


function ShoppingCartItem(props) {
    const shoppingCartCtx = useContext(ShoppingCartContext);

    function addToCart() {
        shoppingCartCtx.addToCart({
            id: props.id,
            name: props.name,
            details: props.details
        });
    }
    return (
        <div className={itemCSS.item}>
            <Card>
                {props.details.tag !== "" &&
                    <div className={itemCSS.tag} >{props.details.tag}</div>
                }
                <div className={itemCSS.image} style={{ marginTop: props.details.tag !== "" ? '35px' : '5px' }}>
                    <img src={props.details.image} alt="" />
                </div>
                <div className={itemCSS.content}>
                    <h3>{props.name}</h3>
                    <div style={{ height: '2px', width: '45px', backgroundColor: 'gold' }}></div>
                    <p className={itemCSS.price}>${props.details.price}</p>
                </div>
                <div onClick={addToCart} className={itemCSS.cartBtn}>Add to Cart</div>
            </Card>
        </div>
    )
}

export default ShoppingCartItem;