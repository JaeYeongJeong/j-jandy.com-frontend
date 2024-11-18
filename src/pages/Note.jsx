import { useParams } from 'react-router-dom';
import NoteDetail from '../components/NoteDetail';
import { useSelector } from 'react-redux';
import ErrorPage from './ErrorPage';

export default function Note() {
  const { notes, error, loading } = useSelector((state) => state.notes);

  if (loading) {
    return <div>Loading...</div>;
  }

  const { id } = useParams();

  const note = notes.find((note) => note.id == id);

  if (!note) {
    return <div>Note not found</div>;
  }

  if (error) {
    return <ErrorPage error={error} />;
  }

  return <NoteDetail note={note} />;
}
