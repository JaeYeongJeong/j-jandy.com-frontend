import { useNavigate } from 'react-router-dom';
import menuIcon from '../assets/icon/menu-burger.png';
import { useSelector } from 'react-redux';

export default function Skills() {
  const navigate = useNavigate();
  const isMobile = useSelector((state) => state.isMobile);

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
              <img className="icon" src={menuIcon} alt="Menu Icon" />
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
                <img src="/src/assets/icon/js.png" />
                <div className="hover-text">
                  <p className="white-text">JavaScript</p>
                  <p className="red-text">Strong</p>
                </div>
              </li>
              <li>
                <img src="/src/assets/icon/java.png" />
                <div className="hover-text">
                  <p className="white-text">Java</p>
                  <p className="orange-text">knowledgeable</p>
                </div>
              </li>
              <li>
                <img src="/src/assets/icon/cplus.png" />
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
                <img src="/src/assets/icon/react.png" />
                <div className="hover-text">
                  <p className="white-text">React</p>
                  <p className="red-text">Strong</p>
                </div>
              </li>
              <li>
                <img src="/src/assets/icon/redux.svg" />
                <div className="hover-text">
                  <p className="white-text">Redux</p>
                  <p className="orange-text">knowledgeable</p>
                </div>
              </li>
              <li>
                <img src="/src/assets/icon/css-3.png" />
                <div className="hover-text">
                  <p className="white-text">CSS</p>
                  <p className="orange-text">knowledgeable</p>
                </div>
              </li>
              <li>
                <img src="/src/assets/icon/vite.svg" />
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
                <img src="/src/assets/icon/node-js.svg" />
                <div className="hover-text">
                  <p className="white-text">Node-express</p>
                  <p className="red-text">Strong</p>
                </div>
              </li>
              <li>
                <img src="/src/assets/icon/mongodb.svg" />
                <div className="hover-text">
                  <p className="white-text">MongoDB</p>
                  <p className="green-text">experienced</p>
                </div>
              </li>
              <li>
                <img src="/src/assets/icon/mysql.png" />
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
                <img src="/src/assets/icon/aws.png" />
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
