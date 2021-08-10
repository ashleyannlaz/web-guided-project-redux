import React from 'react';
import { connect } from 'react-redux';

const TitleDisplay = (props)=> {
    return(<h2>
        {props.title}{' '}
        <i
          className="far fa-edit"
          onClick={props.handleToggleEditing}
        />
    </h2>);
}

export default TitleDisplay;