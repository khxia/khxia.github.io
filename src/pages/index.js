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
    <SEO title="Home" />
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
        <Link to="../posts/python/pdf-merger">How to create your own custom PDF merger using PyPDF2</Link>
      </h2>
      <p>
        <small>November 20th 2020{' '}&bull;{' '}Python</small> <br />
        Just a useful Python tool if you ever need to merge PDFs and you don't have a mac...
    </p>
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
        <Link to="../posts/math/The-Mathematics-behind-present-giving">The Mathematics behind choosing a present</Link>
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
