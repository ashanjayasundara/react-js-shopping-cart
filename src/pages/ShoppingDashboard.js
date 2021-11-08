import { useContext, useEffect, useState } from "react";
import ShoppingItemList from "../components/shopping/ShoppingItemList";
import ShoppingCartContext from "../store/shopping-cart-context";



function ShoppingDashboard(props) {
    const shoppingCartCtx = useContext(ShoppingCartContext);
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        fetch('https://my-json-server.typicode.com/prasadhewage/ecommerce/shipments').then((response) => {
            return response.json();
        }).then(data => {
            const salesItems = [];
            data.forEach(items => {
                shoppingCartCtx.addTotalItems(items);
                salesItems.push(items);
                shoppingCartCtx.addTotalItems(items);
            });

            setIsLoading(false);
           
        });
    }, []);


    if (isLoading)
        return <section>Loading ...</section>

    return <section>
        <ShoppingItemList items={shoppingCartCtx.totalItems} />
    </section>

}

export default ShoppingDashboard;