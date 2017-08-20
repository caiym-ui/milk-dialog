import expect from 'expect.js';
import React from 'react';
import assign from 'object-assign';
import { mount } from 'enzyme';

import Dialog from '../src';

/**
 * mount react component, and return a dom wrapper
 * @param {Object} props custom render props
 */
function mountComponent(props) {
  // prepare render props
  const renderProps = assign(
    {
      show: false,
      title: '测试标题',
      buttons: [
        { label: '取消', type: 'default' },
        { label: '确认', type: 'primary' },
      ],
    },
    props
  );
  // mount dom node wrapper
  const domWrapper = mount(
    <Dialog {...renderProps} />
  );

  return domWrapper;
}

describe('Dialog', () => {
  describe('render', () => {
    it('should render correctly', (done) => {
      const domWrapper = mountComponent();
      expect(domWrapper.find('.milkui-dialog').length).to.be(1);
      done();
    });
  });
});
