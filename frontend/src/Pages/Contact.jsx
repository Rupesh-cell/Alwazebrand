import React from "react";
import "../CSS/Contact.css";
import NavBar from "../Components/NavBar";
import "../Script/contact.js";
import img from "../Assets/contact.png";
import Footer from "../Components/Footer";
import axios from "axios";
import MediaQuery from "react-responsive";
import { useState } from "react";
import { useEffect } from "react";

const Contact = () => {
  useEffect(() => {}, []);
  return (
    <>
      <NavBar />
      <MediaQuery minWidth={1440}>
        <div style={{ padding: "0% 3%" }}>
          <HeyInterested />
          <ContactImage />
          <ContactDetails />
          <FormConatct />

          <Footer />
        </div>
      </MediaQuery>

      <MediaQuery maxWidth={1300}>
        <div
          style={{ marginTop: "100px", padding: "25px", overflow: "hidden" }}
        >
          <div className="Hey" style={{ display: "block", marginTop: "auto" }}>
            <div
              className="H"
              style={{ padding: "0%", margin: "0%", width: "100%" }}
            >
              <p>Hey there,</p>
            </div>
            <div
              className="Intrested"
              style={{ width: "90%", fontSize: "20px", height: "auto" }}
            >
              <p>
                Interested in partnering with us? We love to hear from ambitious
                clients; what you’re looking to achieve and how we can add
                value.
              </p>
            </div>
          </div>

          <div
            className="image"
            style={{ padding: "0", margin: "0%", height: "0", width: "100%" }}
          >
            <img src={img} style={{ width: "100%" }} />
          </div>

          <div className="lw-txt" style={{ display: "block", marginLeft: "0" }}>
            <div style={{ width: "100%" }}>
              <div>
                <div className="details">
                  <div style={{ fontSize: 36, width: "350px" }}>
                    Contact Info
                  </div>
                  <div className="info" style={{ width: "350px" }}>
                    <p>
                      +977 9816071322
                      <br />
                      +977 9811022878
                    </p>
                    <div className="underline">
                      <p>
                        Maitidevi, Kathmandu, Nepal
                        <br />
                        hello@alwazebrand.com
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="h">
                <div style={{ fontSize: 36 }}>Send a Message</div>

                <div
                  className="det"
                  style={{
                    width: "300px",
                    height: "150px",
                    margin: "0%",
                    padding: "0%",
                  }}
                >
                  <p>
                    Interested in partnering with us? We love to hear from
                    ambitious clients; what you’re looking to achieve and how we
                    can add value.
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div
            className="Form-fill"
            style={{ marginLeft: "0", padding: "0%", paddingRight: "10px" }}
          >
            <form
              name="RegForm"
              action="/"
              onsubmit="return GO ()"
              method="post"
            >
              <div className="Name" style={{ display: "block" }}>
                <div className="fo">
                  First Name* <br />
                  <br />
                  <input
                    className="fc"
                    type="text"
                    name="FName"
                    style={{ width: "100%" }}
                  />
                </div>
                <br />
                <div className="l">
                  {" "}
                  Last Name* <br />
                  <br />
                  <input
                    className="fd"
                    type="text"
                    name="LName"
                    style={{ width: "100%" }}
                  />
                </div>
              </div>
              <br />
              <div>
                Email* <br />
                <br />
                <input
                  className="em"
                  type="text"
                  name="EMail"
                  style={{ width: "100%" }}
                />
              </div>
              <br />
              <div>
                Phone <br />
                <br />
                <input
                  className="num"
                  type="text"
                  name="fNumber"
                  style={{ width: "100%" }}
                />
              </div>
              <p>
                How did you find us?
                <br />
                <br />
                <label>
                  <input
                    className="find"
                    list="Medias"
                    name="myMedia"
                    size={50}
                    style={{ width: "100%" }}
                  />
                </label>
                <datalist id="Medias" style={{ width: "100%" }}>
                  <option value="Instagram" />
                  <option value="FaceBook" />
                  <option value="LinkedIn" />
                  <option value="Google" />
                  <option value="Articles" />
                  <option value="Word of Mouth" />
                  <option value="Others" />
                </datalist>
              </p>
              <p>
                Which Industry do you Work in?
                <br />
                <br />
                <label>
                  <input
                    className="ind"
                    list="Work"
                    name="Work"
                    size={50}
                    style={{ width: "100%" }}
                  />
                </label>
                <datalist id="Work">
                  <option value="Technology" />
                  <option value="Non-profit" />
                  <option value="Consumer" />
                  <option value="Real-Estate" />
                  <option value="Government" />
                  <option value="B2B" />
                  <option value="Others" />
                </datalist>
              </p>
              <p>
                Message: <br />
                <br />{" "}
                <textarea
                  className="txta"
                  name="Message"
                  defaultValue={" "}
                  style={{ width: "100%" }}
                />
              </p>
              <button className="btn">Send Message</button>
            </form>
          </div>

          {/**** Footer */}
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
              <a href="/" style={{ color: "black" }} target="_blank">
                Instagram
              </a>
              <a href="/" style={{ color: "black" }} target="_blank">
                LinkedIn
              </a>
              <a href="/" style={{ color: "black" }} target="_blank">
                Twitter
              </a>
            </div>
            <div className="footer-left" style={{ padding: "0% 10px" }}>
              <p style={{ color: "black" }}>©Alwazebrand Design Agency.</p>{" "}
            </div>
          </div>
        </div>
      </MediaQuery>
    </>
  );

  function ContactDetails({}) {
    return (
      <div className="lw-txt">
        <div className="h">
          <div style={{ fontSize: 64 }}>Send a Message</div>
          <div className="det">
            <p>
              Interested in partnering with us? We love to hear from ambitious
              clients; what you’re looking to achieve and how we can add value.`
            </p>
          </div>
        </div>
        <div className="details">
          <div style={{ fontSize: 64 }}>Contact Info</div>
          <div className="info">
            <p>
              +977 9816071322
              <br />
              +977 9811022878
            </p>
            <div className="underline">
              <p>
                Maitidevi, Kathmandu, Nepal
                <br />
                hello@alwazebrand.com
              </p>
            </div>
          </div>
        </div>
      </div>
    );
  }
  function HeyInterested({}) {
    return (
      <div className="Hey">
        <div className="H">
          <p>Hey there,</p>
        </div>
        <div className="Intrested">
          <p>
            Interested in partnering with us? We love to hear from ambitious
            clients; what you’re looking to achieve and how we can add value.
          </p>
        </div>
      </div>
    );
  }
  function ContactImage({}) {
    return (
      <div className="image">
        <img src={img} />
      </div>
    );
  }
};
export default Contact;

function FormConatct({}) {
  const [firstname, setFirstname] = useState("");
  const [lastname, setlastname] = useState("");
  const [email, setEmail] = useState("");
  const [number, setNumber] = useState("");
  const [findus, setFindus] = useState("");
  const [workin, setWorkin] = useState("");
  const [message, setMessage] = useState("");

  const updatefirstName = (event) => {
    setFirstname(event.target.value);
  };

  const updatelastName = (event) => {
    setlastname(event.target.value);
  };

  const updateEmail = (event) => {
    setEmail(event.target.value);
  };

  const updateNumber = (event) => {
    setNumber(event.target.value);
  };

  const updateFindus = (event) => {
    setFindus(event.target.value);
  };

  const updateWorkin = (event) => {
    setWorkin(event.target.value);
  };

  const updateMessage = (event) => {
    setMessage(event.target.value);
  };

  const postDetails = (event) => {
      event.preventDefault();
    const options = {
      method: "POST",
      url: "/message/",
      headers: { "Content-Type": "application/json" },
      data: {
        first_name: firstname,
        last_name: lastname,
        email: email,
        phone: number,
        find_us: findus,
        work_industry: workin,
        message: message,
      },
    };

    axios
      .request(options)
      .then(function (response) {
        console.log(response.data);
      })
      .catch(function (error) {
        console.error(error);
      });
  };

  return (
    <div className="Form-fill">
      <form onSubmit={postDetails} >
        <div className="Name">
          <div className="f">
            First Name * <br />
            <br />
            <input
              value={firstname}
              onChange={updatefirstName}
              className="fc"
              type="text"
              name="FName"
              placeholder="First Name"
              required
            />
          </div>
          <div className="l">
            {" "}
            Last Name * <br />
            <br />
            <input
              value={lastname}
              onChange= {updatelastName}
              className="fd"
              type="text"
              name="LName"
              placeholder="Last Name"
            />
          </div>
        </div>
        <br />
        <div>
          Email * <br />
          <br />
          <input
            value={email}
            onChange={updateEmail}
            className="em"
            type="text"
            name="EMail"
            placeholder="email@email.com"
          />
        </div>
        <br />
        <div>
          Phone <br />
          <br />
          <input
            value={number}
            onChange={updateNumber}
            className="num"
            type="text"
            name="fNumber"
            placeholder="+977 9876543210"
          />
        </div>
        <div>
          <br />
          <br />
          <label htmlFor="find">
            How did you find us?
            <br />
            <br />
          </label>
          <div className="find">
            <select className="op" name="find" value = {findus} onChange = {updateFindus}>
                
              <option value  selected>
                Select your option
              </option>
              <option value="Instagram">Instagram</option>
              <option value="FaceBook">FaceBook</option>
              <option value="LinkedIn">LinkedIn</option>
              <option value="Google">Google</option>
              <option value="Articles">Articles</option>
              <option value="Word of Mouth">Word of Mouth</option>
              <option value="Others">Others</option>
            </select>
          </div>

          <div>
            <br />
            <br />
          </div>

          <label htmlFor="ind">
            Which Industry do you Work in?
            <br />
            <br />
          </label>
          <div className="ind">
            <select className="Work" name="ind" value={workin} onChange={updateWorkin}>
              <option value  selected>
                Select your option
              </option>
              <option value="Technology">Technology</option>
              <option value="Non-profit">Non-profit</option>
              <option value="Consumer">Consumer</option>
              <option value="Real-Estate">Real-Estate</option>
              <option value="Government">Government</option>
              <option value="B2B">B2B</option>
              <option value="Others">Others</option>
            </select>
          </div>
        </div>

        <br />
        <p>
          Message: <br />
          <br />{" "}
          <textarea
            className="txta"
            name="Message"
            defaultValue={" "}
            placeholder="How can we help you?"
            value={message}
            onChange={updateMessage}
          />
        </p>
        <button className="btn">
          Send Message
        </button>
      </form>
    </div>
  );
}
