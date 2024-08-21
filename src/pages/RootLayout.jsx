import { defer, Outlet, useRouteLoaderData } from 'react-router-dom';
import NavBar from '../components/NavBar';
import { checkSession } from '../Util/http';

export default function RootLayout() {
  return (
    <div className="root-layout">
      <NavBar />
      <main>
        <Outlet />
      </main>
    </div>
  );
}

export async function loader() {
  return defer({
    session: await checkSession(),
  });
}
