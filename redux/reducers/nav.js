import {OPEN_MENU} from '../constan/home'

const initialState = {
    page : '/'
};

export default (state = initialState, action) => {
  switch (action.type) {
    case OPEN_MENU+'_PENDING' : 
    return {
      ...state, isLoading : true
    }

    case OPEN_MENU+'_FULFILLED' : 
        return {
        ...state, isLoading : false, isFinish : true,
        page : action.payload
    }

    case OPEN_MENU+'_REJECTED' : 
        return {
        ...state, isError : true,

        }
    
   
    default:
      return state;
  }
};
