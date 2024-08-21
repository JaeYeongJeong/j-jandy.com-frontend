import {
  Navigate,
  RouterProvider,
  createBrowserRouter,
} from 'react-router-dom';
import AboutMe from './pages/AboutMe';
import RootLayout, { loader as rootLoader } from './pages/RootLayout';
import Projects from './pages/Projects';
import Notes, { loader as notesLoader } from './pages/Notes';
import Note from './pages/Note';
import NoteSearch, { loader as searchNoteLoader } from './pages/NoteSearch';
import { action as createNoteAction } from './pages/NoteForm';
import EditNote from './pages/EditNote';
import CreateNote from './pages/CreateNote';
import Login, { action as loginAction } from './pages/Login';
import Regist, { action as registAction } from './pages/Regist';
import NotFound from './pages/NotFound';
import ErrorPage from './pages/ErrorPage';

const router = createBrowserRouter([
  {
    path: '/',
    element: <RootLayout />,
    id: 'root',
    loader: rootLoader,
    errorElement: <ErrorPage />,
    children: [
      {
        index: true,
        element: <Navigate to="/aboutme" />,
      },
      {
        path: '/aboutme',
        element: <AboutMe />,
      },
      {
        path: '/projects',
        element: <Projects />,
      },
      {
        path: '/notes',
        id: 'notes',
        element: <Notes />,
        loader: notesLoader,
        children: [
          {
            path: '/notes/:id',
            element: <Note />,
          },
          {
            path: '/notes/edit/:id',
            element: <EditNote />,
            action: createNoteAction,
          },
        ],
      },
      {
        path: '/notes/search',
        element: <NoteSearch />,
        loader: searchNoteLoader,
      },
      {
        path: '/notes/create',
        element: <CreateNote />,
        action: createNoteAction,
      },
      {
        path: '/login',
        element: <Login />,
        action: loginAction,
      },
      {
        path: '/regist',
        element: <Regist />,
        action: registAction,
      },
      {
        path: '*',
        element: <NotFound />,
      },
    ],
  },
]);

function App() {
  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}

export default App;
