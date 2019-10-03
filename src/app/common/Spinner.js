import React, { Component } from 'react'
import Loader from 'react-loader-spinner'


class Spinner extends Component {
  render() {
    return (
      <div >
        <div className='align-middle'>
          <Loader 
              type="Oval"
              color="#6C2471"
              height="50"	
              width="30"
          />
        </div>
        
      </div>
    )
  }
}

export default  Spinner