
import listCSS from './CartItem.module.css';


function CartItem(props) {


    return <div className={listCSS.itemContainer}>
        <div className={listCSS.itemRemove} onClick={props.removeItem(props.elementID)}>X</div>
        <div className={listCSS.itemContent}>
            <div className={listCSS.itemImageContainer}>
                <img src={props.details.image} className={listCSS.itemImage} alt="" />
            </div>
            <div className={listCSS.itemDescription}>
                <div className={listCSS.itemDescriptionText}>{props.name}</div>
                <div className={listCSS.itemDescriptionText + " " + listCSS.lightGray}>{props.details.type}</div>
            </div>
            <div className={listCSS.itemPrice}>
                <div className={listCSS.itemDescriptionText + " " + listCSS.gold}>$ {props.details.price}</div>
            </div>
        </div>
    </div>
}

export default CartItem;