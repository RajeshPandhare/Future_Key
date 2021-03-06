import { Observable } from 'rxjs/Observable';
import { ajax as staticAjax } from 'rxjs/observable/dom/ajax';
import 'rxjs/add/operator/mergeMap';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import 'rxjs/add/observable/of';
import { apiCallFetch } from '../utils';
const data = {};
export const ERROR = 'ERROR';
const API_CONTACT = "http://103.135.230.56:8080/api/contacts";

const PRODUCTS = 'PRODUCTS';
export const PRODUCTS_SUCCESS = 'PRODUCTS_SUCCESS';
const PRODUCTS_FAILURE = 'PRODUCTS_FAILURE';

const INITIAL_STATE = {
  data: [],
  loading: false,
  error: false,
  flag:false
};

export const fetchProductAction = payload => ({
  type: PRODUCTS,
  payload
});

const productsSuccess = payload => ({
  type: PRODUCTS_SUCCESS,
  payload
});

export const productEpic = action$ => action$
  .ofType(PRODUCTS)
  .mergeMap(action => staticAjax.post(`http://103.135.230.56:8080/api/contacts`, action.payload, { 'Content-Type': 'application/json',  'Access-Control-Allow-Origin': '*' })
    .map(response => productsSuccess(response))
    .catch(error => Observable.of({
      type: PRODUCTS_FAILURE,
      payload: error
    }, {
        type: ERROR,
        payload: error
      })))

export function productReducer(state = INITIAL_STATE, action) {
  console.log(action);
  switch (action.type) {
    case PRODUCTS: {
      return {
        ...state,
        data: data,
        loading: true,
        error: false,
        flag:false
      }
    }
    case PRODUCTS_SUCCESS: {
      return {
        ...state,
        data: data,
        loading: false,
        error: false,
        flag:true
      }
    }
    case PRODUCTS_FAILURE: {
      return {
        ...state,
        data: data,
        loading: false,
        error: false,
        flag: false
      }
    }
    default:
      return state
  }
}