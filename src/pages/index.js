import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" keywords={[`gatsby`, `application`, `react`]} />
    <div className="Hero">
      <div className="HeroGroup">
        <h1>Header 1</h1>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ab possimus molestias, saepe blanditiis cupiditate ullam veniam vero magni velit ea reiciendis voluptate veritatis non molestiae voluptatum rem consequuntur suscipit unde.</p>
        <Link to="/video">Watch the Video</Link>
      </div>
    </div>
  </Layout>
)

export default IndexPage
