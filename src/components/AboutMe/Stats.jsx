import React from "react";
import "./Stats.css";

function Stats() {
  return (
    <div>
      <div className="streak">
        <a href="https://github.com/sudevkumar">
          <img
            src="https://github-readme-streak-stats.herokuapp.com/?user=sudevkumar"
            alt="my-stats"
          />
        </a>
      </div>

      <div className="git-hub-stats">
        <div className="top-langs">
          <a href="https://github.com/sudevkumar" className="top-lang">
            <img
              src="https://github-readme-stats.vercel.app/api/top-langs/?username=sudevkumar"
              alt=""
            />
          </a>
        </div>

        <div className="show-icons">
          <a href="https://github.com/sudevkumar" className="show-icon">
            <img
              src="https://github-readme-stats.vercel.app/api/?username=sudevkumar&count_private=true&show_icons=true"
              alt=""
            />
          </a>
        </div>
      </div>
    </div>
  );
}

export default Stats;
