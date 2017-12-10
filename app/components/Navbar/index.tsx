import * as React from 'react'
import styled from 'styled-components'
import { Link } from 'react-router-dom'
import * as Icon from './icon'

const Navbar = styled.div`
  padding: 15px 30px;
  border-bottom: 1px solid var(--light-line);
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const Navigation = styled.div`
  display: flex;
  flex-basis: 60%;
  justify-content: space-between;
  align-items: center;
`

const NavItem  = styled.div`
  a {
    display: flex;
    align-items: center;
    color: var(--light-text);
    font-size: 18px;
    text-decoration: none;

    &:hover {
      color: var(--light-blue);
      > svg * {
        fill: var(--light-blue);
      }
    }

    svg {
      margin-right: 8px;
    }
  }
`

const NavItems: Array<any> = [
  {
    url: '/',
    icon: () => <Icon.Wallet />,
    label: 'Wallets',
    desc: 'GENE Token Cold Storage'
  },

  {
    url: '/games',
    icon: () => <Icon.Game />,
    label: 'Games',
    desc: 'View and Manage Games'
  },

  {
    url: '/marketplace',
    icon: () => <Icon.Marketplace />,
    label: 'Marketplace',
    desc: 'Buy and Sell Game Properties'
  },

  {
    url: '/community',
    icon: () => <Icon.Community />,
    label: 'Community',
    desc: 'Join Our Communities'
  }
]

export default class NavBar extends React.Component {
  constructor() {
    super()
  }

  render() {
    return (
      <Navbar>
        <Link to="/">
          <Icon.Logo />
        </Link>
        <Navigation>
          {NavItems.map(item => {
            const key = item.url.replace('/', '')
            return (
              <NavItem key={key}>
                <Link to={item.url} aria-label={item.desc} className="hint--bottom">
                  {item.icon()}
                  {item.label}
                </Link>
              </NavItem>
            )
          })}
        </Navigation>
      </Navbar>
    );
  }
}
