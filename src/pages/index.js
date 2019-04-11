import React from "react"
import { Link } from "gatsby"
import Layout from "../components/layout"
import SEO from "../components/seo"
import Header from "../components/header"

const IndexPage = () => (
  <Layout>
    <Header />
    <SEO title="Home" description="Xavier Castro's Personal Website" author="Xavier Castro"/>
    <div className="Hero">
      <div className="HeroGroup">
        <h1>Header 1</h1>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ab possimus molestias, saepe blanditiis cupiditate ullam veniam vero magni velit ea reiciendis voluptate veritatis non molestiae voluptatum rem consequuntur suscipit unde.</p>
        <Link to="/video">Watch the Video</Link>
        <svg width="100%" height="172" viewBox="0 0 100% 172" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path fill="white">
            <animate repeatCount="indefinite" fill="freeze" attributeName="d" dur="10s"
              values="M0 25.9086C277 84.5821 433 65.736 720 25.9086C934.818 -3.9019 1214.06 -5.23669 1442 8.06597C2079 45.2421 2208 63.5007 2560 25.9088V171.91L0 171.91V25.9086Z;
                      M0 86.3149C316 86.315 444 159.155 884 51.1554C1324 -56.8446 1320.29 34.1214 1538 70.4063C1814 116.407 2156 188.408 2560 86.315V232.317L0 232.316V86.3149Z;
                      M0 53.6584C158 11.0001 213 0 363 0C513 0 855.555 115.001 1154 115.001C1440 115.001 1626 -38.0004 2560 53.6585V199.66L0 199.66V53.6584Z;
                      M0 25.9086C277 84.5821 433 65.736 720 25.9086C934.818 -3.9019 1214.06 -5.23669 1442 8.06597C2079 45.2421 2208 63.5007 2560 25.9088V171.91L0 171.91V25.9086Z;"
              />
          </path>
        </svg>
        <div className="Logos">
          <img src={require('../images/logo-sketch.png')} width="50" />
          <img src={require('../images/logo-figma.png')} width="50" />
          <img src={require('../images/logo-studio.png')} width="50" />
          <img src={require('../images/logo-framer.png')} width="50" />
          <img src={require('../images/logo-react.png')} width="50" />
          <img src={require('../images/logo-swift.png')} width="50" />
        </div>
      </div>
    </div>
  </Layout>
)

export default IndexPage
