import * as React from 'react';
import styled from 'styled-components';
import Navbar from '../components/Navbar';

// Temporary
const Fragment = styled.div``

const Container = styled.div`
  padding: 15px 30px;
`;

export default class App extends React.Component {
  render() {
    return (
      <Fragment>
        <Navbar />
        <Container>{this.props.children}</Container>
      </Fragment>
    );
  }
}
