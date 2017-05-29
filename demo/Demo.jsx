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
  constructor(props) {
    super(props);
    this.state = {
      show1: false,
      show2: false,
      style1: {
        title: '弹窗标题',
        buttons: [
          { label: '取消', type: 'default', onClick: this.hideDialog.bind(this) },
          { label: '确认', type: 'primary', onClick: this.hideDialog.bind(this) },
        ],
      },
      style2: {
        buttons: [
          { label: '确认', type: 'primary', onClick: this.hideDialog.bind(this) },
        ],
      },
    };
  }

  render() {
    const { show1, show2, style1, style2 } = this.state;

    return (
      <div className="demo-panel">
        <div className="demo-title">Milk UI</div>
        <div className="demo-description">Demo Page 😀.</div>
        <div className="demo-item">
          <div
            className="milkui-btn milkui-btn_default"
            onClick={() => { this.setState({ show1: true }); }}
          >iOS Dialog Style1</div>
          <Dialog
            show={show1}
            buttons={style1.buttons}
            title={style1.title}
          >弹窗内容，告知当前状态、信息和解决方法，描述文字尽量控制在三行内</Dialog>
        </div>
        <div className="demo-item">
          <div
            className="milkui-btn milkui-btn_default"
            onClick={() => { this.setState({ show2: true }); }}
          >iOS Dialog Style2</div>
          <Dialog
            show={show2}
            buttons={style2.buttons}
          >弹窗内容，告知当前状态、信息和解决方法，描述文字尽量控制在三行内</Dialog>
        </div>
      </div>
    );
  }

  hideDialog() {
    this.setState({
      show1: false,
      show2: false,
    });
  }
}

export default Demo;
