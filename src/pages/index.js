import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"
import BlogPageTemplate from "../templates/blogPageTemplate"

const IndexPage = () => (
  <Layout>
    {/* <Link to="/blogposts">Blog Posts</Link> */}
    <SEO title="Home" />
    <div>
      <p>
        <i> Welcome to my blog. This is where I talk about anything I want to talk about.</i>
      </p>
    <BlogPageTemplate />
    <h2 style={{
        margin: 0
      }}
        sx={{
          fontFamily: "heading",
        }}>
        <Link to="/manga_list">My Top 10 Manga of all time</Link>
      </h2>
      <p>
        <small>September 27th 2020{' '}&bull;{' '}Manga</small> <br />
        A place to refer to in case anyone asks me "I need so manga recs" again. Here you go.
    </p>
      <h2 style={{
        margin: 0
      }}
        sx={{
          fontFamily: "heading",
        }}>
        <Link to="/anime_list">My Top 10 Anime of all time</Link>
      </h2>
      <p>
        <small>September 27th 2020{' '}&bull;{' '}Anime</small> <br />
      A place to refer to in case anyone asks me "which anime do you like the most?" again.
      I don't have one. I have ten.
    </p>
    </div>

  </Layout>
)

export default IndexPage
