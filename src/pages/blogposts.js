import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"
import selfPortrait from "../images/Photo.jpg"
import {jsx} from "theme-ui"


const blogPostsPage = () => (
  <Layout>
    <SEO title="Posts" />
    <div>
    <h2 style={{
      margin: 0
      }}
      sx={{
      fontFamily:"heading",
      }}>
      <Link to="../posts/ib/How-Hong-Kong-gamed-the-IB-Diploma">How Hong Kong gamed the IB Diploma</Link>
    </h2>
    <p>
      <small>March 24th 2020{' '}&bull;{' '}Hong Kong, Education</small> <br/>
      The issues behind the scenes as well as some tips and tricks to success in the IB
    </p>
    </div>

  </Layout>
)

export default blogPostsPage
