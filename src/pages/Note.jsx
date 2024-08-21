import { useParams, useRouteLoaderData } from 'react-router-dom';
import NoteDetail from '../components/NoteDetail';

export default function Note() {
  const { notes } = useRouteLoaderData('notes');

  if (!notes) {
    return <div>Loading...</div>;
  }

  const { id } = useParams();

  const note = notes.find((note) => note.id == id);

  if (!note) {
    return <div>Note not found</div>;
  }

  return <NoteDetail note={note} />;
}
