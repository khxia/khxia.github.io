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
      <h2>About Me</h2>
      <div className="flex-container">
        <div>
          <p>
            Hi, my name is Alex Xia, an undergraduate Computer Science major at UCLA. I am an undergrad, so most of my CS background comes
            from school (C++) for now. Having said that, I have been messing around with JavaScript and React (hence this blog). I also have
            quite a bit of experience in Python after doing some Machine Learning and writing some API's in my internship.
      </p>
          <Img style={{
            padding: '2px',
            marginLeft: 'auto',
            marginRight: 'auto',
            display: 'block'
          }}
            alt="" fixed={data.selfImg.childImageSharp.fixed} />
          <p>
            <h3>Interests</h3 >
            <p>
              I have a few main hobbies:
          <ul>
                <li><b>Anime</b> - Those who know me are probably aware that I am a massive weeb. I'm a consumer of almost all genres of anime, and if you name any anime or manga title,
            chances are,
            I've watched it. I really do need to keep a track of all the anime and manga that I've watched/read. Maybe I'll make a <a href="https://myanimelist.net/" style={{ color: `#ee4466` }}>MyAnimeList.net </a> account some day.
            We'll see.
            </li>

                <li>
                  <b>Games</b> - <strike>Now before people start assuming things, I would like to clarify that I do have some actual
              redeeming qualities. </strike> I really like games a lot, I believe that it's a big part of what brings people together. In fact, what inspired me to
              study CS in the first place was because of computer games. I've been playing <a href="https://na.leagueoflegends.com/en-us/" style={{ color: `#ee4466` }}> League of Legends </a>
              for almost 6 years, but lately I've been getting quite into <a href="https://www.nintendo.com/games/detail/fire-emblem-three-houses-switch/" style={{ color: `#ee4466` }}>Fire Emblem: Three Houses</a> and
              <a href="https://www.smashbros.com/en_US/" style={{ color: `#ee4466` }}> Super Smash Bros. Ultimate</a>.
            </li>

                <li>
                  <b>School</b> - Classes are very fun. I get to learn a bunch of cool coding and math stuff. It's really cool to learn about how the magic-y coding stuff isn't all that magic-y after all.
              Aside from academics, I am also an officer at <a href="https://hack.uclaacm.com/" style={{ color: `#ee4466` }}>ACM Hack</a>, where I got to teach some <a href="https://github.com/uclaacm" style={{ color: `#ee4466` }}>workshops</a>
                  {' '}and organize some <a href="hoth.splashthat.com" style={{ color: `#ee4466` }}>hackathons.</a> At Hack, I got to meet the most incredible people who have taught me a lot and has changed me as a person.
            </li>

              </ul>
            </p>
          </p>
        </div>
      </div>

      <h3>About this Website</h3>
      <p>
        This is a place where I post my blogs, as well as anything interesting I have to share. Have a look around!
    </p>
      <p>
        For those who're interested about the name of this website, it's derived from my Chinese name: 夏焜昊. Which is pronounced Xia Kun Hao. Since Natsu is 夏 in Japanese,
        and kun (君) is a honourific, I combined the two to create Natsu-kun. Don't cringe.
    </p>
      <div style={{ maxWidth: `300px`, marginBottom: `1.45 rem` }}>

      </div>
      <Link to="/">Back to Home</Link>
    </Layout>
  )
}


export default AboutMe
