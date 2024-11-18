import { useNavigate, useParams, useRouteLoaderData } from 'react-router-dom';
import NoteForm from './NoteForm';
import { useEffect } from 'react';
import { useSelector } from 'react-redux';

export default function EditNote() {
  const navigate = useNavigate();
  const isAuthenticated = useSelector((state) => state.app.isAuthenticated);

  useEffect(() => {
    if (!isAuthenticated) {
      navigate('/login');
    }
  }, [isAuthenticated, navigate]);

  const { notes, error, loading } = useSelector((state) => state.notes);
  const { id } = useParams();
  const note = notes.find((note) => note.id == id);

  return isAuthenticated ? <NoteForm method="PATCH" note={note} /> : null;
}
