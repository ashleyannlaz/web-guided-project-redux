// 1. create action constant for ADD_NEW_MEMBER
// 2. create an action creator for addNewMember
// 3. export both

export const ADD_MEMBER = "ADD_MEMBER";

export const addMember = (name) => {
    return({type: ADD_MEMBER, payload:name});
}