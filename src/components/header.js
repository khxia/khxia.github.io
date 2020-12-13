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
              fontWeight: `300`,
              fontStyle: `italic`,
              fontSize: `2.4rem`
            }}
          >
            {siteTitle}
          </Link>
        </h1>
        <div style={{ float: `right`, }}>
          <Link to="/" style={{
            color: `#ee4466`,
          }}>
            Home
          </Link>{' '}
          {'|'}{' '}
          <Link to="/aboutme" style={{
            color: `#ee4466`,
          }}>
            About Alex
          </Link>{' '}
        </div>
      </div>
      <div className="flex-container">
        <p style={{ maxWidth: 230 }}>Personal Blog by Alex Xia {' '}
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
            href="https://drive.google.com/file/d/1Bof0LfKpZwbwtzHj9Uji3P1efs6Fs0Zy/view?usp=sharing"
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
