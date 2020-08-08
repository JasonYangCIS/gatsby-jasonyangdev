import React from "react"
import Layout from "../components/layout/layoutMath"
import Section from "../components/section/section"
import Text from "../components/text/text"

class MathPage extends React.Component {
  render() {
    return (
      <Layout>
        <Text type='h2'>Multiplication Timed Worksheet</Text>
        <Text type='p'>Welcome Mathletes, test your speedy multiplication math here.</Text>
        <Text type='p'>All equations are randomly generated from 0 - 12</Text>
        ******************************************************
        <br />
        <br />
        <Text type='h3'>Build Requirements</Text>
        score
        <br />
        timer
        <br />
        reset
        <br />
        multiplication components
        <br />
        <br />
        ******************************************************
        <br />
        <br />
        rules:
        <ul>
          <li>answers are automatically submitted once you move onto the next equation</li>
          <li>work sheet has a 1 minute duration and begins as soon as you answer the a equation</li>
        </ul>
      </Layout>
    );
  }
}

export default MathPage
