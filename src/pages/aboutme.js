import React from "react";
import { Link } from "gatsby";
import { useStaticQuery, graphql } from "gatsby";
import Img from 'gatsby-image';
import PropTypes from 'prop-types';
import Layout from "../components/layout";
import SEO from "../components/seo";

import Image from "../components/image";

import coverphoto from "../images/Photo.jpg";


function AboutMe() {
  const data = useStaticQuery(graphql`
	query {
	  selfImg: file(relativePath: {eq: "Photo.jpg"}) {
	    childImageSharp {
	      fixed(height: 300) {
	          base64
	          width
	          height
	          src
	          srcSet
	      }
	    }
		}
  }`);
  return (
    <Layout>
      <SEO title="About Me" />
      <hr className="hr-paragraph-split" />
      <h2>About Me</h2>
      <div className="flex-container">
        <div>
          <div className="flex-container">
          <p>
          👋 Hi, my name is Alex Xia, a junior Computer Science major at UCLA. 
          I'm passionate about creating things, learning new things, and teaching people. 
          I mainly code in C++, Python, and JavaScript. 
          Visit my <a target='_blank' href="https://alex-xia.vercel.app" style={{ color: `#ee4466` }}>website</a> to 
          learn more about me and my projects.
      </p>
          <Img style={{
            padding: '130px',
            marginLeft: '20px',
            marginRight: 'auto',
            display: 'block',
            borderRadius: '10px',
            width: '220px'
          }}
            alt="" fixed={data.selfImg.childImageSharp.fixed} />

            
          </div>
          <hr className="hr-paragraph-split" />
          <p>
            <h3>🎨 Interests</h3>
            <p>
              I have a few main hobbies:
          <ul>
                <li><b>Anime</b> - Those who know me are probably aware that I am a massive weeb. I'm a consumer of almost all genres of anime, and if you name any anime or manga title,
            chances are,
            I've watched it. Judge me on <a target='_blank' href="https://myanimelist.net/profile/RoyalCandy" style={{ color: `#ee4466` }}>MAL</a>. 
            </li>

                <li>
                  <b>Games</b> - <strike>Now before people start assuming things, I would like to clarify that I do have some actual
              redeeming qualities. </strike> I really like games a lot, I believe that it's a big part of what brings people together. In fact, what inspired me to
              study CS in the first place was because of computer games. I've been playing <a target='_blank' href="https://na.leagueoflegends.com/en-us/" style={{ color: `#ee4466` }}> League of Legends </a>
              for almost 6 years, but lately I've been getting quite into <a target='_blank' href="https://playvalorant.com/en-us/" style={{ color: `#ee4466` }}>VALORANT</a> and
              {' '}<a target='_blank' href="https://genshin.mihoyo.com/en" style={{ color: `#ee4466` }}>Genshin Impact</a>.
            </li>

                <li>
                  <b>School</b> - Classes are very fun. I get to learn a bunch of cool coding and math stuff. It's really cool to learn about how the magic-y coding stuff isn't all that magic-y after all.
              Aside from academics, I am also an officer at <a target='_blank' href="https://hack.uclaacm.com/" style={{ color: `#ee4466` }}>ACM Hack</a>, where I got to teach some <a target='_blank' href="https://github.com/uclaacm" style={{ color: `#ee4466` }}>workshops</a>
                  {' '}and organize some <a target='_blank' href="https://hoth.uclaacm.com/" style={{ color: `#ee4466` }}>hackathons.</a> At Hack, I got to meet the most incredible people who have taught me a lot and has changed me as a person.
            </li>
              </ul>
            </p>
          </p>
          <hr className="hr-paragraph-split" />
          <p>
            <h3>🎶 Music</h3>
            <p>
              My music taste usually varies from time to time. Generally, I listen to Kpop, Jpop, Cpop, and classical music.
              Below is a random mix of my most recent favorite Spotify tracks. This updates daily.
            </p>
            {/* SPOTIFY MIX STARTS HERE */}
<ul><li><a href='https://open.spotify.com/track/08YwAPnX8sygJUXG9rvhDv'>ハルジオン</a> - <a href='https://open.spotify.com/artist/64tJ2EAv1R6UaZqc4iOCyj'>YOASOBI</a></li>
<li><a href='https://open.spotify.com/track/2xtP8RNbo2BEMzLX7tK7aq'>CRY FOR ME</a> - <a href='https://open.spotify.com/artist/7n2Ycct7Beij7Dj7meI4X0'>TWICE</a></li>
<li><a href='https://open.spotify.com/track/4RewTiGEGoO7FWNZUmp1f4'>Celebrity</a> - <a href='https://open.spotify.com/artist/3HqSLMAZ3g3d5poNaI7GOU'>IU</a></li>
<li><a href='https://open.spotify.com/track/06XQvnJb53SUYmlWIhUXUi'>怪物</a> - <a href='https://open.spotify.com/artist/64tJ2EAv1R6UaZqc4iOCyj'>YOASOBI</a></li>
<li><a href='https://open.spotify.com/track/1zd35Y44Blc1CwwVbW3Qnk'>群青</a> - <a href='https://open.spotify.com/artist/64tJ2EAv1R6UaZqc4iOCyj'>YOASOBI</a></li>
<li><a href='https://open.spotify.com/track/37S86pw74OH8j96ZmMnrpR'>YOU&I</a> - <a href='https://open.spotify.com/artist/3HqSLMAZ3g3d5poNaI7GOU'>IU</a></li>
<li><a href='https://open.spotify.com/track/6MCjmGYlw6mQVWRFVgBRvB'>夜に駆ける</a> - <a href='https://open.spotify.com/artist/64tJ2EAv1R6UaZqc4iOCyj'>YOASOBI</a></li>
<li><a href='https://open.spotify.com/track/3NxuezMdSLgt4OwHzBoUhL'>Way Back Home</a> - <a href='https://open.spotify.com/artist/72nLe76yBFSlP6VBzME358'>SHAUN</a></li>
<li><a href='https://open.spotify.com/track/465JzFiajJO59sUrDFsxdC'>アンコール</a> - <a href='https://open.spotify.com/artist/64tJ2EAv1R6UaZqc4iOCyj'>YOASOBI</a></li>
<li><a href='https://open.spotify.com/track/19fhOFi6pNGeZe5uiFlm7c'>優しい彗星</a> - <a href='https://open.spotify.com/artist/64tJ2EAv1R6UaZqc4iOCyj'>YOASOBI</a></li></ul>
{/* SPOTIFY MIX ENDS HERE */}
          </p>
        </div>
      </div>
      <hr className="hr-paragraph-split" />
      <h3>About this Website</h3>
      <p>
        This is a place where I post my blogs, as well as anything interesting I have to share. Have a look around!
    </p>
      <p>
        For those who're interested about the name of my blog, there is no deep meaning to it. Like you, I am just 
        another person who has seen different views, experienced different things, and have different thoughts.
        As a person who has encountered things that you may not have, I am here to share them to you. After all, 
        that is what blogs are for.
    </p>
      <div style={{ maxWidth: `300px`, marginBottom: `1.45 rem` }}>

      </div>
      <Link to="/">Back to Home</Link>
    </Layout>
  )
}


export default AboutMe
