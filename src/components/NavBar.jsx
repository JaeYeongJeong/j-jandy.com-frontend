import { Link } from 'react-router-dom';
import { logout } from '../Util/http';
import { useDispatch, useSelector } from 'react-redux';
import { setAuthenticated } from '../../redux/actions';

export default function NavBar() {
  const isAuthenticated = useSelector((state) => state.isAuthenticated);
  const dispatch = useDispatch();

  async function handleLogout(e) {
    e.preventDefault();
    await logout();
    dispatch(setAuthenticated(false));
  }

  return (
    <div className="navbar">
      <div>
        <ul>
          <li>
            <Link to="/aboutme" className="link">
              About me
            </Link>
            <span className="dot">.</span>
          </li>

          <li>
            <Link to="/skills" className="link">
              Skills
            </Link>
            <span className="dot">.</span>
          </li>
          <li>
            <Link to="/notes" className="link">
              Notes
            </Link>
            <span className="dot">.</span>
          </li>
          <li>
            <Link to="https://github.com/" className="link" target="_blank">
              GitHub
            </Link>
            <span className="dot">.</span>
          </li>
        </ul>
      </div>
      <div className="navbar-info">
        <div className="navbar-info-login">
          {!isAuthenticated && (
            <>
              <Link to="/regist" className="link">
                Join us.
              </Link>
              <Link to="/login" className="link">
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
        <p className="navbar-info-updateDate">Last Update: 2024/09/28</p>
      </div>
    </div>
  );
}
