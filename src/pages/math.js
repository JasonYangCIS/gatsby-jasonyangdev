import React from "react";
import Layout from "../components/v2/layout/layoutMath";
import ComponentRenderer from "../components/v2/ComponentRenderer/ComponentRenderer";

class MathPage extends React.Component {
  constructor(props) {
    super(props);
    this.data = this.props.data;
  }

  render() {
    return (
      <Layout>
        {this.data.dataJson.components.map((component, index) => (
          <ComponentRenderer
            data={component}
            key={`${component.type}_${index}`}
          />
        ))}
      </Layout>
    );
  }
}

export default MathPage;

export const query = graphql`
  query Math {
    dataJson {
      template
      components {
        type
        content
        htmlElement
        rangeMin
        rangeMax
        operation
        quantity
        timerDuration
      }
    }
  }
`;
