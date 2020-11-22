import React from "react"
import { graphql } from "gatsby"
import Layout from "../components/layout"
import SEO from "../components/seo"
import { Link } from "gatsby";


// const katex = require(`katex/dist/katex.min.css`)

export default function Template({ data, }) {
  const { markdownRemark } = data
  const { frontmatter, html } = markdownRemark
  return (
    <Layout>
      <SEO title={frontmatter.title} />
      <div style={{ color: `black`, }}>
        <div >
          <p>
            <h1 style={{ color: `black`, }}>{frontmatter.title}</h1>
            <p>
              <small>
                <i>{frontmatter.date}</i>
                {' '}&bull;{' '}
                {frontmatter.topic}
              </small>
            </p>
            <div sx={{
              // h1:  
              color: "primary",
              backgroundColor: "background",
            }}
              dangerouslySetInnerHTML={{ __html: html }}
            />
          </p>
        </div>
        <Link to="/">Back to Home</Link>
      </div>
    </Layout>
  )
}

export const pageQuery = graphql`
  query($path: String!) {
    markdownRemark(frontmatter: { path: { eq: $path } }) {
      html
      frontmatter {
        date
        path
        title
        topic
      }
    }
  }
`