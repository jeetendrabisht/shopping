let carOpenData = {
    cartOpen : false
};

export function cartOpenHere(state = carOpenData, action) {
    switch (action.type) {
        case 'CART_OPEN_SUCCESS':
            let newObj = Object.assign({}, {cartOpen: action.items});
            return newObj;
        default:
            return state;
    }
}