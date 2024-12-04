import {createStore} from 'redux';


const ORDER_PIZZA = 'ORDER_PIZZA'
// Action
// const action ={
//                 type: ORDER_PIZZA,
//                 shop_name: 'Pizza Shop'

//             }

// Action Creator
function orderPizza(){
    return{
        type: ORDER_PIZZA,
        shop_name: 'Pizza Shop'
    }
}

// Reducer

const initialState = {
    pizzaBase: 100,
}

const reducer = (state=initialState, action) => {
            switch (action.type) {
                case ORDER_PIZZA:{
                    return {
                       ...state,
                        pizzaBase: state.pizzaBase -1
                    }
                }
                default:
                    return state;
            }
}


// Store
// 1- store needs to hold application state.

const store = createStore(reducer)
//  2- It exposes a method called getState which gives your application access to the current state in the store.

console.log('initial store', store.getState())

// 3- Registers listeners via subscribe(listener)
const unsubscribe = store.subscribe(()=>console.log('updated state', store.getState()))

// 4- Dispatches actions via dispatch(action)

store.dispatch(orderPizza())
store.dispatch(orderPizza())
store.dispatch(orderPizza())
store.dispatch(orderPizza())
store.dispatch(orderPizza())
unsubscribe()
store.dispatch(orderPizza())










