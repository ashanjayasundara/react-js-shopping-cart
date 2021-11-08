import { useContext } from "react";
import ShoppingCartContext from "../../store/shopping-cart-context";
import css from './ShoppingItemType.module.css';


function ShoppingItemType(props) {

    const shoppingCartCtx = useContext(ShoppingCartContext);

    return <div onClick={() => shoppingCartCtx.sortRecords(props.type)} className={css.typeBtn} style={{ backgroundColor: props.type === shoppingCartCtx.sortType ? '#0188CC' : '#EEF2F3' }}>
        <div> {props.name}</div>
    </div>

}


export default ShoppingItemType;