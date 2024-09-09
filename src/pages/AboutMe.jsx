import { useDispatch, useSelector } from 'react-redux';
import { setHome } from '../../redux/actions';

export default function AboutMe() {
  const dispatch = useDispatch();
  const isMobile = useSelector((state) => state.isMobile);

  const toggleNav = () => {
    event.preventDefault();
    dispatch(setHome(true));
  };

  return (
    <div className="aboutMe">
      {isMobile && (
        <button className="toggle" onClick={toggleNav}>
          nav
        </button>
      )}
      <div className="introduction">
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
  );
}
