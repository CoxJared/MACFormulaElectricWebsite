import React, { Component } from 'react'
import './Button.scss'

export class Button extends Component {
  render() {
    return (
      <div className="button">
        <h1 className="button-text">{this.props.text}</h1>
        <div className="button-background"/>
      </div>
    )
  }
}

export default Button
