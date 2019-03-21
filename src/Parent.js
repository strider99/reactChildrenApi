import React, { Component, Children } from 'react'

export default class Parent extends Component {
  render() {

    // Children map
    const buttons = Children.map(this.props.children, child => (
      <button>
        {child}
      </button>
    ))
    return (
      <div>
        {Children.count(this.props.children)}
        {buttons}
      </div>
    )
  }
}
