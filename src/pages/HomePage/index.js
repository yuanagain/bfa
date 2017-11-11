// Home/index.js
// Yuan Wang

import React, { Component } from 'react';
import autoBind from 'react-autobind';
import { withRouter} from 'react-router-dom'

import BasePage from '../../templates/BasePage.js'

class HomePage extends Component {


  render() {
    // const { className, ...props } = this.props;
    return (
      <div>
        <BasePage>
          <div 
            style={{
              flexDirection: 'column', 
              justifyContent: 'center', 
              alignItems: 'center', 
              display: 'flex', 
              flex: 1
            }}>

            <div 
              style={{
                backgroundColor: 'rgba(255, 255, 255, 0.2)', 
                height: 150, 
                justifyContent: 'center',
                alignItems: 'center',
                padding: 20,
                width: 700, 
                borderRadius: 2
              }}>
              <h3 
                style={{
                  color: 'white',
                }}>
                {"Talent is cheaper than table salt."}
              </h3>
              <h2 
                style={{
                  color: 'white',
                }}>
                {"What separates the talented individual from the successful one is a lot of hard work."}
              </h2>
            </div>
          </div>
        </BasePage>
        <div 
          style={{
            height: '100vh', 
            width: '100vw',
            display: 'flex',
            flexDirection: 'row'
          }}>
          <div 
            style={{
              display: 'flex',
              flexDirection: 'column',
              flex: 1,
              backgroundColor: 'rgba(0, 0, 0, 0.75)',
              alignItems: 'center',
              padding: 16,
            }}>
            <h2 style={{color: 'white'}}>Title 1</h2>
            <div 
              style={{
                height: 1,
                width: '25vw',
                backgroundColor: 'white'
              }}/>
            <p style={{color: 'white'}}>
              When things happen - enjoy them. They're little gifts. In this world, everything can be happy. All you have to do is let your imagination go wild. Look around. Look at what we have. Beauty is everywhere you only have to look to see it.
            </p>
          </div>
          <div 
          style={{
            display: 'flex',
            flexDirection: 'column',
            flex: 1,
            backgroundColor: 'rgba(0, 0, 0, 0.5)',
            alignItems: 'center',
            padding: 16,
          }}> 
            <h2 style={{color: 'white'}}>Title 2</h2>
            <div 
              style={{
                height: 1,
                width: '25vw',
                backgroundColor: 'white'
              }}/>
            <p style={{color: 'white'}}>
              There is immense joy in just watching - watching all the little creatures in nature. Don't be afraid to make these big decisions. Once you start, they sort of just make themselves. These things happen automatically. All you have to do is just let them happen.
            </p>
          </div>
          <div 
            style={{
              display: 'flex',
              flexDirection: 'column',
              flex: 1,
              backgroundColor: 'rgba(0, 0, 0, 0.75)',
              alignItems: 'center',
              padding: 16,
            }}>
            <h2 style={{color: 'white'}}>Title 3</h2>
            <div 
              style={{
                height: 1,
                width: '25vw',
                backgroundColor: 'white'
              }}/>
            <p style={{color: 'white'}}>
              Go out on a limb - that's where the fruit is. We don't need any guidelines or formats. All we need to do is just let it flow right out of us. Didn't you know you had that much power? You can move mountains. You can do anything. Don't kill all your dark areas - you need them to show the light. That is when you can experience true joy, when you have no fear.
            </p>
          </div>

        </div>
        <BasePage 
          header={false}
          backgroundImage={'http://static1.businessinsider.com/image/59b6c523609c3030008b64e2/photos-show-hurricane-irmas-aftermath-in-the-caribbean-where-some-islands-were-more-than-90-destroyed.jpg'}
          />
      </div>
        
    );
  }
}

export default withRouter(HomePage);

