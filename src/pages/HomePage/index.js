// Home/index.js
// Yuan Wang
import React, { Component } from 'react';

// import {Intent, Icon} from "@blueprintjs/core";

// import './style.css';

import autoBind from 'react-autobind';

import { withRouter} from 'react-router-dom'


class HomePage extends Component {


  render() {
    // const { className, ...props } = this.props;
    return (
      <div 

        style={{
          width: '100vw',
          height: '100vh',
          backgroundImage: `url('http://sprudge.com/wp-content/uploads/2015/07/Mountains-1-Big-Bend.jpg')`  
        }}

        class="pan2" 
        />
        
    );
  }
}

export default withRouter(HomePage);

