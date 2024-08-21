import { Outlet, defer, useLoaderData } from 'react-router-dom';
import NotesList from '../components/NoteList';
import NoteHeader from '../components/NoteHeader';
import { fetchNotes } from '../Util/http';

export default function Notes() {
  const { notes } = useLoaderData();

  return (
    <div className="notes">
      <NoteHeader />
      <Outlet />
      <NotesList notes={notes} />
    </div>
  );
}

export async function loader() {
  return defer({
    notes: await fetchNotes({}),
  });
}
