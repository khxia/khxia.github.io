import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"
import selfPortrait from "../images/Photo.jpg"


const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <h1>About Me</h1>
    <div class = "flex-container">
      <div>
      <p>
        Hi, my name is Alex Xia, an undergraduate Computer Science major at UCLA. I am an undergrad, so most of my CS background comes 
        from school (C++) for now. Having said that, I have been messing around with JavaScript and React (hence this blog), and Android
        Development using Kotlin.
      </p>
      <p>
        <h4>Interests</h4>
        <p>
          I have a few main hobbies: 
          <ul>
            <li><b>Anime</b> - Those who know me are probably aware that I am a massive weeb. I'm a consumer of almost all genres of anime, and if you name any anime or manga title, 
            chances are, 
            I've watched it. I really do need to keep a track of all the anime and manga that I've watched/read. Maybe I'll make a <a href="https://myanimelist.net/">MyAnimeList.net </a> account some day. 
            We'll see.
            </li>

            <li>
              <b>Games</b> - <strike>Now before people start assuming things, I would like to clarify that I do have some actual 
              redeeming qualities. </strike> I really like games a lot, I believe that it's a big part of what brings people together. In fact, what inspired me to 
              study CS in the first place was because of computer games. I've been playing <a href="https://na.leagueoflegends.com/en-us/"> League of Legends </a>
              for almost 6 years, but lately I've been getting quite into <a href="https://www.nintendo.com/games/detail/fire-emblem-three-houses-switch/">Fire Emblem: Three Houses </a> and
              <a href="https://www.smashbros.com/en_US/"> Super Smash Bros. Ultimate</a>. 
            </li>
            
          </ul>
        </p>
      </p>
      </div>
      
      <img src={selfPortrait} width="220" height="300" alt=""></img>
    </div>

    <h3>About this Blog</h3>
    <p>
      The purpose of this blog hasn't really been decided yet as of March 21st 2020. I am probably going to write about whatever I feel like and post it. 
      Generally though, I'll probably post stuff about CS, anime, and maybe some math stuff. Right now I'm under mandatory self-quarantine by the Hong Kong 
      government since I just returned from the US, so I do have a lot of time on my hands. 
    </p>
    <p>
    For those who're interested about the name of the blog, it's derived from my Chinese name: 夏焜昊. Which is pronounced Xia Kun Hao. Since Natsu is 夏 in Japanese, 
    and kun (君) is a honourific, I combined the two to create Natsu-kun. Pretty smart right?
    </p>
    <div style={{ maxWidth: `300px`, marginBottom: `1.45 rem` }}>
      
    </div>
    <Link to="/page-2/">Go to page 2</Link>
  </Layout>
)

export default IndexPage
