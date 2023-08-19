import React from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import * as actions from '../actions';

function Counter(props: any) {
  const { counter, inc, dec, rnd } = props;
  return (
    <div className="jumbotron">
      <h2 id="counter">{counter}</h2>
      <button id="inc" className="btn btn-primary btn-lg" onClick={inc}>INC</button>
      <button id="dec" className="btn btn-primary btn-lg" onClick={dec}>DEC</button>
      <button id="rnd" className="btn btn-primary btn-lg" onClick={rnd}>RND</button>
    </div>
  )
}

const mapStateToProps = (state: any) => {
  return {
    counter: state
  }
};



const mapDispatchToPops = (dispatch: any) => {
  const { inc, dec, rnd } = bindActionCreators(actions, dispatch);
  return {
    inc,
    dec,
    rnd: () => {
      const randomValue = Math.floor(Math.random() * 10);
      rnd(randomValue);
    }
  }
}

export default connect(mapStateToProps, mapDispatchToPops)(Counter);