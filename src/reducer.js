export const initialState = {
    basket: [],
    user: null
};

export const getBasketTotal = (basket) =>
    basket?.reduce((amount, item) => item.price + amount, 0)

const reducer = (state, action) => {
    switch(action.type) {
        case 'ADD_TO_BASKET':
            return {
                ...state,
                basket: [...state.basket, action.item],
            };
        case 'EMPTY_BASKET':
            return {
                ...state,
                basket: [],
            }
        case 'REMOVE_FROM_BASKET':
            const index = state.basket.findIndex((basketItem) => basketItem.id === action.id);

            let newBasket = [...state.basket];

            if (index >= 0) {
                newBasket.splice(index, 1);  // takesthe newarray and cuts out the deleted item, the number "1" tells us how many ofthose items to cut out that match the item's index when you have duplicate items in thecart
            } else {
                console.warn("Can't remove product (id: ${action.id}) as it is not in the basket.");
            }
            return {
                ...state,
                basket: newBasket
            }
        case 'SET_USER':
            return {
                ...state, 
                user: action.user
            }
        
        default:
            return state;
    }
};

export default reducer;