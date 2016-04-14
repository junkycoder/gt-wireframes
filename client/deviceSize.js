import React, { Component } from 'react';
import Events from 'material-ui/lib/utils/events';

const Sizes = {
  SMALL: 1,
  MEDIUM: 2,
  LARGE: 3,
};

function deviceSize(ChildComponent) {

  class DeviceSize extends Component {

    state = {
      deviceSize: Sizes.SMALL
    }

    componentDidMount() {
      this.updateDeviceSize();
      this.bindResize();
    }

    componentWillUnmount() {
      this.unbindResize();
    }

    isDeviceSize(desiredSize) {
      return this.state.deviceSize >= desiredSize;
    }

    updateDeviceSize() {
      const width = window.innerWidth;

      if (width >= 992) {
        this.setState({deviceSize: Sizes.LARGE});
      } else if (width >= 768) {
        this.setState({deviceSize: Sizes.MEDIUM});
      } else { // width < 768
        this.setState({deviceSize: Sizes.SMALL});
      }
    }

    bindResize() {
      Events.on(window, 'resize', ::this.updateDeviceSize);
    }

    unbindResize() {
      Events.off(window, 'resize', ::this.updateDeviceSize);
    }

    render() {
      return (
        <ChildComponent
          {...this.props}
          isSmallDevice={this.state.deviceSize === Sizes.SMALL}
          isMediumDevice={this.state.deviceSize === Sizes.MEDIUM}
          isLargeDevice={this.state.deviceSize === Sizes.LARGE}
        />
      );
    }
  }

  return DeviceSize;
}

export default deviceSize;
