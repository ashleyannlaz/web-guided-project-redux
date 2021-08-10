import React, { useState } from 'react';
import { connect } from 'react-redux';
import { updateTitle } from './../actions/titleActions';

const TitleForm = (props) => {
  //Component State
  const [newTitleText, setNewTitleText] = useState();

  const handleChanges = e => {
      setNewTitleText(e.target.value);
  };

  const handleSubmit = ()=> {
    props.dispatch(updateTitle(newTitleText));
    // props.handleTitleUpdate(newTitleText);
  }
  
  return(<div>
        <input
          className="title-input"
          type="text"
          name="newTitleText"
          value={newTitleText}
          onChange={handleChanges}
        />
        <button
          onClick={handleSubmit}>
          Update title
        </button>
      </div>);
}

const mapActionsToProps = {
  updateTitle:updateTitle
}

export default connect(null, mapActionsToProps)(TitleForm);