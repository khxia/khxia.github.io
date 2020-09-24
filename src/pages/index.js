import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"
import selfPortrait from "../images/Photo.jpg"


const IndexPage = () => (
  <Layout>
    {/* <SEO title="Home" />
    <p>
      <i> Welcome to my blog. This is where I talk about anything I want to talk about.</i>
    </p>
    <Link to="/blogposts">Blog Posts</Link> */}
    <div>
      <p>
        <i> Welcome to my blog. This is where I talk about anything I want to talk about.</i>
      </p>
      <h2 style={{
        margin: 0
      }}
        sx={{
          fontFamily: "heading",
        }}>
        <Link to="../posts/linguistics/Chinese-Japanese">A Linguistic comparison between Chinese and Japanese</Link>
      </h2>
      <p>
        <small>September 24th 2020{' '}&bull;{' '}Linguistics</small> <br />
      A glimspe of how modern Japanese and modern Chinese differ linguistically, despite coming from the same roots.
    </p>
      <h2 style={{
        margin: 0
      }}
        sx={{
          fontFamily: "heading",
        }}>
        <Link to="../posts/decision_making_math/The-Mathematics-behind-present-giving">The Mathematics behind choosing a present</Link>
      </h2>
      <p>
        <small>June 14th 2020{' '}&bull;{' '}Math</small> <br />
      A mini analysis on how to choose the mathematically optimal present
    </p>
      <h2 style={{
        margin: 0
      }}
        sx={{
          fontFamily: "heading",
        }}>
        <Link to="../posts/ib/How-Hong-Kong-gamed-the-IB-Diploma">How Hong Kong gamed the IB Diploma</Link>
      </h2>
      <p>
        <small>March 24th 2020{' '}&bull;{' '}Hong Kong, Education</small> <br />
      The issues behind the scenes as well as some tips and tricks to success in the IB diploma.
    </p>
    </div>
  </Layout>
)

export default IndexPage
