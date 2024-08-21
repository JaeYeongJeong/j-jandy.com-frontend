import { Outlet, defer, useLoaderData } from 'react-router-dom';
import NotesList from '../components/NoteList';
import NoteHeader from '../components/NoteHeader';
import { fetchNotes } from '../Util/http';

export default function Notes() {
  const { notes, error } = useLoaderData();

  return (
    <div className="notes">
      <NoteHeader />
      <Outlet />
      {!error && <NotesList notes={notes} />}
      {error && <p>Something went wrong.</p>}
    </div>
  );
}

export async function loader() {
  try {
    const notes = await fetchNotes({});
    return defer({
      notes,
    });
  } catch (error) {
    return defer({
      notes: null,
      error,
    });
  }
}
