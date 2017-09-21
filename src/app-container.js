import { bindActionCreators } from "redux";
import { connect } from "react-redux";

import App from "./app";
import {increaseCounter} from './ducks/app';

const mapStateToProps = (state, ownProps) => {
  return state;
};

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    increaseCounter: bindActionCreators(increaseCounter, dispatch)
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
