//defining a no-empty Reducer's initial state :
const INITIAL_STATE = {
    currentUser: null
}
// passing INITIAL_STATE as 'default-parameter value' of state (JS6)
// in case state is Undefined/Not set => will b set as value='null'
const userReducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        // TYPE=> "SET_CURRENT_USER"
        case "SET_CURRENT_USER":
            //rendering when 'action fired'
            return {
                ...state, //everything else in the state
                currentUser: action.payload //<=our PAYLOAD, what is updated
            }
        default: return state; //in case no actions matching here
    }
}

export default userReducer;