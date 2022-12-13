import React, { Component } from "react";
import NavBar from "../Components/NavBar";
import "../CSS/NavBarAndFooter.css";
import ImageList from "@mui/material/ImageList";
import ImageListItem from "@mui/material/ImageListItem";
import ImageListItemBar from "@mui/material/ImageListItemBar";
import MediaQuery from "react-responsive";
import makeCarousel from "react-reveal/makeCarousel";
import styled from "styled-components";
import axios from 'axios';
import {useEffect} from "react";

/**importing images */

import img1 from "../Assets/a1.png";
import img2 from "../Assets/a2.png";

const About = () => {
  const decoreUpperText = {
    display: "flex",
    marginTop: "152px",
    padding: "47px",
    paddingBottom: "0px",
  };
  const UpperText1Css = {
    paddingLeft: "50px",
    width: "600px",
    flex: "1",
  };

  const UpperText2Css = {
    width: "559px",
    height: "232px",
    color: "#00000080",
    fontSize: "24px",
    textAlign: "left",
    paddingLeft: "150px",
    flex: "1",
  };
  const messageFromTheCEO = {
    width: "902px",
    height: "176px",
    fontSize: "36px",
    marginTop: "86px",
    fontWeight: "600",
  };
  const whatWeDoList = {
    textAlign: "left",
    width: "280px",
    fontSize: "24px",
    fontWeight: "400",
  };

  const itemData = [
    {
      img: require("../Assets/a11.png"),
      title: "Aabid Hasan",
      author: "Co-Founder & Designer",
      fontSize: "18px",
      fontWeight: "500",
    },
    {
      img: require("../Assets/a11.png"),
      title: "Bibek Tajpuriya",
      author: "Co-Founder & Developer",
    },
    {
      img: require("../Assets/a11.png"),
      title: "Lorem Ipsum",
      author: "Coming Soon",
    },
  ];

  const letsTalkCss = {
    fontSize: "36px",
    color: "white",
    paddingTop: "28px",
  };

  const mainContainer = {
    position: "relative",
    width: "100%",
    height: "100vh",
    overFlow: "auto",
    scrollSanpType: "y mandatory",
  };

  const Container = styled.div`
    position: relative;
    overflow: hidden;
    width: 100%;
    height: 400px;
  `;
  const CarouselUI = ({ children }) => <Container>{children}</Container>;
  const Carousel = makeCarousel(CarouselUI);


  


  return (
    <React.Fragment>
      <NavBar />
      <div style={{ maxWidth: "1440px" }}>
        <MediaQuery minWidth={1440}>
          <div style={(mainContainer, { fontFamily: "inter" })}>
            <div className="UpperText" style={decoreUpperText}>
              <div className="UpperText1" style={UpperText1Css}>
                <h1 style={{ fontSize: "48px", fontWeight: "600" }}>
                  Specialized in building <br /> Visual Identity
                </h1>
              </div>
              <div className="UpperText2" style={UpperText2Css}>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Enim
                  donec sit dictumst sed felis massa vulputate sed. Odio massa
                  adipiscing amet nibh sagittis. Praesent accumsan pulvinar mus
                  id. Mi enim vitae, elementum at tempus scelerisque.
                  Pellentesque in suspendisse urna sollicitudin. Mauris
                  tincidunt aliquet ornare posuere.
                </p>
              </div>
            </div>

            {/**image block */}
            <div style={{ padding: "47px" }}>
              <img
                src={img2}
                alt=""
                style={{
                  paddingRight: "11px",
                  width: "811.27px",
                  height: "370px",
                }}
              />
              <img
                src={img1}
                alt=""
                style={{
                  paddingLeft: "10.29px",
                  width: "512.04px",
                  height: "370px",
                }}
              />
            </div>

            <center>
              <div style={messageFromTheCEO}>
                <p>
                  “You guys literally unlocked and inspired us about what was
                  possible. When I look at this brand, I suddenly realised
                  everything I’ve been trying to say, now we have a way to
                  express it.”
                </p>
              </div>
              <p style={{ color: "#00000099", fontSize: "24px" }}>
                Alwazebrand, CEO, Aabid Hasan
              </p>
            </center>

            <center>
              <div style={{ marginTop: "150px" }}>
                <h
                  style={{
                    fontSize: "36px",
                    fontWeight: "500",
                    color: "#000000E5",
                    width: "100%",
                  }}
                >
                  What we do
                </h>

                <div
                  style={{
                    display: "flex",
                    padding: "0% 25% 0% 25%",
                    marginTop: "56px",
                  }}
                >
                  <ul
                    style={{
                      paddingRight: "145px",
                      marginTop: "24px",
                      textAlign: "left",
                    }}
                  >
                    <h style={{ fontSize: "48px", fontWeight: "600" }}>
                      Design
                    </h>
                    <div style={whatWeDoList}>
                      <p>Visual identity</p>
                      <p>Visual identity - Rebrand</p>
                      <p>Digital identity</p>
                      <p>Packaging design</p>
                    </div>
                  </ul>

                  <ul
                    style={{
                      paddingRight: "145px",
                      marginTop: "24px",
                      textAlign: "left",
                    }}
                  >
                    <h style={{ fontSize: "48px", fontWeight: "600" }}>
                      Development
                    </h>
                    <div style={whatWeDoList}>
                      <p>Website - General</p>
                      <p>Website - News Portal</p>
                      <p>Website UI/UX</p>
                      <p>Application UI/UX</p>
                    </div>
                  </ul>
                </div>
              </div>
            </center>

            {/**who we are */}
            <div style={{ paddingLeft: "125px", paddingRight: "125px" }}>
              <center>
                <h style={{ fontSize: "36px", fontWeight: "500" }}>
                  Who we are
                </h>
              </center>

              <ImageList
                sx={{ width: "100%", height: 600 }}
                cols={3}
                rowHeight={480}
                gap={32}
                style={{ marginTop: "58px" }}
              >
                {itemData.map((item) => (
                  <ImageListItem key={item.img}>
                    <img
                      src={`${item.img}?w=164&h=164&fit=crop&auto=format`}
                      srcSet={`${item.img}?w=164&h=164&fit=crop&auto=format&dpr=2 2x`}
                      alt={item.title}
                      loading="eager"
                    />
                    <ImageListItemBar
                      title={item.title}
                      subtitle={
                        <span style={{ color: "#00000099", fontSize: "18px" }}>
                          {" "}
                          {item.author}
                        </span>
                      }
                      position="below"
                    />
                  </ImageListItem>
                ))}
              </ImageList>
            </div>

            {/**Footer  */}
            <div
              style={{
                backgroundColor: "black",
                height: "450px",
                position: "absolute",
                width: "100%",

                maxWidth:'1440px'
              }}
            >
              <center style={{ marginTop: "100px" }}>
                <div style={{ width: "829px" }}>
                  <h
                    style={{
                      color: "white",
                      marginTop: "115px",
                      fontSize: "36px",
                    }}
                  >
                    We’re always open for a chat, so get in touch to find out
                    how we can help
                  </h>
                </div>
                <a href="/Contact.jsx" style={letsTalkCss}>
                  Let's Talk{" "}
                </a>
              </center>

              <footer style={{ marginTop: "80px" }}>
                {/**main footer items  */}
                <div className="footer">
                  <div className="footer-left">
                    <p style={{ color: "white" }}>
                      © 2022 Alwazebrand Design Agency.
                    </p>
                  </div>
                  <div className="footer-right">
                    <ul>
                      <a href="/" style={{ color: "white" }}>
                        Instagram
                      </a>
                      <a href="/" style={{ color: "white" }}>
                        LinkedIn
                      </a>
                      <a href="/" style={{ color: "white" }}>
                        Twitter
                      </a>
                    </ul>
                  </div>
                </div>
              </footer>
            </div>
          </div>
        </MediaQuery>
      
</div>

      <MediaQuery maxWidth={1370}>
        <div
          style={{
            overflow: "hidden",
            marginTop: "100px",
            marginRight: "20px",
          }}
        >
          <div className="UpperText">
            <div
              className="UpperText1"
              style={UpperText1Css}
              style={{ margin: "50px 20px" }}
            >
              <h1 style={{ fontSize: "48px" }}>
                Specialized in building <br /> Visual Identity
              </h1>
            </div>
            <div
              className="UpperText2"
              style={{
                color: "#00000080",
                fontSize: "24px",
                paddingLeft: "20px",
                width: "90%",
              }}
            >
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Enim
                donec sit dictumst sed felis massa vulputate sed. Odio massa
                adipiscing amet nibh sagittis. Praesent accumsan pulvinar mus
                id. Mi enim vitae, elementum at tempus scelerisque. Pellentesque
                in suspendisse urna sollicitudin. Mauris tincidunt aliquet
                ornare posuere.
              </p>
            </div>
          </div>
          <div>
            <img
              src={img2}
              alt=".jpeg"
              style={{ padding: "20px", width: "350px", height: "370px" }}
            />
            <img
              src={img1}
              alt=".jpeg"
              style={{ padding: "20px", width: "350px", height: "370px" }}
            />
          </div>

          <h
            style={{
              fontSize: "36px",
              marginLeft: "45px",
              textDecoration: "underline",
            }}
          >
            What we do
          </h>
          <center>
            <div>
              <div>
                <ul style={{ marginTop: "24px", textAlign: "left" }}>
                  <h style={{ fontSize: "48px" }}>Design</h>
                  <div style={whatWeDoList}>
                    <p>Visual identity</p>
                    <p>Visual identity - Rebrand</p>
                    <p>Digital identity</p>
                    <p>Packaging design</p>
                  </div>
                </ul>

                <ul style={{ marginTop: "24px", textAlign: "left" }}>
                  <h style={{ fontSize: "48px" }}>Development</h>
                  <div style={whatWeDoList}>
                    <p>Website - General</p>
                    <p>Website - News Portal</p>
                    <p>Website UI/UX</p>
                    <p>Application UI/UX</p>
                  </div>
                </ul>
              </div>
            </div>
          </center>

          <div
            style={{
              marginTop: "100px",
              overflow: "hidden",
              padding: "0%",
              margin: "0%",
            }}
          >
            <h
              style={{
                fontSize: "36px",
                textDecoration: "underline",
                marginLeft: "45px",
              }}
            >
              Who we are
            </h>

            <ImageList
              sx={{ width: "100%", height: "100%" }}
              cols={3}
              rowHeight={"20%"}
              style={{
                marginTop: "10px",
                gap: "auto",
                padding: "20px",
                gridTemplateColumns: "none",
              }}
            >
              {itemData.map((item) => (
                <ImageListItem key={item.img}>
                  <img
                    src={`${item.img}?w=164&h=164&fit=crop&auto=format`}
                    srcSet={`${item.img}?w=164&h=164&fit=crop&auto=format&dpr=2 2x`}
                    alt={item.title}
                    loading="eager"
                  />
                  <ImageListItemBar
                    title={item.title}
                    subtitle={
                      <span style={{ color: "#00000099", fontSize: "18px" }}>
                        {" "}
                        {item.author}
                      </span>
                    }
                    position="below"
                  />
                </ImageListItem>
              ))}
            </ImageList>
          </div>

          {/**Footer  */}
          <div
            style={{
              backgroundColor: "black",
              height: "450px",
              position: "absolute",
              maxWidth: "1440px",
              
            }}
          >
            <center style={{ marginTop: "100px", width: "100%" }}>
              <div>
                <h
                  style={{
                    color: "white",
                    marginTop: "115px",
                    fontSize: "20px",
                  }}
                >
                  We’re always open for a chat, so get in touch to find out how
                  we can help
                </h>
              </div>
              <a href="/Contact.jsx" style={{ color: "white" }}>
                Let's Talk{" "}
              </a>
            </center>

            <div
              style={{
                marginTop: "200px",
                width: "100%",
                padding: "0%",
                margin: "0%",
                maxWidth:'1440px'
              }}
            >
              {/**main footer items  */}
              <div
                className="footer"
                style={{
                  display: "block",
                  marginTop: "100px",
                  width: "100%",
                }}
              >
                <div
                  className="footer-right"
                  style={{ textAlign: "left", padding: "0%", display: "grid" }}
                >
                  <a href="/" style={{ color: "white" }}>
                    Instagram
                  </a>
                  <a href="/" style={{ color: "white" }}>
                    LinkedIn
                  </a>
                  <a href="/" style={{ color: "white" }}>
                    Twitter
                  </a>
                </div>
                <div className="footer-left" style={{ padding: "0% 10px" }}>
                  <p style={{ color: "white" }}>© 2022 Alwazebrand Design Agency.</p>{" "}
                </div>
              </div>
            </div>
          </div>
        </div>
      </MediaQuery>
      
    </React.Fragment>
  );
};
export default About;
