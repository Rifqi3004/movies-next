import {SAVE_SESSION} from '../constan/auth'
const initialState = {
    isAuth: false,
    token: '',
    profile : {
      name : 'rifqi'
    }
};

export default (state = initialState, action) => {
  switch (action.type) {
    case SAVE_SESSION : 
        localStorage.setItem('token',action.payload.token)
        return {
        ...state, isLoading : false, isFinish : true,
        token : action.payload.token,
        isAuth : true,
        // profile : action.payload.profile
    }
    case SAVE_SESSION+'_PENDING' : 
    return {
      ...state, isLoading : true
    }

    case SAVE_SESSION+'_FULFILLED' : 
        return {
        ...state, isLoading : false, isFinish : true,
        token : action.payload.token,
        isAuth : true,
        // profile : action.payload.profile
    }

    case SAVE_SESSION+'_REJECTED' : 
        return {
        ...state, isError : true,

        }
    
   
    default:
      return state;
  }
};
