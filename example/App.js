import React, { Component, PropTypes } from 'react';
import s from './style.scss';
import ProgressTemplate from './ProgressTemplate';
import './style.scss';

export default class App extends Component {
 
  render() {
    

    
    return (
      <div className={s.root}>
        <div className={s.circles}>
          
          
          
        </div>
        <ProgressTemplate
          percent={70}
        />
        <ProgressTemplate
          status="error"
          percent={40}
        />
        <ProgressTemplate
          theme={{
            success: {
             
              color: 'rgb(223, 105, 180)'
            },
            active: {
         
              color: '#fbc630'
            },
            default: {
             
              color: '#fbc630'
            }
          }}
        />
      </div>
    )
  }
};
