import { useParams, useRouteLoaderData } from 'react-router-dom';
import NoteForm from './NoteForm';

export default function EditNote() {
  const { notes } = useRouteLoaderData('notes');
  const { id } = useParams();

  const note = notes.find((note) => note.id == id);

  return <NoteForm method="PATCH" note={note} />;
}
