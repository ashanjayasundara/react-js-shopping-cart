import ShoppingCartItem from "./ShoppingItem";
import listCSS from './ShoppingItemList.module.css'


function ShoppingItemList(props) {
    return <div className={listCSS.list}>
        {
            props.items.map((saleItem) => {
                return <ShoppingCartItem key={saleItem.id}
                    id={saleItem.id}
                    name={saleItem.name}
                    details={saleItem.details}
                />
            })
        }
    </div>
}

export default ShoppingItemList;