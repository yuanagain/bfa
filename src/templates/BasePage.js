// templates/BasePage.js
// Yuan Wang

import React, { Component } from 'react';
import autoBind from 'react-autobind';
import { withRouter} from 'react-router-dom'

const __DEFAULT_BACKGROUND_URL__ = 'http://sprudge.com/wp-content/uploads/2015/07/Mountains-1-Big-Bend.jpg'

class BasePage extends Component {

  render() {

    var header = null

    if (this.props.header) {
      header =  <div
                  id='grad'
                  style={{
                    backgroundColor: 'rgba(0,0,0,0.7)',
                    display: 'flex',
                    flexDirection: 'row',
                    justifyContent: 'space-between',
                    alignItems: 'center',
                    paddingLeft: 20,
                    paddingRight: 20,
                  }}>
                  <a onClick={() => console.log('clicked')}>
                    <h2 style={{color: 'white'}}>Title Page</h2>
                  </a>
                  <a>
                    <h3 style={{color: 'white'}}>Contact</h3>
                  </a>
                </div>
    }
    // const { className, ...props } = this.props;
    return (
      <div 
        style={{
          height: '100vh',
          width: '100vw',
          backgroundImage: `url(` +  this.props.backgroundImage + `)`,
          display: 'flex',
          flexDirection: 'column',
          flex: 1
        }}

        class="pan2" 
        >
          {header}
        <div
          style={{
            backgroundColor: 'rgba(0,0,0,0.7)',
            display: 'flex',
            flex: 1
          }}>
          {this.props.children}
        </div>
      </div>
        
    );
  }
}

BasePage.defaultProps = {backgroundImage: __DEFAULT_BACKGROUND_URL__, header: true}

export default withRouter(BasePage);
