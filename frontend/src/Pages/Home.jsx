import React, {useState} from "react";
import MediaQuery from "react-responsive";
import Footer from "../Components/Footer";
import "../CSS/homeNav.css";
import "../Script/homeNav";
import axios from "axios";
import { useEffect } from "react";

/**importing image */
import Image from "../Assets/unsplash_Sc5RKXLBjGg.png";
import Image1 from "../Assets/unsplash_15l8es2DS08.jpg";
import Image2 from "../Assets/unsplash_YFXQeyKuf8c.png";
import logo from "../Assets/whiteLogo.png";


const Home = () => {
  const color = {
    color: "black",
    fontSize: "24px",
    
  };
 
  const setColorPara = {
    color: "#767676",
    marginTop: "-10px",
    fontSize: "18px",
  };
  const setImageSize = {
    width: "655.5px",
    height: "400px",
  };



  const backgroundImage = {
    height: "590px",
    width: "100%",
  };

  const backgroundImageSet = {
    backgroundImage: `url(${require("../Assets/unsplash_Sc5RKXLBjGg.png")})`,
    height: "590px", 
  };

  const textDecoration = {
    textDecoration: "none",
  };
  const Product = ({ imageurl, link, title, heading }) => {
    return (
      <a href={link} style={textDecoration}>
        <div className="Product">
          <div className="ProductImg">
            <img style={setImageSize} src={imageurl} alt=".jpeg" />
          </div>
          <div
            className="ProductText"
            style={{ marginTop: "20px", textAlign: "left", padding: "0% 10px" }}
          >
            <h1
              style={{
                color: "black",
                fontWeight: "500",
                color: "#000000E5",
                fontSize: "18px",
              }}
            >
              {heading}
            </h1>
            <p style={setColorPara}>{title}</p>
          </div>
        </div>
      </a>
    );
  };

  const renderAllProduct = () => {
    if (!articles) {
      return;
    }
    let result = [];
    for (let i = 0; i < 2; i++) {
      result.push(renderProduct(articles[i]));
    }
    return result;
  };

  const renderProduct = (article) => {
    return (
      <Product
        imageurl={article.cover_image}
        title={article.title}
        heading={article.headline}
        link={"/"}
      />
    );
  };

  const [articles, setArticles] = useState(null);

  useEffect(() => {
    fetchProduct();
  }, []);

  const fetchProduct = () => {
    const options = { method: "GET", url: "/work" };
    axios
      .request(options)
      .then(function (response) {
        console.log(response.data);
        setArticles(response.data);
      })
      .catch(function (error) {
        console.error(error);
      });
  };


 

  return (
    <React.Fragment>
      <div style={{ fontFamily: "inter", maxWidth: "1440px" }} className="section">
        {/********************************mediaQueary************* */}

        <MediaQuery minWidth={1440}>
        
          <div style={backgroundImageSet } >
            <div className="nav" id="nav" style={{ background: "#00000080" }}>
              <input type="checkbox" id="nav-check" />
              <div className="nav-header">
                <div className="nav-title">
                  <a href="/">
                    {" "}
                    <img src={logo} alt=".logo" />{" "}
                  </a>
                </div>
              </div>
              <div className="nav-btn nav-scrolled">
                <label htmlFor="nav-check">
                  <span />
                  <span />
                  <span />
                </label>
              </div>
              <div className="nav-links coloreffectnav">
                <a href="/Work.jsx" style={{color:'#fff'}}>Work</a>
                <a href="/Insights.jsx" style={{color:'#fff'}}>Insighs</a>
                <a href="/About.jsx" style={{color:'#fff'}}>About</a>
                <a href="/Contact.jsx" style={{color:'#fff'}}>Contact</a>
              </div>
            </div>

            {/***************************************************************** */}
            
              <div
                style={{ textAlign: "center" }}
                className="section-2"
              >
                <div
                  style={{
                      
                    width: "100%",
                    height: " 116px",
                    fontSize: "48px",
                    fontWeight: "600",
                    color:'#fff',
                    }}
                    className="section-2"
                >
                  <p style={{ padding: "190px 231px" }}>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Laoreet egestas
                  </p>
                </div>
                <div
                  style={{
                    width: "100%",
                    height: "44px",
                    fontSize: "36px",
                    fontWeight: "400px",
                    margin: "220px 22px",
                  }}
                >
                  <a style={{ color: "#fff" }} href="/Work.jsx">
                    See Work
                  </a>
                </div>
              </div>
            </div>
          
{/***************************************************************888 */}
          <div>
            <div
              className="messageBlock"
              style={{ marginTop: "106px", textAlign: "center" }}
            >
                
              <p style={color}>
                We make Stunning Visual identity and <br />
                websites to our potential clients. 
                <a href="/Contact.jsx" style={color}>
                    Let's Talk
                </a>
              </p>
             
            </div>
          </div>
          
          <div >
              
            <div className="caseStudyBlock" style={{ Maxwidth: "100%", marginTop:'110px' }}>
            
              <h1
                style={{
                  fontWeight: "600",
                  textAlign: "left",
                  padding: "0 50px",
                }}
              >
                Effective Case Study
              </h1>

              <div
                className="firstRow"
                style={{ padding: "0 50px", display: "flex" }}
              >
                 
               {renderAllProduct()}
                
              </div>
              

             
                <div className="seeMoreBanner" style={{ textAlign: "center" }}>
                    <a href="/Work.jsx" style={color}>
                    <h2>See More Case Study</h2>
                    </a>
                </div>
              
            </div>
            
            <Footer />
          </div>
          
        </MediaQuery>
        </div>
        <MediaQuery maxWidth={1224}>
          {(matches) =>
            matches ? (
              <>
                <div style={backgroundImage}>
                  <div className="nav" id="nav" style={{ background: "#000" }}>
                    <input type="checkbox" id="nav-check" />
                    <div className="nav-header">
                      <div className="nav-title" style={{ margin: "-30px" }}>
                        <a href="/">
                          {" "}
                          <img src={logo} alt=".logo" />{" "}
                        </a>
                      </div>
                    </div>
                    <div className="nav-btn">
                      <label htmlFor="nav-check">
                        <span />
                        <span />
                        <span />
                      </label>
                    </div>
                    <div className="nav-links coloreffectnav">
                      <a href="/Work.jsx">Work</a>
                      <a href="/Insights.jsx">Insighs</a>
                      <a href="/About.jsx">About</a>
                      <a href="/Contact.jsx">Contact</a>
                    </div>
                  </div>
                  <img
                    src={Image}
                    alt=""
                    style={{ opacity: "1", width: "100%", height: "100%" }}
                  />

                  <center>
                    <div style={{ marginTop: "-100%", color: "white" }}>
                      <div
                        style={{
                          width: "100%",
                          height: " 100%",
                          fontSize: "24px",
                          fontWeight: "600",
                        }}
                      >
                        <p style={{ padding: "10px" }}>
                          Lorem ipsum dolor sit amet, consectetur adipiscing
                          elit. Laoreet egestas
                        </p>
                      </div>
                      <div
                        style={{
                          width: "100%",
                          height: "44px",
                          fontSize: "36px",
                          fontWeight: "400px",
                        }}
                      >
                        <a style={{ color: "white" }} href="/Work.jsx">
                          {" "}
                          See Work
                        </a>
                      </div>
                    </div>
                  </center>
                </div>

                <div
                  className="messageBlock"
                  style={{ marginTop: "50px", padding: "10px" }}
                >
                  <p style={color}>
                    We make Stunning Visual identity and websites
                    to our potential clients.
                    <br />
                    <a href="/Contact.jsx" style={color}>
                      {" "}
                      Let's Talk
                    </a>
                  </p>
                </div>

                <div className="caseStudyBlock">
                  <h1 style={{ padding: "10px" }}>Effective Case Study</h1>
                  <div className="firstRow">
                    <a
                      href="/Insightsprocess.jsx"
                      style={{ textDecoration: "none" }}
                    >
                      <div
                        className="firstRowFirstProduct"
                        style={{ padding: "10px" }}
                      >
                        <div
                          className="firstRowFirstProductImg"
                          style={(setImageSize, { height: "auto" })}
                        >
                          <img
                            src={Image1}
                            alt=".jpeg"
                            style={{ width: "100%" }}
                          />
                        </div>
                        <div
                          className="firstRowFirstProductText"
                          style={{ textAlign: "left" }}
                        >
                          <h5 style={{ color: "black" }}>Guy Hawkins</h5>
                          <p style={setColorPara}>
                            2715 Ash Dr. San Jose, South Dakota 83475
                          </p>
                        </div>
                      </div>
                    </a>
                    <a
                      href="/Insightsprocess.jsx"
                      style={{ textDecoration: "none" }}
                    >
                      <div
                        className="firstRowSecondProduct"
                        style={{ padding: "10px" }}
                      >
                        <div
                          className="firstRowSecondProductImg"
                          style={(setImageSize, { height: "auto" })}
                        >
                          <a href="/Insightsprocess.jsx">
                            <img
                              src={Image2}
                              alt=".jpeg"
                              style={{ width: "100%" }}
                            />
                          </a>
                        </div>

                        <div
                          className="firstRowSecondProductText"
                          style={{ textAlign: "left" }}
                        >
                          <h5 style={{ color: "black" }}>Guy Hawkins</h5>
                          <p style={setColorPara}>
                            2715 Ash Dr. San Jose, South Dakota 83475
                          </p>
                        </div>
                      </div>
                    </a>
                  </div>
                </div>

                <div className="seeMoreBanner">
                  <center>
                    <a href="/Work.jsx" style={color}>
                      <h2>See More Case Study</h2>
                    </a>
                  </center>
                </div>

                {/***footer */}
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
                    style={{ textAlign: "left", padding: "0%", display:'grid' }}
                  >
                    
                     
                        <a href="/" style={{ color: "black" }}>
                          Instagram
                        </a>
                        <a href="/" style={{ color: "black" }}>
                          LinkedIn
                        </a>
                        <a href="/" style={{ color: "black" }}>
                          Twitter
                        </a>
                      
                    
                  </div>
                  <div className="footer-left" style={{ padding: "0% 10px" }}>
                   
                   <p style={{ color: "black" }}>
                     ©Alwazebrand Design Agency.
                   </p>{" "}
                 
               </div>
                </div>
              </>
            ) : (
              <></>
            )
          }
        </MediaQuery>
      
    </React.Fragment>
  );
};
export default Home;
