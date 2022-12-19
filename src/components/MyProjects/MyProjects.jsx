import React from "react";
import { NavLink } from "react-router-dom";
import youtube from "../../Assets/youtube.png";
import starwar from "../../Assets/starwar.png";
import gym from "../../Assets/gym.png";
import mart from "../../Assets/mart.png";
import "./myproject.css";

function MyProjects() {
  return (
    <div className="project-containers">
      {/* Youtube */}
      <div className="project-container">
        <div className="project-card">
          <img src={youtube} alt="You Tube" />
          <h2 className="project-title">You Tube Clone</h2>
          <div className="project-details">
            <div className="project-details-para">
              <p>
                This is a clone of YouTube. Where users can easily watch their
                videos. This is a solo project and I took 2 days to made this
                project.
              </p>
            </div>
            <h5>
              Tech Stack : <br />
              <li>HTML5</li>
              <li>CSS3</li>
              <li>Java Script ES6</li>
            </h5>
          </div>

          <div className="project-btn">
            <a href="https://chimerical-gingersnap-c77ecf.netlify.app">
              <button className="btn">View Project</button>
            </a>

            <a href="https://github.com/masai-course/Sudev_fw18_0175/tree/master/unit-3/sprint-3/day-1/assignments/YouTube1">
              <button className="btn">Github</button>
            </a>
          </div>
        </div>

        {/* Best Buy */}

        <div className="project-card">
          <img
            src="https://imageio.forbes.com/specials-images/imageserve/6180591163d836de461e3a20/Best-Buy-Set-To-Announce-Quarterly-Earnings/960x0.jpg?format=jpg&width=960"
            alt=""
          />
          <h2 className="project-title">Best Buy Clone</h2>
          <div className="project-details">
            <div className="project-details-para">
              <p>
                This is a clone of Best Buy.com. This is a group project. We
                have a 5 members of team and I took resonsibity for Home page,
                Navbar and Footer. Except that I have also Worked on different
                components of this projecct to help my colleagues.
              </p>
            </div>
            <h5>
              Tech Stack : <br />
              <li>HTML5</li>
              <li>CSS3</li>
              <li>Java Script ES6</li>
            </h5>
          </div>

          <div className="project-btn">
            <a href="https://steady-malasada-a4d2c6.netlify.app">
              <button className="btn">View Project</button>
            </a>

            <a href="https://github.com/sankethtj/instinctive-rat-7506">
              <button className="btn">Github</button>
            </a>
          </div>
        </div>

        {/* Star War */}

        <div className="project-card">
          <img src={starwar} alt="You Tube" />
          <h2 className="project-title">Star War Clone</h2>
          <div className="project-details">
            <div className="project-details-para">
              <p>
                This is a Star War web-site clone. This is a solo project where
                a user can seach for any star war avtars and also can find the
                details of that avtar.
              </p>
            </div>

            <h5>
              Tech Stack : <br />
              <li>HTML5</li>
              <li>CSS3</li>
              <li>Java Script ES6</li>
            </h5>
          </div>

          <div className="project-btn">
            <a href="https://genuine-faun-4f0839.netlify.app">
              <button className="btn">View Project</button>
            </a>

            <a href="https://github.com/masai-course/Sudev_fw18_0175/tree/master/unit-3/sprint-2/optional/PSC%20">
              <button className="btn">Github</button>
            </a>
          </div>
        </div>

        {/* Gym Website */}

        <div className="project-card">
          <img src={gym} alt="You Tube" />
          <h2 className="project-title">Gym Website</h2>
          <div className="project-details">
            <div className="project-details-para">
              <p>
                This is a solo project using React Js. This is a totally
                responsive website. I took 4 hours to complete this project. I
                have tried little bit animation in this project.
              </p>
            </div>
            <h5>
              Tech Stack : <br />
              <li>React Js</li>
              <li>CSS3</li>
            </h5>
          </div>

          <div className="project-btn">
            <a href="https://sudev-gym-website.netlify.app">
              <button className="btn">View Project</button>
            </a>

            <a href="https://github.com/sudevkumar/Sudev-projects/tree/main/gym_website">
              <button className="btn">Github</button>
            </a>
          </div>
        </div>

        {/* E-commerce Website */}

        <div className="project-card">
          <img src={mart} alt="You Tube" />
          <h2 className="project-title">E-Commerce WebSIte</h2>
          <div className="project-details">
            <div className="project-details-para">
              <p>
                This is a solo project using React Js, Redux and Bootstrap. I
                have used local storage to store user Signin and Login data. I
                took 3 hours to complete this project.
              </p>
            </div>
            <h5>
              Tech Stack : <br />
              <li>React Js</li>
              <li>Botstrap</li>
              <li>Redux</li>
            </h5>
          </div>
          <div className="project-btn">
              <a href="https://sudevsmart.netlify.app">
                <button className="btn">View Project</button>
              </a>

              <a href="https://github.com/sudevkumar/Sudev-projects/tree/main/mobile-shop">
                <button className="btn">Github</button>
              </a>
            </div>
        </div>
      </div>
    </div>
  );
}

export default MyProjects;
