import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"
import selfPortrait from "../images/Photo.jpg"


const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <p>
     <i> Welcome to my blog. This is where I talk about anything I want to talk about.</i>
    </p>
    <Link to="/blogposts">My Posts</Link>  

  </Layout>
)

export default IndexPage
