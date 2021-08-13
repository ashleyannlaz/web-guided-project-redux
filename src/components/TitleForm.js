import React, { useState } from 'react';
import { toggleEditing, updateTitle } from './../actions/titleActions'
// YOU STILL NEED TO IMPORT ACTIONS
// SOLELY FOR NOT USING DISPATCH
import { connect } from 'react-redux'


const TitleForm = (props) => {
    const [newTitleText, setNewTitleText] = useState();
    // not necessary to put into redux
    // component state so you don't need the overhead of putting it into state


    const handleChanges = e => {
        setNewTitleText(e.target.value);
    };

    const handleSubmit = ()=> {
        //props.handleTitleUpdate(newTitleText);
        //props.dispatch(updateTitle(newTitleText));
        props.updateTitle(newTitleText)
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
  updateTitle:updateTitle,
}


export default connect(null, mapActionsToProps)(TitleForm);
//you need to hold space for state