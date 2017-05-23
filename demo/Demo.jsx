/**
 * Dialog of milkui-component
 * @author caiyongmin
 *
 * Copyright 2017-2019, All rights reserved.
 */

import React, { Component } from 'react';

import Dialog from './../src';
import './Demo.scss';

class Demo extends Component {
  render() {
    return (
      <div className="demo-panel">
        <div className="demo-title">Milk UI</div>
        <div className="demo-description">
          Demo Page 😀.
        </div>
        <div className="demo-item">
          <Dialog />
        </div>
      </div>
    );
  }
}

export default Demo;
