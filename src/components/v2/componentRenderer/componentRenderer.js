import React from "react"
import Text from "../../text/text"
import Equations from "../../equations/equations"

class ComponentRenderer extends React.Component {
  constructor(props) {
    super(props);
    this.componentData = this.props.data;
  }

  render() {
    switch (this.componentData.type) {
      case 'text':
        return <Text type={this.componentData.htmlElement}>{this.componentData.content}</Text>
      case 'equations':
        return <Equations
          rangeMin={this.componentData.rangeMin}
          rangeMax={this.componentData.rangeMax}
          operation={this.componentData.operation}
          quantity={this.componentData.quantity} />
      default:
        return null;
    }
  }
}

export default ComponentRenderer