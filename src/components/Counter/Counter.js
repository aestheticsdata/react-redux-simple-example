import React from 'react';
import { bindActionCreators } from 'redux';
import { connect }  from 'react-redux';

import { add, sub} from './actions/actions';

import './css/counter.css';


const Counter = (props) => {
  const addCount = (e) => {
    e.preventDefault();
    props.dispatch(add());
  };
  const substractCount = (e) => {
    e.preventDefault();
    props.dispatch(sub());
  }

  return (
    <div className="counter">
      Main
      <div>count : {props.count}</div>
      <button
        className="minus"
        onClick={substractCount}
        >
        -
        </button>
        <button
        className="plus"
        onClick={addCount}
      >
        +
      </button>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    count: state.counterReducer.count,
  };
}

// const mapDispatchToProps = (dispatch) => {
//   return {
//     actions: bindActionCreators({ add, sub }),
//     dispatch,
//   }
// }

// export default connect(mapStateToProps, mapDispatchToProps)(Counter);
export default connect(mapStateToProps, null)(Counter);
