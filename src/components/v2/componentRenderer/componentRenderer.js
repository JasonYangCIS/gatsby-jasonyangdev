import React from "react"
import Text from "../../text/text"

class ComponentRenderer extends React.Component {
  constructor(props) {
    super(props);
    this.componentData = this.props.data;
  }

  render() {
    switch (this.componentData.type) {
      case 'text':
        return <Text type={this.componentData.htmlElement}>{this.componentData.content}</Text>
      case 'image':
        return 'image..'
      default:
        return null;
    }
  }
}

export default ComponentRenderer