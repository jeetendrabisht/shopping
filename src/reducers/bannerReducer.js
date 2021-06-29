export function banner(state = [], action) {
    switch (action.type) {
        case 'BANNER_DATA_SUCCESS':
            return action.items;
        default:
            return state;
    }
}
