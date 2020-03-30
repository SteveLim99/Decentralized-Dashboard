import React, { Component } from "react";
import { Button } from "react-bootstrap";
import { Header } from "../components/Header";
import styled from "styled-components";

const Styles = styled.div`
  .menuCardsRow {
    width: 80%;
    max-width: 800px;
    margin: 50px auto;
    margin-top: -100px;
    display: flex;
  }

  .menuCards {
    background: white;
    box-shadow: 0px 10px 10px -7px grey;
    width: 30%;
    height: auto;
    margin: 0 2%;
    padding: 30px;
    transition: all 1s;
    cursor: pointer;
    text-align: center;
    font-size: large;
  }

  .menuCards:hover {
    box-shadow: 20px 20px 20px -10px dimgrey;
  }

  img {
    max-width: 80%;
    max-height: 80%;
  }

  .footerText {
    text-align: center;
    font-size: small;
  }
`;

export const Home = () => (
  <Styles>
    <div>
      <Header title="ArchiLens" />
      <div className="menuCardsRow">
        <div
          className="menuCards"
          onClick={() => {
            window.location.href = "/documents";
          }}
        >
          <img src={require("../images/docs.png")} />
          <div className="menuLabels">Documents List</div>
        </div>
        <div
          className="menuCards"
          onClick={() => {
            window.location.href = "/search";
          }}
        >
          <img src={require("../images/search.png")} />
          <div className="menuLabels">Advance search</div>
        </div>
        <div
          className="menuCards"
          onClick={() => {
            window.location.href = "/upload";
          }}
        >
          <img src={require("../images/upload.png")} />
          <div className="menuLabels">Upload</div>
        </div>
      </div>
      <p className="footerText">
        Find out More:{" "}
        <a href="http://students.cs.ucl.ac.uk/2019/group38/index.html">
          http://students.cs.ucl.ac.uk/2019/group38/index.html
        </a>
      </p>
    </div>
  </Styles>
);
