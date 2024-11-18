import { useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import icon_aws from '../assets/icon/aws.png';
import icon_cplus from '../assets/icon/cplus.png';
import icon_css from '../assets/icon/css.png';
import icon_java from '../assets/icon/java.png';
import icon_js from '../assets/icon/js.png';
import icon_mongodb from '../assets/icon/mongodb.svg';
import icon_mysql from '../assets/icon/mysql.png';
import icon_react from '../assets/icon/react.png';
import icon_redux from '../assets/icon/redux.svg';
import icon_vite from '../assets/icon/vite.svg';
import icon_express from '../assets/icon/express.svg';
import icon_menu from '../assets/icon/menu-burger.png';

export default function Skills() {
  const navigate = useNavigate();
  const isMobile = useSelector((state) => state.app.isMobile);

  function navMobileHome() {
    event.preventDefault();
    return navigate(`/mhome`);
  }

  return (
    <div>
      <div className="header-navbar">
        {isMobile && (
          <>
            <button className="menu-button" onClick={navMobileHome}>
              <img className="icon" src={icon_menu} alt="Menu Icon" />
            </button>
          </>
        )}
      </div>
      <div className="skills-container">
        <div className="skills-contents">
          <div className="skills-contents-header">
            <div> Skills.</div>
          </div>
          <div className="skills-line">
            <div className="skills-line">Language</div>
            <ul>
              <li>
                <img src={icon_js} />
                <div className="hover-text">
                  <p className="white-text">JavaScript</p>
                  <p className="red-text">Strong</p>
                </div>
              </li>
              <li>
                <img src={icon_java} />
                <div className="hover-text">
                  <p className="white-text">Java</p>
                  <p className="orange-text">knowledgeable</p>
                </div>
              </li>
              <li>
                <img src={icon_cplus} />
                <div className="hover-text">
                  <p className="white-text">C++</p>
                  <p className="green-text">experienced</p>
                </div>
              </li>
            </ul>
          </div>
          <div className="skills-line">
            <div className="skill-title">Frontend</div>
            <ul>
              <li>
                <img src={icon_react} />
                <div className="hover-text">
                  <p className="white-text">React</p>
                  <p className="red-text">Strong</p>
                </div>
              </li>
              <li>
                <img src={icon_redux} />
                <div className="hover-text">
                  <p className="white-text">Redux</p>
                  <p className="orange-text">knowledgeable</p>
                </div>
              </li>
              <li>
                <img src={icon_css} />
                <div className="hover-text">
                  <p className="white-text">CSS</p>
                  <p className="orange-text">knowledgeable</p>
                </div>
              </li>
              <li>
                <img src={icon_vite} />
                <div className="hover-text">
                  <p className="white-text">Vite</p>
                  <p className="green-text">experienced</p>
                </div>
              </li>
            </ul>
          </div>
          <div className="skills-line">
            <div className="skills-line">Backend</div>
            <ul>
              <li>
                <img src={icon_express} />
                <div className="hover-text">
                  <p className="white-text">Node-express</p>
                  <p className="red-text">Strong</p>
                </div>
              </li>
              <li>
                <img src={icon_mongodb} />
                <div className="hover-text">
                  <p className="white-text">MongoDB</p>
                  <p className="green-text">experienced</p>
                </div>
              </li>
              <li>
                <img src={icon_mysql} />
                <div className="hover-text">
                  <p className="white-text">MySQL</p>
                  <p className="green-text">experienced</p>
                </div>
              </li>
            </ul>
          </div>
          <div className="skills-line">
            <div className="skills-line">DevOps</div>
            <ul>
              <li>
                <img src={icon_aws} />
                <div className="hover-text">
                  <p className="white-text">AWS</p>
                  <p className="orange-text">knowledgeable</p>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
