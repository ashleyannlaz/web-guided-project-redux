import React from 'react';
// 9. import directly
import { connect } from 'react-redux';
import { toggleEditing, } from '../actions/titleActions';

const TitleDisplay = (props)=> {

  const handleToggleEditing = () => {
    //console.log(props)
    //props.dispatch(toggleEditing());
    props.toggleEditing();
    //with maptoactions you don't need to use dispatch, praise be

  }

    return(<h2>
        {props.title}{' '}
        <i
          className="far fa-edit"
          onClick={handleToggleEditing}
        />
    </h2>);
}

const mapStateToProps = (state) => {
  return({
    title: state.titleReducer.title,
  });
}

const mapActionsToProps = {
  toggleEditing: toggleEditing,
}

export default connect(mapStateToProps,mapActionsToProps)(TitleDisplay);