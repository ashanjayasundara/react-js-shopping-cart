import { createContext, useState } from "react";


const ShoppingCartContext = createContext({
    cartItems: [],
    cartItemCount: 0,
    totalItemsCount: 0,
    totalItems: [],
    resultItemCount: 0,
    sortType: '',
    addToCart: (item) => { },
    addTotalItems: (item) => { },
    sortRecords: (type) => { }

});

export function ShoppingCartContextProvider(props) {
    const [userCartItems, setUserCartItems] = useState([]);
    const [totalItems, setTotalItems] = useState([]);
    const [totalSortedItems, setTotalSortedItems] = useState([]);
    const [userSortType, setUserSortType] = useState('');


    function addToCartHandler(item) {
        setUserCartItems((prevCartItems) => {
            return prevCartItems.concat(item);
        })
        console.log("Item added ", item);
    }

    function addTotalItemsHandler(item) {
        setTotalItems((prevTotalItems) => {
            return prevTotalItems.concat(item)
        });
        setTotalSortedItems((prevTotalItems) => {
            return prevTotalItems.concat(item)
        });

        console.log('sorted items ',totalSortedItems)

    }

    function sortedItemsHandler(size = '') {
        setUserSortType(size);
        setTotalSortedItems(totalItems.filter(item => item.details.size === size));

    }



    const context = {
        cartItems: userCartItems,
        cartItemCount: userCartItems.length,
        totalItemsCount: totalSortedItems.length,
        totalItems:totalSortedItems,
        sortType: userSortType,
        resultItemCount: 5,//totalItems.filter(item => item.details.size === userSortType).length,
        addToCart: addToCartHandler,
        addTotalItems: addTotalItemsHandler,
        sortRecords: sortedItemsHandler
    };
    return <ShoppingCartContext.Provider value={context}>
        {props.children}
    </ShoppingCartContext.Provider>

}



export default ShoppingCartContext;