import React from 'react';

import { connect } from 'react-redux';

import TitleDisplay from './TitleDisplay';
import TitleForm from './TitleForm';

const Title = (props) => {
  return (
    <div>
      <h1>{props.appName}</h1>
      {
        !props.editing ? 
          <TitleDisplay />: 
          <TitleForm />
      }
    </div>
  );
};

const mapStateToProps = (state) => {
  return({
    appName: state.appName,
    editing: state.editing
  });
}

export default connect(mapStateToProps)(Title);
// 1. mapStateToProps: a function allows use to inject state values directly into a component props.
// 2. mapActionsToProps: an object used to inject actions into a components props AND automatically dispatches those action when excetuted.
