import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"
import selfPortrait from "../images/Photo.jpg"


const blogPostsPage = () => (
  <Layout>
    <SEO title="Posts" />
    <Link to="../markdown-pages/post1">Hello</Link>

  </Layout>
)

export default blogPostsPage
