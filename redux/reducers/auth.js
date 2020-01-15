const initialState = {
    isAuth: false,
    token: '',
    profile : {
      name : 'rifqi'
    }
};

export default (state = initialState, action) => {
  switch (action.type) {
    case "LOGIN":
      return {
        ...state,           
        token : action.payload.token,
        isAuth : true,
        profile : action.payload.profile || ''
      }

   case "LOGOUT":
      return {
        ...state,           
        token : '',
        isAuth : false,
        profile : ''
        
      }
    
   
    default:
      return state;
  }
};
