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
        <Text type='h2'>Requiremented Components</Text>
        score - checks the states of multiplication cards
        <br />
        timer - starts as soon as someone answers any of the questions
        <br />
        reset - reset states of equations and timer
        reset
        <br />
        multiplication card - states (correct/wrong)
        <br />
        <br />
        ******************************************************
        <br />
        <br />
        <Text type='h2'>Rules</Text>
        <ul>
          <li>answers are automatically submitted once you move onto the next equation</li>
          <li>work sheet has a 1 minute duration and begins as soon as you answer the a equation</li>
        </ul>
      </Layout>
    );
  }
}

export default MathPage
