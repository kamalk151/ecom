
const INITAL_STATE = {
  todo : null
}
  
const productReducer = (state = INITAL_STATE, action) => {
  switch(action.type) {
  case 'ADD_DATA' : 
    return {...state, todo : action.payload}
  case 'DELETE_DATE' : 
    return INITAL_STATE
  default : return state
  }
}
 
  
export default productReducer