import React, { Component, Children } from 'react'

export default class Parent extends Component {
  render() {
    return (
      <div>
        {Children.count()}
        {this.props.children}
      </div>
    )
  }
}
