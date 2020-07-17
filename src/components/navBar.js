import React from "react"
import { Link } from "gatsby"

const CustomNavbar = ({ pageInfo }) => {
  console.log(pageInfo)
  return (
    <>
      <nav class="navbar">
          <div class="navbar-header">
              <button type="button" class="navbar-toggle" data-toggle="collapse" data-target=".navbar-collapse">
              <span class="icon-bar"></span>
              <span class="icon-bar"></span>
              <span class="icon-bar"></span>
              </button>
          </div>
          <div class="navbar-collapse collapse">
              <ul class="nav navbar-nav">
                  <li>
                      <a href="/">Home</a>
                  </li>
                  <li>
                      <a href="/visitor-centre.html">Visitor Info</a>
                  </li>
                  <li>
                      <a href="/podcast-alley">Podcast Alley</a>
                  </li>
                  <li>
                      <a href="/qr-castle.html">QR Castle</a>
                  </li>
                  <li class="active">
                      <a href="/news">News</a>
                  </li>
              </ul>
          </div>
        </nav>
    </>
  )
}

export default CustomNavbar