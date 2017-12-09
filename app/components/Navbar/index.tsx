import * as React from 'react';
import styled from 'styled-components';

const NavbarWrapper = styled.div`
  padding: 20px;
  border-bottom: 1px solid #bbb;
`;

export default class NavBar extends React.Component {
  render() {
    return (
      <NavbarWrapper />
    );
  }
}