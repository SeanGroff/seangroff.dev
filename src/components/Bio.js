import React from 'react'

import TwitterFollow from './TwitterFollow'
import profilePic from './profile-pic.jpg'
import { rhythm } from '../utils/typography'
import 'typeface-montserrat'
import 'typeface-merriweather'

class Bio extends React.Component {
  render() {
    return (
      <div style={{ display: 'flex', marginBottom: rhythm(2.5) }}>
        <img
          src={profilePic}
          alt={`Sean Groff`}
          style={{
            marginRight: rhythm(1 / 2),
            marginBottom: 0,
            width: rhythm(2),
            height: rhythm(2),
            borderRadius: '50%',
          }}
        />
        <div style={{ display: 'flex', flexDirection: 'column' }}>
          <p style={{ marginBottom: rhythm(0.25) }}>
            I am <strong>Sean</strong>, a Software Engineer in Kansas City
            passionate about React and JavaScript.{' '}
          </p>
          <TwitterFollow />
        </div>
      </div>
    )
  }
}

export default Bio
