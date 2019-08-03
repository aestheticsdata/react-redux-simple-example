import React from 'react';
import { connect } from 'react-redux';
import './css/passiveDisplay.css';

const PassiveDisplay = (props) => {
  return (
    <div
      className="passive-display"
    >
      <div>
        count : {props.count}
      </div>
      <div>
        text : {props.text}
      </div>  
    </div>
  )
};

const mapStateToProps = (state) => {
  return {
    count: state.counterReducer.count,
    text: state.textReducer.text,
  };
}

export default connect(mapStateToProps)(PassiveDisplay);
