import React, { useState, useReducer } from 'react';

import { connect } from 'react-redux';

import titleReducer, { initialState } from '../reducers/titleReducer';
import { toggleEditing, updateTitle} from './../actions/titleActions';

import TitleDisplay from './TitleDisplay';
import TitleForm from './TitleForm';

const Title = (props) => {
  console.log("title props: ", props);

  const [state, dispatch] = useReducer(titleReducer, initialState);

  const handleToggleEditing = () => {
    dispatch(toggleEditing());
  }

  const handleTitleUpdate = (title) => {
    dispatch(updateTitle(title));
  }

  return (
    <div>
      <h1>{state.appName}</h1>
      {
        !state.editing ? 
          <TitleDisplay title={state.title} handleToggleEditing={handleToggleEditing}/>: 
          <TitleForm handleTitleUpdate={handleTitleUpdate}/>
      }
    </div>
  );
};

const mapStateToProps = ()=> {
  return({
    prop1: "Warren",
    prop2: "Allison"
  });
}

export default connect(mapStateToProps)(Title);
// 1. mapStateToProps: a function allows use to inject state values directly into a component props.
// 2. mapActionsToProps: an object used to inject actions into a components props AND automatically dispatches those action when excetuted.
