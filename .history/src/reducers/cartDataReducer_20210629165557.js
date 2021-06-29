const sessionKey = Object.keys(sessionStorage)[0];
let cartTotal;
let registerStatus;
if (sessionKey) {
    registerStatus = Object.keys(localStorage).filter(key => key === sessionKey);
}
if (!!registerStatus && registerStatus.length) {
    const userType = sessionKey && JSON.parse(sessionStorage.getItem(sessionKey)).userType;
    if (userType !== "registered") {
        this.setState({ visible: true });
    } else {
        let dbData = JSON.parse(localStorage.getItem(sessionKey));
        if (!!dbData) {
            if (dbData.cart) {
                cartTotal = dbData.cart.reduce((acc, data) => {
                    return acc + data.quantity;
                }, 0);
            }
        }
    }
}

let initialData = {
    cartData: cartTotal
}

export function cartData(state = initialData, action) {
    switch (action.type) {
        case 'CART_ITEM_SUCCESS':
            let newObj = Object.assign({}, {cartData: action.items});
            return newObj;
        default:
            return state;
    }
}