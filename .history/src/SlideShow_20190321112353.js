import React, { Component, Children } from 'react'

export default class SlideShow extends Component {
  render() {
    const {children} = this.props;
    return (
      <div className="slideshow">
        {children}
      </div>
    )
  }
}
