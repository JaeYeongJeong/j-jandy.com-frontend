import { useSelector } from 'react-redux';
import menuIcon from '../assets/icon/menu-burger.png';
import { useNavigate } from 'react-router-dom';

export default function AboutMe() {
  const navigate = useNavigate();
  const isMobile = useSelector((state) => state.app.isMobile);

  const toggleNav = () => {
    event.preventDefault();
    navigate(`/mhome`);
  };

  return (
    <div className="aboutMe">
      <div className="aboutMe-container">
        {isMobile && (
          <>
            <button className="menu-button" onClick={toggleNav}>
              <img className="icon" src={menuIcon} alt="Menu Icon" />
            </button>
          </>
        )}
        <div className="introduction">
          <p className="status">안녕하세요.</p>
          <p className="status">넘어져도 다시 도전하는</p>
          <span className="name">정재영</span>
          <span className="status">입니다.</span>
          <p className="description">
            풀스택 개발자를 희망하고 있습니다.
            <br />
            새로운 것에 도전하는 것을 좋아합니다.
            <br />
            다양한 것을 배우고 이를 활용해보려고 노력합니다.
          </p>
        </div>
      </div>
    </div>
  );
}
