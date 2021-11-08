//A reducer is a function that gets two properties
//{
    //Type: The type of action
//    type: 
    //Payload: This can be anything
    //payload: 
//}

//Now, again, the state is going to be 
//something that the Redux store is 
//going to pass to this reducer,


const INITIAL_STATE ={
    currentUser: null
}

//state = INITIAL_STATE, this means if state
//is ever undefined set it to the default value
//in this case INITIAL state
const userReducer = (state = INITIAL_STATE,action) => {
    switch (action.type){
        case 'SET_CURRENT_USER':
            return{
               ...state,
               currentUser: action.payload 
            }
        default:
            return state;
    }
}

export default userReducer;