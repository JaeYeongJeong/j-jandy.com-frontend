import { Link, useRouteLoaderData } from 'react-router-dom';
import { logout } from '../Util/http';

export default function NavBar() {
  const session = useRouteLoaderData('root');
  const isAuthenticated = session.session.isAuthenticated;

  async function handleLogout() {
    await logout();
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
            <Link to="https://github.com/" className="link" target="_blank">
              GitHub
            </Link>
            <span className="dot">.</span>
          </li>
          <li>
            <Link to="/projects" className="link">
              Projects
            </Link>
            <span className="dot">.</span>
          </li>
          <li>
            <Link to="/notes" className="link">
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
        <p className="navbar-info-updateDate">Last Update: 2024/03/27</p>
      </div>
    </div>
  );
}
