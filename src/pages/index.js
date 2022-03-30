import React, { useState, useEffect } from 'react'
import mediumZoom from 'medium-zoom'
import { StaticImage } from "gatsby-plugin-image"
import { StaticQuery, graphql, useStaticQuery } from "gatsby"
import '../styles/index.scss'

// markup
const IndexPage = () => {
  useEffect(() => {
    const m = mediumZoom('[data-zoomable]', {
      background: '#000a',
    });
    console.log( m );
  }, []);

  const data = useStaticQuery(graphql`
    {
      allFile {
        edges {
          node {
            relativePath
            prettySize
            name
            publicURL
          }
        }
      }
    }`
  )

  return (
    <main >
      <div className="kitty-container">
        { data.allFile.edges.map ( ( obj ) => {
          const src = `${ obj.node.publicURL }`;
          return (
            <div className="kitty-item">
              <img key={obj.node.id} data-zoomable loading="lazy" src={ src } alt="Kitty" />
            </div>
          )
        } ) }
      </div>
    </main>
  )
}

export default IndexPage
