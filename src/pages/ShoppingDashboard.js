import { useContext, useEffect, useState } from "react";
import ShoppingItemList from "../components/shopping/ShoppingItemList";
import ShoppingCartContext from "../store/shopping-cart-context";



function ShoppingDashboard(props) {
    const shoppingCartCtx = useContext(ShoppingCartContext);
    const [isLoading, setIsLoading] = useState(true);
    const [loadedData, setLoadedData] = useState([]);

    useEffect(() => {
        fetch('https://my-json-server.typicode.com/prasadhewage/ecommerce/shipments').then((response) => {
            return response.json();
        }).then(data => {
            const salesItems = [];
            data.forEach(items => {
                shoppingCartCtx.addTotalItems(items);
                salesItems.push(items);
            });

            setIsLoading(false);
            setLoadedData(salesItems);
        });
    }, []);


    if (isLoading)
        return <section>Loading ...</section>

    return <section>
        <ShoppingItemList items={loadedData} />
    </section>

}

export default ShoppingDashboard;