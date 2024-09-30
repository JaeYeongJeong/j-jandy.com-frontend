import { useNavigate, useParams, useRouteLoaderData } from 'react-router-dom';
import NoteForm from './NoteForm';
import { useEffect } from 'react';
import ErrorPage from './ErrorPage';

export default function EditNote() {
  const navigate = useNavigate();
  const session = useRouteLoaderData('root');
  const isAuthenticated = session.session.isAuthenticated;

  useEffect(() => {
    if (!isAuthenticated) {
      navigate('/login');
    }
  }, [isAuthenticated, navigate]);

  const { notes } = useRouteLoaderData('notes');
  const { id } = useParams();
  const note = notes.find((note) => note.id == id);

  return isAuthenticated ? (
    <NoteForm method="PATCH" note={note} />
  ) : (
    <ErrorPage />
  );
}
