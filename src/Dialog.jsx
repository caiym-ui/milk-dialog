/**
 * Dialog of milkui-component
 * @author caiyongmin
 *
 * Copyright 2017-2019, All rights reserved.
 */


import React, { Component } from 'react';

import Icon from './svg';
import MobileIcon from './svg/mobile.svg';
import './index.scss';

class Dialog extends Component {
  render() {
    return (
      <div className="milkui-dialog">
        <Icon className="milkui-dialog__icon" glyph={MobileIcon} />
        <span className="milkui-dialog__text">Are you ready!</span>
      </div>
    );
  }
}

export default Dialog;
