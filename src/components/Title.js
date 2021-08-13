import React, { useState, useReducer } from 'react';

// 5 import connect to our component. its a method that wraps its component. 
import { connect } from 'react-redux';

// import reducer from './../reducers'
import { toggleEditing, updateTitle} from './../actions/titleActions';

import TitleDisplay from './TitleDisplay';
import TitleForm from './TitleForm';

const Title = (props) => {
  
  console.log("props",props)
  // 7. comment out
  //const [state, dispatch] = useReducer(titleReducer, initialState);

  const handleToggleEditing = () => {
    props.dispatch(toggleEditing());
    //add props.dispatch
  }

  const handleTitleUpdate = (title) => {
    props.dispatch(updateTitle(title));
  }

  return (
    <div>
      {/* 8. Change state.appName to props.appName */}
      <h1>{props.appName}</h1>
      {
        !props.editing ? 
          <TitleDisplay 
          // title={props.title} 
          // props are no longer needed with connect
          // handleToggleEditing={handleToggleEditing}
          />: 
          <TitleForm 
          //handleTitleUpdate={handleTitleUpdate}
          />
      }
    </div>
  );
};
// 6. create constant mapStateToProps
const mapStateToProps = (state) => {
  console.log("state:", state);
  // returns our current state
  return({
    // prop1: "Warren",
    // prop2: "Ashley",

    appName:state.titleReducer.appName,
    //title: state.title,
    //no longer need because props aren't being passed down
    editing: state.titleReducer.editing,
  })
}

export default connect(mapStateToProps)(Title);
// the first parameters controls what title has access to
// 1. mapStateToProps: allows us to inject state values, directly into a component props.
// 2.mapActionsToProps an object that is used to inject actions into components props 
// and automatically dispatches those actions when executed
