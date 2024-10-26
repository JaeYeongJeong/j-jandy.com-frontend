import { Outlet, defer, useLoaderData } from 'react-router-dom';
import NotesList from '../components/NoteList';
import NoteHeader from '../components/NoteHeader';
import { fetchNotes } from '../Util/http';
import ErrorPage from './ErrorPage';

export default function Notes() {
  const { notes, error } = useLoaderData();

  return (
    <div className="notes">
      <NoteHeader />
      <Outlet />
      {!error && (!notes || notes.length === 0) && (
        <p style={{ fontSize: '24px' }}>Create your first note.</p>
      )}
      {!error && <NotesList notes={notes} />}
      {error && <ErrorPage />}
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
