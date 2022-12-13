import React from "react";
import Footer from "../Components/Footer";
import NavBar from "../Components/NavBar";
import "../CSS/insightin.css";
import img from "../Assets/insightesP.png";
import img1 from "../Assets/14.png";
import img2 from "../Assets/15.png";
import img3 from "../Assets/16.png";
import "../CSS/NavBarAndFooter.css";

const Insightsprocess = () => {
  return (
    <>
      <div style={{ maxWidth: "1440px" }}>
        <NavBar />

        <HeadingText />
        <Discription />
        <InsightesprocessImg />

        <div className="bottom-text">
          <div className="challenge">
            <h3>The Challenge</h3>
            <p>
              With a talented team in place, they eschewed traditional
              development processes and instead, worked tightly with their
              artists, connecting them with the right audiences across multiple
              formats to tell the best story possible. Their current brand
              didn’t capture this unique energy and ambition, and due to the
              broad nature of their projects, they had difficulty articulating
              clearly what they offered to the world.
            </p>
          </div>
          <div className="Conclusion">
            <h3>Conclusion</h3>
            <p>
              {" "}
              We worked between our London and North American studios, running
              remote stakeholder interviews and Miro workshops to understand the
              full extent of the challenge. Throughout our immersion, we
              unearthed the value placed on their unique collaborative process
              and the intention to create work with real emotional depth and
              integrity. From this, we created a strategic framework that let
              them emphasise the importance of their artists, ideas and
              intentions, both externally and internally.
            </p>
          </div>
        </div>

        <SimilarText />
        <div className="container">
          <div className="card">
            <div className="imgBx">
              <a href="#">
                <img src={img1} alt="aa" />
              </a>
              <h2>Sed mi in in vel dolor lectus libero sit dolor nulla.</h2>
            </div>
          </div>
          <div className="card">
            <div className="imgBx">
              <a href="#">
                <img src={img2} alt="aa" />
              </a>
              <h2>Sed mi in in vel dolor lectus libero sit dolor nulla. </h2>
            </div>
          </div>
          <div className="card">
            <div className="imgBx">
              <a href="#">
                <img src={img3} alt="aa" />
              </a>
              <h2>Sed mi in in vel dolor lectus libero sit dolor nulla. </h2>
            </div>
          </div>
        </div>

        <div className="work-talk">
          <p>
            Interested in working with us? <a href="/Contact.jsx">Let’s Talk</a>
          </p>
          <a href> </a>
        </div>

        {/********************************************/}
       <Footer/>
      </div>
    </>
  );

  function Discription({}) {
    return (
      <div className="Discri">
        <p>
          There are many reasons why an idea doesn’t get chosen, or in some
          instances, why a client might decide to change direction. However
          tough to take, these difficult decisions are a natural part of a
          rebranding process and as result, there are many interesting ideas
          that will inevitably fall by the wayside. At DesignStudio, we’re keen
          to shed light on some of those forgotten ideas, so we’ve decided to
          start a new series highlighting some of our favourite projects and
          concepts that, for one reason or another, didn’t get to see the light
          of day.
        </p>
      </div>
    );
  }
  function HeadingText({}) {
    return (
      <div className="HeadingText">
        <div className="Process">
          <p>Process</p>
        </div>
        <div className="top-text">
          <div className="Heading">
            <p>Sed mi in in vel dolor lectus libero dolor nulla.</p>
          </div>
          <div className="Name-date">
            <p> By Author Name - 2/16/2021</p>
          </div>
        </div>
      </div>
    );
  }
  function InsightesprocessImg({}) {
    return (
      <div className="img">
        <img src={img} />
      </div>
    );
  }
  function SimilarText({}) {
    return (
      <div className="Insights">
        <p>Similar Insights</p>
      </div>
    );
  }
};
export default Insightsprocess;
