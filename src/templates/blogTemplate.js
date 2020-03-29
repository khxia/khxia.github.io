import React from "react"
import {graphql} from "gatsby"
import Layout from "../components/layout"
import SEO from "../components/seo"

export default function Template({data,}) {
    const {markdownRemark } =  data
    const {frontmatter, html} = markdownRemark
    return (
    <Layout>
      <SEO title={frontmatter.title}/>  
    <div style={{color: `black`,}}>
        <div className="blog-post-container">
          <p>
            <h1 style={{color: `black`,}}>{frontmatter.title}</h1>
            <p>
              <small>
                <i>{frontmatter.date}</i>
                {' '}&bull;{' '}
                {frontmatter.topic}
              </small> 
              
            </p>
            <div 
            style ={{color: `black`

          }}
            dangerouslySetInnerHTML={{__html: html }} 
            />
            </p>
        </div>
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