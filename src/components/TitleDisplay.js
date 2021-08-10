import React from 'react';
import { connect } from 'react-redux';
import { toggleEditing } from './../actions/titleActions';

const TitleDisplay = (props)=> {
    const handleToggleEditing = () => {
      props.toggleEditing();
    }

    return(<h2>
        {props.title}{' '}
        <i
          className="far fa-edit"
          onClick={handleToggleEditing}
        />
    </h2>);
}

const mapStateToProps = (state)=> {
  
  return({
    title: state.titleReducer.title
  });
}


export default connect(mapStateToProps, { toggleEditing })(TitleDisplay);