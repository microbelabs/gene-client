import * as React from 'react'
import styled from 'styled-components'
import { Link } from 'react-router-dom'
import * as Icon from '../../components/SVGIcon'

const Communities = styled.div`
  a {
    text-decoration: none;
    color: var(--light-text);
    cursor: pointer !important;
    display: flex;
    align-items: center;
    padding: 10px 0;
    margin-bottom: 10px;

    &:hover {
      .title {
        color: var(--light-blue);
      }

      svg * {
        fill: var(--light-blue);
      }
    }
  }
`

const Group = styled.span`
  display: flex;
  flex-direction: column;
  margin-left: 15px;

  .title {
    font-weight: bold;
  }
`

const Links: Array<any> = [
  {
    url: 'https://www.facebook.com/microbewars',
    title: 'Facebook Group',
    desc: `Join us with GENE Token holder and players on facebook.`,
    icon: () => <Icon.Facebook />
  },

  {
    url: 'https://twitter.com/GENEToken',
    title: 'Twitter @GENEToken',
    desc: 'Subscribes latest news about GENE Token in Twitter.',
    icon: () => <Icon.Twitter />
  },

  {
    url: 'https://slack.genetoken.io',
    title: 'Slack Channels',
    desc: 'Join us in slack with Game Developers, GENE Token Holder, Investor, and Players.',
    icon: () => <Icon.Slack />
  },

  {
    url: 'https://t.me/GENEToken',
    title: 'Telegram Group',
    desc: 'Join our group in telegram.',
    icon: () => <Icon.Telegram />
  },

  {
    url: 'https://t.me/GENETokenNews',
    title: 'Telegram Channel',
    desc: 'Subscribes latest news about GENE Token in Telegram.',
    icon: () => <Icon.Telegram />
  }
]

export default class Community extends React.Component {
  render() {
    return (
      <Communities>
        <p>Join GENE Token communities around the world.</p>
        {Links.map((item, key) => {
          return (
            <Link to={item.url} key={key}>
              {item.icon()}
              <Group>
                <span className="title">{item.title}</span>
                <span>{item.desc}</span>
              </Group>
            </Link>
          )
        })}
      </Communities>
    );
  }
}
