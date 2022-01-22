import "./card.css";
import React from "react";
import styled from "styled-components";


// Styled components

const InfoCard = styled.div`
  background: ${(props) =>
    props.theme === "dark"
      ? "linear-gradient(to right bottom, #001845, #002855)"
      : "#0077b6"};
`;

const Live = styled.div`
  display: ${(props) => (props.contest === "ongoing" ? "block" : "none")};
  color: ${(props) => (props.theme === "dark" ? "#4ad66d" : "#fcf300")};
`;

// Functional component

export default function Card(props) {
  const theme = props.theme;
  let name = props.name;
  const info = props.info;

  return (
    <>
      {info.map((info) => {
        return (
          <InfoCard theme={theme} contest={props.contest} className="info-card">
            <div className="card-platform">
              {info.site
                ? info.site
                : name.charAt(0).toUpperCase() + name.slice(1)}
              <Live contest={props.contest} theme={theme} className="live">
                Live
              </Live>
            </div>
            <div className="card-title">{info.name}</div>
            <div className="card-start-time">
              Start time :{" "}
              {info.start_time.slice(0, 10) +
                " , " +
                info.start_time.slice(11, 16)}
            </div>
            <div className="card-end-time">
              End time :{" "}
              {info.end_time.slice(0, 10) + " , " + info.end_time.slice(11, 16)}
            </div>
            <button className="register-button">
              <span className="register-button-name">
                <a href={info.url} target="_blank" rel="noopener noreferrer">
                  Register
                </a>
              </span>
            </button>
          </InfoCard>
        );
      })}
    </>
  );
}
