import { createContext, useState } from "react";


const ShoppingCartContext = createContext({
    cartItems: [],
    cartItemCount: 0,
    totalItemsCount: 0,
    totalItems: [],
    resultItemCount: 0,
    sortType: '',
    addToCart: (item) => { },
    removeCartItem: (item) => { },
    addTotalItems: (item) => { },
    sortRecords: (type) => { }

});
let cartID = 0;
export function ShoppingCartContextProvider(props) {
    const [userCartItems, setUserCartItems] = useState([]);
    const [totalItems, setTotalItems] = useState([]);
    const [totalSortedItems, setTotalSortedItems] = useState([]);
    const [userSortType, setUserSortType] = useState('');

    function addToCartHandler(item) {
        setUserCartItems((prevCartItems) => {
            cartID = cartID + 1;
            return prevCartItems.concat({ ...item, cartID: cartID });
        });
        console.log("Item added ", JSON.stringify(userCartItems));
    }

    function removeFromCartHandler(cartID) {
        setUserCartItems((prevCartItems) => {
            return prevCartItems.filter(item => item.cartID !== cartID);
        });
    }


    function addTotalItemsHandler(item) {
        setTotalItems((prevTotalItems) => {
            return prevTotalItems.concat(item)
        });
        setTotalSortedItems((prevTotalItems) => {
            return prevTotalItems.concat(item)
        });
    }

    function sortedItemsHandler(size = '') {
        setUserSortType(size);
        const filterData = totalItems.filter(item => item.details.size === size);
        setTotalSortedItems(filterData);
    }



    const context = {
        cartItems: userCartItems,
        cartItemCount: userCartItems.length,
        totalItemsCount: totalSortedItems.length,
        totalItems: totalSortedItems,
        sortType: userSortType,
        resultItemCount: 5,//totalItems.filter(item => item.details.size === userSortType).length,
        addToCart: addToCartHandler,
        removeCartItem: removeFromCartHandler,
        addTotalItems: addTotalItemsHandler,
        sortRecords: sortedItemsHandler
    };
    return <ShoppingCartContext.Provider value={context}>
        {props.children}
    </ShoppingCartContext.Provider>

}



export default ShoppingCartContext;