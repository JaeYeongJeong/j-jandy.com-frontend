import { useNavigate, useRouteLoaderData } from 'react-router-dom';
import NoteForm from './NoteForm';
import ErrorPage from './ErrorPage';
import { useEffect } from 'react';

export default function CreateNote() {
  const navigate = useNavigate();
  const session = useRouteLoaderData('root');
  const isAuthenticated = session.session.isAuthenticated;

  useEffect(() => {
    if (!isAuthenticated) {
      navigate('/login');
    }
  }, [isAuthenticated, navigate]);

  return isAuthenticated ? <NoteForm method="POST" /> : <ErrorPage />;
}
