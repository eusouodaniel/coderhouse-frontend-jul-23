import { Component } from "react";

class Input extends Component {
  render() {
    return (
      <input type={this.props.type} placeholder={this.props.placeholder} />    
    )
  }
}

export default Input;