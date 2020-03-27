import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"
import selfPortrait from "../images/photo-circle.png"

const Header = ({ siteTitle }) => (
  <header
    style={{
      background: `white`,
      marginBottom: `1.45rem`,
    }}
  >
    <div
      style={{
        margin: `0 auto`,
        maxWidth: 960,
        padding: `1.45rem 1.0875rem`,
      }}
    >
      <div>
      <h1 style={{ margin: 0 }}>
        <Link
          to="/"
          style={{
            color: `#ee4466`,
            textDecoration: `none`,
            fontFamily: `ヒラギノ角ゴ Pro W3`,
            fontStyle: `italic`,
          }}
        >
          {siteTitle}
        </Link>
      </h1>
        <div style={{float: `right`,}}>
          <Link to="/" style={{
          color: `#ee4466`,
          } }>
          Home
          </Link>{' '}
          {'|'}{' '}
          <Link to="/aboutme" style={{
          color: `#ee4466`,
          } }>
          About me
          </Link>{' '}
        </div>
      </div>
      <div class = "flex-container">
        <p style={{maxWidth: 230}}>Personal blog by Alex Xia {' '}
        <a
          href="https://github.com/khxia"
          target="_blank"
          rel="noopener noreferrer"
          style={{
            color: `#ee4466`,
          }}
        >
          github
        </a>{' '}
        &bull;{' '}
        <a
          href="https://www.facebook.com/alex.xia.58"
          target="_blank"
          rel="noopener noreferrer"
          style={{
            color: `#ee4466`,
          }}
        >
          resume
        </a>{' '}
        </p>
        
      </div>  
    </div>
  </header>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
