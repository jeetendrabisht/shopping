export function category(state = [], action) {
    console.log("Action", action.items);
    switch (action.type) {
        case 'ITEMS_CATEGORY_DATA_SUCCESS':
            return action.items;
        default:
            return state;
    }
}

