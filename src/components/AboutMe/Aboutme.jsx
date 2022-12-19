import React from "react";
import "./aboutme.css";
import me from "../../Assets/Me.jpeg";
import { BsFillPatchCheckFill } from "react-icons/bs";
import GitHubCalendar from "react-github-calendar";
import ReactTooltip from "react-tooltip";
import Stats from "./Stats";

function Aboutme() {
  const selectLasthalfYear = (contributions) => {
    const currentYear = new Date().getFullYear();
    const currentMonth = new Date().getMonth();

    const ShowMonths = 10;

    return contributions.filter((day) => {
      const date = new Date(day.date);
      const monthOfTheDay = date.getMonth();

      return (
        date.getFullYear() === currentYear &&
        monthOfTheDay > currentMonth - ShowMonths &&
        monthOfTheDay <= currentMonth
      );
    });
  };

  return (
    <div className="about">
      <div className="about-container">
        {/* Left Side */}
        <div className="container-left">
          <img src={me} alt="" />
        </div>
        {/* Rigth Side */}
        <div className="container-right">
          <h1>MY NAME IS SUDEV KUMAR & I AM A FULL STACK WEB DEVELOPER.</h1>
          <p>
            Strong design and integration abilities as well as innate
            problem-solving abilities. Competent in HTML, Css, JavaScript,React
            Js, Chakra UI and Data Structure and Algorithm. Enthusiastic about
            starting and implementing new projects. Understanding of how to
            transform business needs into technical solutions. Want to begin a
            career as an entry-level software engineer with a reputable company
            that is focused on technology.
          </p>
          <div className="my-details">
            <div className="my-details-all">
              <p>
                Age : <span>23</span>
              </p>
              <p>
                Gender : <span>Male</span>
              </p>
              <p>
                Language : <span>Hindi, Odia, English</span>
              </p>
            </div>
            {/* Right Side */}
            <div className="my-details-all" id="my-details-all-right">
              <p>
                Phone No. : <span>+91 8328847712</span>
              </p>
              <p>
                Email : <span>sudevkumar82@gmail.com</span>
              </p>
            </div>
          </div>
        </div>
      </div>
      {/* Skills */}
      <div className="my-skills">
        <h1 className="flow about-heading">
          <span>My</span> Skills
        </h1>
        <div className="skill-continer">
          <div className="skill-frontend">
            <h3>Frontend Development</h3>
            <div className="skills-content">
              <article className="skills-details">
                <BsFillPatchCheckFill
                  style={{ color: "darkorange" }}
                  className="experince-details-icons"
                />
                <div>
                  <h4>HTML5</h4>
                  <small className="small">Experienced</small>
                </div>
              </article>
              <article className="skills-details">
                <BsFillPatchCheckFill
                  style={{ color: "darkorange" }}
                  className="experince-details-icons"
                />
                <div>
                  <h4>CSS3</h4>
                  <small className="small">Experienced</small>
                </div>
              </article>
              <article className="skills-details">
                <BsFillPatchCheckFill
                  style={{ color: "darkorange" }}
                  className="experince-details-icons"
                />
                <div>
                  <h4>JAVASCRIPT ES6</h4>
                  <small className="small">Experienced</small>
                </div>
              </article>
              <article className="skills-details">
                <BsFillPatchCheckFill
                  style={{ color: "darkorange" }}
                  className="experince-details-icons"
                />
                <div>
                  <h4>REACT JS</h4>
                  <small className="small">Intermidient</small>
                </div>
              </article>
              <article className="skills-details">
                <BsFillPatchCheckFill
                  style={{ color: "darkorange" }}
                  className="experince-details-icons"
                />

                <div>
                  <h4>CHAKRA UI</h4>
                  <small className="small">Experienced</small>
                </div>
              </article>
              <article className="skills-details">
                <BsFillPatchCheckFill style={{ color: "darkorange" }} />
                <div>
                  <h4>DATA STRUCTURE AND ALGORITHM</h4>
                  <small className="small">Intermidient</small>
                </div>
              </article>

              <article className="skills-details">
                <BsFillPatchCheckFill style={{ color: "darkorange" }} />
                <div>
                  <h4>REDUX</h4>
                  <small className="small">Intermidient</small>
                </div>
              </article>
            </div>
          </div>
        </div>
      </div>
      {/* Tech stacks */}
      <div className="tech-stacks">
        <h1 className="flow about-heading">
          <span>My</span> Tech Stacks
        </h1>
        <div className="tech-stack-container">
          <div className="tech-card">
            <img
              src="https://img.icons8.com/color/96/000000/html-5--v1.png"
              alt="HTML5"
            />
          </div>

          <div className="tech-card">
            <img
              src="https://img.icons8.com/color/96/000000/css3.png"
              alt="Css3"
            />
          </div>

          <div className="tech-card">
            <img
              src="https://img.icons8.com/color/96/000000/javascript--v1.png"
              alt="HTML5"
            />
          </div>

          <div className="tech-card">
            <img
              src="https://img.icons8.com/color/96/000000/git.png"
              alt="Git"
            />
          </div>

          <div className="tech-card">
            <img
              src="https://img.icons8.com/color/96/000000/visual-studio-code-2019.png"
              alt="vs-code"
            />
          </div>

          <div className="tech-card">
            <img
              src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/1200px-React-icon.svg.png"
              alt="vs-code"
            />
          </div>

          <div className="tech-card">
            <img
              src="https://www.coffeeclass.io/logos/chakra-ui.png"
              alt="Chakra Ui"
            />
          </div>

          <div className="tech-card">
            <img
              src="https://everyday.codes/wp-content/uploads/2020/01/0-U2DmhXYumRyXH6X1.png"
              alt="Redux"
            />
          </div>
        </div>
      </div>
      {/* My Education */}
      <div className="educations">
        <h1 className="flow about-heading">
          <span>My</span> Education{" "}
        </h1>
        <div className="education-container">
          {/* Education - 1 */}

          <div className="education">
            <div className="education-year">
              <p className="year">2022 - 2023</p>
            </div>
            <div className="fromWhere">
              <h3>Masai School, Bangalore</h3>
            </div>

            <div className="whatPersued">
              <p className="persue">
                Pesuing Front End Web Development From Masai School .
              </p>
            </div>
          </div>

          {/* Education - 2 */}
          <div className="education">
            <div className="education-year">
              <p className="year">2017 - 2020</p>
            </div>
            <div className="fromWhere">
              <h3>Utkal University, Bhubaneswar, Odisha</h3>
            </div>

            <div className="whatPersued">
              <p className="persue">
                Pesude Bachelor's in Computer Application From Ipsar Collage .
              </p>
            </div>
          </div>

          {/* Education - 3 */}
          <div className="education">
            <div className="education-year">
              <p className="year">2015 - 2017</p>
            </div>
            <div className="fromWhere">
              <h3>Stewart Science College, Cuttack, Odisha</h3>
            </div>

            <div className="whatPersued">
              <p className="persue">
                Pesude Higher Secondary Education From Stewart Science <br />{" "}
                College .
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="git-hub">
        <h1 className="flow about-heading">
          <span> My </span>
          Github Calender
        </h1>
        <GitHubCalendar
          className="hi"
          username="sudevkumar"
          transformData={selectLasthalfYear}
          style={{ color: "white", margin: "auto" }}
          blockSize={12}
          fontSize={20}
        >
          <ReactTooltip delayShow={12} html style={{ color: "white" }} />
        </GitHubCalendar>{" "}
      </div>
      <Stats />
    </div>
  );
}

export default Aboutme;
