import "./info.css";
import { useState, useEffect } from "react";
import axios from "axios";
import Card from "../Card/Card";
import darkGif from "../../images/loading.gif";
import lightGif from "../../images/loading-dark.gif";


function platform(name) {
  if (name === "codeforces") return name;
  if (name === "codechef") return "code_chef";
  if (name === "leetcode") return "leet_code";
  if (name === "atcoder") return "at_coder";
  if (name === "hackerrank") return "hacker_rank";
  if (name === "hackerearth") return "hacker_earth";
  if (name === "google") return "kick_start";
  if (name === "topcoder") return "top_coder";
  return name;
}

export default function Info({theme}) {
  const [list, setList] = useState([]);
  const [ongoing, setOngoing] = useState([]);
  const [loading, setLoading] = useState(false);

  const url = window.location.pathname;
  let name = url.substring(url.lastIndexOf("/") + 1);
  let Name = name === "google" ? "google kickstart" : name;
  name = platform(name);

  // API 
  useEffect(() => {
    axios.get(`https://kontests.net/api/v1/${name}`)
      .then((Data) => {
        setLoading(true);
        Data.data.map((contest) => {
          if (contest.status === "CODING") {
            setOngoing((ongoing) => [contest, ...ongoing]);
          }
          if (contest.status === "BEFORE") {
            setList((list) => [...list, contest]);
          }
        });
      })
      .catch((err) => console.log(err));
  },[]);
  
  return (
    <>
      {loading ? (
        <div className="info">
          {ongoing.length === 0 && list.length === 0 ? (
            <div className="info-title">NO CONTESTS AVAILABLE</div>
          ) : null}
          {ongoing.length !== 0 ? (
            <>
              <div className="info-title">ONGOING CONTESTS</div>
              <div className="info-cards">
                <Card
                  theme={theme}
                  info={ongoing}
                  contest="ongoing"
                  name={Name}
                  key={ongoing}
                />
              </div>
            </>
          ) : null}
          {list.length !== 0 ? (
            <>
              <div className="info-title">UPCOMING CONTESTS</div>
              <div className="info-cards">
                <Card
                  theme={theme}
                  info={list}
                  contest="upcoming"
                  name={Name}
                  key={list}
                />
              </div>
            </>
          ) : null}
        </div>
      ) : (
        <div className="loading">
          <div className="info-title">Loading...</div>
          <div className="loading-gif">
            {theme === "dark" ? <img src={darkGif} alt="no gif"/> : <img src={lightGif} alt="no gif" />}
          </div>
        </div>
      )}
    </>
  );
}
