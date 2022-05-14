export const initialState={
    basket:[],
<<<<<<< HEAD
    user: null
};

export const getBasketTotal = (basket) => 
basket?.reduce((amount, item) => item.price + amount, 0);
=======
    user: null,
};

export const getBasketTotal = (basket) => 
basket?.reduce((amount, item)=> item.price + amount, 0);
>>>>>>> 363cc64420e841bb6d7a9a8c2e4dd159f2aeca01

const reducer = (state,action) => {
    console.log(action);
    switch(action.type){
        case 'ADD_TO_BASKET':
            return {
                ...state,
                basket:[...state.basket, action.item],
            };

<<<<<<< HEAD
            case "REMOVE_FROM_BASKET":
                const index = state.basket.findIndex(
                    (basketItem)=> basketItem.id === action.id
                );
                let newBasket = [...state.basket];

                if(index >=0){
                    newBasket.splice(index, 1);

                }else{
                    console.warn(
                        `Cant remove product (id: ${action.id}) its
                         not in basket!`
                    )
                }

                return{...state,
                    basket: newBasket}

                    case "SET_USER":
                        return{...state,
                            user: action.user
                        }
                
=======
        case 'REMOVE_FROM_BASKET':
            const index = state.basket.findIndex(
                (basketItem) => basketItem.id === action.id
            );
            let newBasket = [...state.basket];

            if (index >= 0){
                newBasket.splice(index, 1);

            }else{
                console.warn(
                    `Cant remove product (id: ₹{action.id} ) as its not in basket!`
                )
            }
            return {...state,
            basket: newBasket
             }

             case "SET_USER":
                 return {
                     ...state,user:action.user
                 }
>>>>>>> 363cc64420e841bb6d7a9a8c2e4dd159f2aeca01

            default:
            return state;
    }
};

export default reducer;