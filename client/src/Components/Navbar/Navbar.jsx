import React, { useState } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import "./navbar.css";

const NavLink = styled(Link)`
  color: ${(props) => (props.theme === "dark" ? "#fff" : "#0d3b66")};
  text-decoration: none;
`;

const CpSpan = styled.span`
  color: ${(props) => (props.theme === "dark" ? "#48cae4" : "#ef476f")};
`;

export default function Navbar(props) {
  const [toggle, setToggle] = useState(false);
  const theme = props.theme;
  return (
    <>
      <div className="navbar">
        <div className="title">
          <NavLink to="/home" theme={theme}>
            <CpSpan theme={theme}>CP</CpSpan>
            CALENDAR
          </NavLink>
        </div>
        <div className="list">
          <li className="list-item">
            <NavLink to="/api/all" theme={theme}>
              ALL
            </NavLink>
          </li>
          <li className="list-item">
            <NavLink to="/api/codeforces" theme={theme}>
              CODEFORCES
            </NavLink>
          </li>
          <li className="list-item">
            <NavLink to="/api/codechef" theme={theme}>
              CODECHEF
            </NavLink>
          </li>
          <li className="list-item">
            <NavLink to="/api/leetcode" theme={theme}>
              LEETCODE
            </NavLink>
          </li>
          <li className="list-item">
            <NavLink to="/api/atcoder" theme={theme}>
              ATCODER
            </NavLink>
          </li>
          <li className="list-item">
            <NavLink to="/api/hackerearth" theme={theme}>
              HACKEREARTH
            </NavLink>
          </li>
          <li className="list-item">
            <NavLink to="/api/hackerrank" theme={theme}>
              HACKERRANK
            </NavLink>
          </li>
          <li className="list-item">
            <NavLink to="/api/google" theme={theme}>
              GOOGLE
            </NavLink>
          </li>
          <li className="list-item">
            <NavLink to="/api/topcoder" theme={theme}>
              TOPCODER
            </NavLink>
          </li>
        </div>
        {theme === "dark" ? (
          <i
            onClick={props.ToggleTheme}
            className="fas fa-adjust"
            style={{ cursor: "pointer" }}
          />
        ) : (
          <i
            onClick={props.ToggleTheme}
            className="far fa-moon"
            style={{ cursor: "pointer" }}
          />
        )}
        {!toggle ? (
          <i
            onClick={() => setToggle(!toggle)}
            className="bars fas fa-bars"
          ></i>
        ) : (
          <i
            onClick={() => setToggle(!toggle)}
            className="bars fas fa-times"
          ></i>
        )}
      </div>
      {toggle ? (
        <div className="respNav">
          <li onClick={() => setToggle(false)} className="list-item">
            <NavLink to="/api/all" theme={theme}>
              ALL
            </NavLink>
          </li>
          <li onClick={() => setToggle(false)} className="list-item">
            <NavLink to="/api/codeforces" theme={theme}>
              CODEFORCES
            </NavLink>
          </li>
          <li onClick={() => setToggle(false)} className="list-item">
            <NavLink to="/api/codechef" theme={theme}>
              CODECHEF
            </NavLink>
          </li>
          <li onClick={() => setToggle(false)} className="list-item">
            <NavLink to="/api/leetcode" theme={theme}>
              LEETCODE
            </NavLink>
          </li>
          <li onClick={() => setToggle(false)} className="list-item">
            <NavLink to="/api/atcoder" theme={theme}>
              ATCODER
            </NavLink>
          </li>
          <li onClick={() => setToggle(false)} className="list-item">
            <NavLink to="/api/hackerearth" theme={theme}>
              HACKEREARTH
            </NavLink>
          </li>
          <li onClick={() => setToggle(false)} className="list-item">
            <NavLink to="/api/hackerrank" theme={theme}>
              HACKERRANK
            </NavLink>
          </li>
          <li onClick={() => setToggle(false)} className="list-item">
            <NavLink to="/api/google" theme={theme}>
              GOOGLE
            </NavLink>
          </li>
          <li onClick={() => setToggle(false)} className="list-item">
            <NavLink to="/api/topcoder" theme={theme}>
              TOPCODER
            </NavLink>
          </li>
        </div>
      ) : null}
    </>
  );
}
