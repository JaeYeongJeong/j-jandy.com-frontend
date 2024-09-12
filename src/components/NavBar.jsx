import { Link, useRouteLoaderData } from 'react-router-dom';
import { logout } from '../Util/http';
import { useDispatch, useSelector } from 'react-redux';
import { setHome } from '../../redux/actions';

export default function NavBar({ className }) {
  const session = useRouteLoaderData('root');
  const isAuthenticated = session.session.isAuthenticated;
  const dispatch = useDispatch();
  const isMobile = useSelector((state) => state.isMobile);

  async function handleLogout() {
    await logout();
  }

  function clickHandler() {
    if (isMobile) {
      dispatch(setHome(false));
    }
  }

  return (
    <div className={className}>
      <div>
        <ul>
          <li>
            <Link to="/aboutme" className="link" onClick={clickHandler}>
              About me
            </Link>
            <span className="dot">.</span>
          </li>
          <li>
            <Link to="https://github.com/" className="link" target="_blank">
              GitHub
            </Link>
            <span className="dot">.</span>
          </li>
          <li>
            <Link to="/projects" className="link" onClick={clickHandler}>
              Projects
            </Link>
            <span className="dot">.</span>
          </li>
          <li>
            <Link to="/notes" className="link" onClick={clickHandler}>
              Notes
            </Link>
            <span className="dot">.</span>
          </li>
        </ul>
      </div>
      <div className="navbar-info">
        <div className="navbar-info-login">
          {!isAuthenticated && (
            <>
              <Link to="/regist" className="link" onClick={clickHandler}>
                Join us.
              </Link>
              <Link to="/login" className="link" onClick={clickHandler}>
                Loigin.
              </Link>
            </>
          )}
          {isAuthenticated && (
            <Link className="link" onClick={handleLogout}>
              Logout
            </Link>
          )}
        </div>
        <p className="navbar-info-updateDate">Last Update: 2024/09/09</p>
      </div>
    </div>
  );
}
