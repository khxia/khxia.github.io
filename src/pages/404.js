import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"
import { Link } from "gatsby";

const NotFoundPage = () => (
  <Layout>
    <SEO title="404: Not found" />
    <h1>NOT FOUND</h1>
    <p>
      You just hit a route that doesn&#39;t exist. 
      You have either mistyped the URL or this endpoint has been taken down...
      the sadness.
    </p>
    <Link to="/">Back to Home</Link>
  </Layout>
)

export default NotFoundPage
