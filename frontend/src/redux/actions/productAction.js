import axios from "axios"

const productActions = {

    fetchProducts: () => {
        console.log("llegó")
        return async(dispatch, getState) => {
            const res = await axios.get("http://localhost:4000/api/admin/drinks")
            if(res.data.success){
                dispatch({type:'GET_PRODUCTS',payload:res.data})
            }else{
                console.error('Error trying to fetch')
            }
    }},
    filterProducts: ( products, value) => {
        console.log(products,value)
        return(dispatch,getState) => {
            dispatch({type:'FILTER_PRODUCTS',payload:{products,value}})
        }
    }
}

export default productActions