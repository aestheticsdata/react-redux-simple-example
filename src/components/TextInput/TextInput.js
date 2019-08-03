import React from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import { changeText } from './actions/changeText';

import './css/textInput.css';

const TextInput = (props) => {
  const onChange = (e) => {
    e.preventDefault();
    props.dispatch(changeText(e.target.value));
  }

  return (
    <div className="text-input">
      <div>this is a text input :</div>
      <input
        type="text"
        value={props.value}
        onChange={onChange}
      />
    </div>
  );
}

const mapStateToProps = (state) => {
  return {
    text: state.textReducer.text,
  };
}

// const mapDispatchToProps = (dispatch) => {
//   let actions = bindActionCreators({ changeText });
//   return {
//     ...actions,
//     dispatch,
//   }
// }

export default connect(mapStateToProps, null)(TextInput);
// export default connect(mapStateToProps, mapDispatchToProps)(TextInput);
