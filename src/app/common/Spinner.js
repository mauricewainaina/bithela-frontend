import React, { Component } from "react";
import Loader from "react-loader-spinner";

class Spinner extends Component {
  render() {
    return (
      <div>
        <div class="text-center">
          <div class="spinner-border" role="status">
            <span class="sr-only">Loading...</span>
          </div>
        </div>
        <div>
          {/* <Loader type="Oval" color="#6C2471" height="50" width="30" /> */}
        </div>
      </div>
    );
  }
}

export default Spinner;
