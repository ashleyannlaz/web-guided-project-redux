import { ADD_MEMBER } from './../actions/dragonActions';

export const initialState = {
    members: [
        { name: 'Jojo Zhang', dragonStatus: true },
        { name: 'Brandon Harris', dragonStatus: false }
      ]
}

const reducer = (state = initialState, action) => {
    switch(action.type) {
        case ADD_MEMBER:
            return {
                ...state,
                members:[...state.members, {name: action.payload, dragonStatus: true}]
            }
        default:
            return state;
    }
}

export default reducer;

//1. create and export initialState
//2. add member into our initialState
//3. create a reducer function
//4. add in case ADD_NEW_MEMBER
//5. add in a default case
//6. export out reducer