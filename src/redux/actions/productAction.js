import axios from "axios";

import * as actionType from "../constants/productConstant"

const URL = 'http://localhost:8000';

export const getProducts = () => async(dispatch) => {
    try{
        let {data} = await axios.get(`${URL}/products`);
        
        dispatch({type: actionType.GET_PRODUCTS_SUCCESS, payload: data})
    } catch (error){
        dispatch({type: actionType.GET_PRODUCTS_FAIL, payload: error.message});
    }
}

export const getProductsDetails = (id) => async(dispatch) => {
    try{
        dispatch({type: actionType.GET_PRODUCTS_DETAILS_REQUEST});

        let {data} = await axios.get(`${URL}/product/${id}`);
        dispatch({type: actionType.GET_PRODUCTS_DETAILS_SUCCESS, payload: data})

    } catch (error){
        dispatch({type: actionType.GET_PRODUCTS_DETAILS_FAIL, payload: error.message});
    }
}