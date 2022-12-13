import React, { useState } from "react";
import "../CSS/Insight.css";
import MediaQuery from "react-responsive";
import axios from "axios";
import { useEffect } from "react";

/* Importing image */
import img1 from "../Assets/11.png";
import img2 from "../Assets/13.png";
import img3 from "../Assets/14.png";
import img4 from "../Assets/12.png";
import img5 from "../Assets/16.png";
import img6 from "../Assets/15.png";
import NavBar from "../Components/NavBar";
import Footer from "../Components/Footer";

const Insights = () => {
  const Card = ({ imageurl, link, title }) => {
    return (
      <div className="card">
        <div className="imgBx">
          <a href={link}>
            <img src={imageurl} style={{ width: 423, height: 400 }} alt="aa" />
          </a>
          <h2>{title}</h2>
        </div>
      </div>
    );
  };

  const renderAllCards = () => {
    if (!articles) {
      return;
    }
    let result = [];
    for (let i = 0; i < articles.length; i++) {
      result.push(rendercard(articles[i]));
    }
    return result;
  };

  const rendercard = (article) => {
    return (
      <Card imageurl={article.cover_image} title={article.title} link={"/"} />
    );
  };

  const [articles, setArticles] = useState(null);

  useEffect(() => {
    fetchArticles();
  }, []);

  const fetchArticles = () => {
    const options = { method: "GET", url: "/article" };
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
    <>
      <NavBar />
      {/***MedaiQuery */}
      <MediaQuery minWidth={1440}>
        <div style={{ maxWidth: "1440px" }}>
          <div className="Insights">
            <p>Insights</p>
          </div>
          <div className="filter">
            <a href>All</a>
            <a href>Process</a>
            <a href>Article</a>
          </div>
          <div className="container">
            <center style={{ display: "flex", flexWrap: "wrap" }}>
              {renderAllCards()}
            </center>
          </div>

          <div className="work-talk">
            <p>
              Interested in working with us?{" "}
              <a href="/Contact.jsx">Let’s Talk</a>
            </p>
          </div>
          <Footer />
        </div>
      </MediaQuery>
      {/******************for mobile phone********************* */}
      <MediaQuery maxWidth={1400}>
        {(matches) =>
          matches ? (
            <>
              <div>
                <div className="Insights" style={{ marginTop: "200px" }}>
                  <p>Insights</p>
                </div>
                <div className="filter" style={{ marginLeft: "0" }}>
                  <a href>All</a>
                  <a href>Process</a>
                  <a href>Article</a>
                </div>

                <div
                  className="container"
                  style={{ margin: "0%", width: "100%" }}
                >
                  <div className="card">
                    <div className="imgBx">
                      <a href="/Insightsprocess.jsx">
                        <img
                          src={img1}
                          style={{ width: "100%", height: "100%" }}
                          alt="aa"
                        />
                      </a>
                      <h4>
                        Sed mi in in vel dolor lectus libero sit dolor nulla.
                      </h4>
                    </div>
                  </div>
                  <div className="card">
                    <div className="imgBx">
                      <a href="/Insightsprocess.jsx">
                        <img
                          src={img4}
                          style={{ width: "100%", height: "100%" }}
                          alt="aa"
                        />
                      </a>
                      <h4>
                        Sed mi in in vel dolor lectus libero sit dolor nulla.{" "}
                      </h4>
                    </div>
                  </div>

                  <div className="card">
                    <div className="imgBx">
                      <a href="/Insightsprocess.jsx">
                        <img
                          src={img2}
                          style={{ width: "100%", height: "100%" }}
                          alt="aa"
                        />
                      </a>
                      <h4>
                        Sed mi in in vel dolor lectus libero sit dolor nulla.{" "}
                      </h4>
                    </div>
                  </div>

                  <div className="card">
                    <div className="imgBx">
                      <a href="/Insightsprocess.jsx">
                        <img
                          src={img3}
                          style={{ width: "100%", height: "100%" }}
                          alt="aa"
                        />
                      </a>
                      <h4>
                        Sed mi in in vel dolor lectus libero sit dolor nulla.
                      </h4>
                    </div>
                  </div>

                  <div className="card">
                    <div className="imgBx">
                      <a href="/Insightsprocess.jsx">
                        <img
                          src={img5}
                          style={{ width: "100%", height: "100%" }}
                          alt="aa"
                        />
                      </a>
                      <h4>
                        Sed mi in in vel dolor lectus libero sit dolor nulla.{" "}
                      </h4>
                    </div>
                  </div>
                  <div className="card">
                    <div className="imgBx">
                      <a href="/Insightsprocess.jsx">
                        <img
                          src={img6}
                          style={{ width: "100%", height: "100%" }}
                          alt="aa"
                        />
                      </a>
                      <h4>
                        Sed mi in in vel dolor lectus libero sit dolor nulla.{" "}
                      </h4>
                    </div>
                  </div>
                </div>

                <div className="work-talk" style={{ width: "100%" }}>
                  <p>
                    Interested in working with us?{" "}
                    <a href="/Contact.jsx">Let’s Talk</a>
                  </p>
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
                    style={{
                      textAlign: "left",
                      padding: "0%",
                      display: "grid",
                    }}
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
              </div>
            </>
          ) : (
            <></>
          )
        }
      </MediaQuery>

      {/******************for ipad********************* */}
    </>
  );
};
export default Insights;
