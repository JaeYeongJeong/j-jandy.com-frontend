import { Outlet, useLocation } from 'react-router-dom';
import NavBar from '../components/NavBar';
import { checkSession } from '../Util/http';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setAuthenticated, setMobile } from '../../redux/actions';

export default function RootLayout() {
  const dispatch = useDispatch();
  const isMobile = useSelector((state) => state.isMobile);

  useEffect(() => {
    const checkMobile = () => {
      const isMobile = window.innerWidth <= 768;
      dispatch(setMobile(isMobile));
    };
    checkMobile();
    window.addEventListener('resize', checkMobile);

    return () => {
      window.removeEventListener('resize', checkMobile);
    };
  }, [dispatch]);

  useEffect(() => {
    const verifySession = async () => {
      const sessionData = await checkSession();
      dispatch(setAuthenticated(sessionData.isAuthenticated));
    };
    verifySession();
  }, [dispatch]);

  return (
    <div className="root-layout">
      {isMobile && (
        <>
          <div className="main-mobile">
            <Outlet />
          </div>
        </>
      )}
      {!isMobile && (
        <>
          <NavBar className="navbar" />
          <div className="main">
            <Outlet />
          </div>
        </>
      )}
    </div>
  );
}
