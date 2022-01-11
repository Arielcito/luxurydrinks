const initialState = {
    loading: true,
    products: null,
    auxiliar: []
}

const productsReducer = ( state = initialState, action) => {
    switch(action.type){
        case 'GET_PRODUCTS':
            return{
                ...state,
                products: action.payload.drinks,
                auxiliar:action.payload.drinks,
                loading:false
            }
        case 'FILTER_PRODUCTS':
            console.log(action.payload)
            let filtrado = action.payload.products.filter((product => product.drinkName.toLowerCase().startsWith(action.payload.value.toLowerCase().trim())))
            return{
                ...state,
                auxiliar: filtrado,
            }
            default:
                return state
    }
}
export default productsReducer