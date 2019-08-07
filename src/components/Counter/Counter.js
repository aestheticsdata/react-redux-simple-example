import React from 'react';
import { bindActionCreators } from 'redux';
import { connect }  from 'react-redux';
import { css, cx } from 'emotion';

import { add, sub} from './actions/actions';

import './css/counter.css';


const Counter = (props) => {
  const addCount = (e) => {
    e.preventDefault();
    // props.dispatch(add());
    props.add();
  };
  const substractCount = (e) => {
    e.preventDefault();
    // props.dispatch(sub());
    props.sub();
  }

  return (
    <div className={css`
      padding: 10px;
      margin: 10px;
      border: 1px solid rgb(97, 163, 184);
    `}>
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

const mapDispatchToProps = (dispatch) => {
  return {
    add: () => dispatch(add()),
    sub: () => dispatch(sub()),
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Counter);
// export default connect(mapStateToProps, null)(Counter);
