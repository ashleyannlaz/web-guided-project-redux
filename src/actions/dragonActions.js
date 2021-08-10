export const ADD_MEMBER = "ADD_MEMBER";
//1. create and export an action constant for ADD_NEW_MEMBER.

export const addMember = (name)=> {
    return({type:ADD_MEMBER, payload:name});
}
//2. create and export an action creator for addNewMember.
