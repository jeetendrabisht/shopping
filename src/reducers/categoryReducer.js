export function category(state = [], action) {
    switch (action.type) {
        case 'ITEMS_CATEGORY_DATA_SUCCESS':
            return action.items;
        default:
            return state;
    }
}

