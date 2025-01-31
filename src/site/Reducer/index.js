import { combineReducers }  from 'redux'
import cartReducer from './cartReducer'
const rootReucer = combineReducers({ cart:cartReducer })
export default rootReucer
