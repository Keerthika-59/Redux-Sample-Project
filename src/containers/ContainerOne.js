import React, { Component } from "recat";
import * as ACTION_TYPES from "../store/actions/actionTypes";
import * as ACTIONS from "../store/actions/actions";
import ComponentOne from "../components/ComponentOne";
class ContainerOne extends Component {
  render() {
    return (
    <div>
      <button onClick={}>Get State</button>
      <button onClick={}>Dispatch Action 1</button>
      <button onClick={}>Dispatch Action 2</button>
    </div>;
    )
  }
}

function mapStateToProps(state){

}
export default ContainerOne