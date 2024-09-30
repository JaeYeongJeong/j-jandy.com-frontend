import { defer, Outlet, useLocation } from 'react-router-dom';
import NavBar from '../components/NavBar';
import { checkSession } from '../Util/http';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setMobile } from '../../redux/actions';

export default function RootLayout() {
  const dispatch = useDispatch();
  const isMobile = useSelector((state) => state.isMobile);
  const pathName = useLocation();

  useEffect(() => {
    const checkMobile = () => {
      const isMobile = window.innerWidth <= 768;
      dispatch(setMobile(isMobile));
    };
    checkMobile();
    window.addEventListener('resize', checkMobile);

    const element = document.documentElement;
    element.scrollIntoView({ behavior: 'smooth', block: 'start' });

    return () => {
      window.removeEventListener('resize', checkMobile);
    };
  }, [dispatch, pathName]);

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

export async function loader() {
  return defer({
    session: await checkSession(),
  });
}
