
import React from 'react';
import { Link, graphql, useStaticQuery } from 'gatsby';


function BlogPageTemplate() {
    const data = useStaticQuery(graphql`
    query {
        blogpages: allMarkdownRemark(sort: {fields: frontmatter___sort_date, order: DESC}) {
            nodes {
              id
              frontmatter {
                date
                title
                topic
                path
                description
              }
              timeToRead
            }
        }
    }
    `);
    
    return (
        <div>
        {
            data.blogpages.nodes.map( page => {
                return(
                    <div key={page.id}>
                        <h2 style={{
                            margin: 0
                          }}
                            sx={{
                              fontFamily: "heading",
                            }}>
                            <Link to={page.frontmatter.path} >{page.frontmatter.title}</Link>
                          </h2>
                          <p>
                            <small>{page.frontmatter.date}{' '}&bull;{' '}{page.frontmatter.topic}{' '}&bull;{' '}
                            <i>{page.timeToRead} minute read</i></small> <br />
                            {page.frontmatter.description}
                        </p>
                    </div>
                );
            })
        }
        </div>
    ) 
}

export default BlogPageTemplate;