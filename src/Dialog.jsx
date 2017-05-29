/**
 * Dialog of milkui-component
 * @author caiyongmin
 *
 * Copyright 2017-2019, All rights reserved.
 */


import React, { Component, PropTypes } from 'react';
import Mask from 'milkui-mask';
import classnames from 'classnames';

import './index.scss';

class Dialog extends Component {
  static propTypes = {
    className: PropTypes.string,
    show: PropTypes.bool,
    title: PropTypes.string,
    children: PropTypes.node,
    buttons: PropTypes.array,
  }

  constructor(props) {
    super(props);
    this.state = { show: this.props.show };
    this.hideDialog = this.hideDialog.bind(this);
  }

  componentWillReceiveProps(nextProps) {
    this.setState({
      show: nextProps.show,
    });
  }


  render() {
    const { className, title, children, buttons } = this.props;
    const { show } = this.state;
    const wrapClassName = classnames(
      'milkui-dialog',
      { 'milkui-dialog_show': show },
      className
    );

    return (
      <div className={wrapClassName}>
        <Mask className="milkui-dialog__mask" onClick={this.hideDialog} />
        <div className="milkui-dialog__content">
          {title && <div className="milkui-dialog__header">
            <div className="milkui-dialog__title">{title}</div>
          </div>}
          <div className="milkui-dialog__body">{children}</div>
          <div className="milkui-dialog__footer">
            {
              buttons.map((btn) => {
                const { label, type, ...others } = btn;
                if (type === 'primary') {
                  return <span className="milkui-dialog__btn" {...others}>{label}</span>;
                }
                return (
                  <span
                    className="milkui-dialog__btn milkui-dialog__btn_default" {...others}
                  >{label}</span>);
              })
            }
          </div>
        </div>
      </div>
    );
  }

  hideDialog() {
    this.setState({
      show: false,
    });
  }
}

export default Dialog;
