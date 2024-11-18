import { Outlet } from 'react-router-dom';
import NotesList from '../components/NoteList';
import NoteHeader from '../components/NoteHeader';
import ErrorPage from './ErrorPage';
import store from '../../redux/store';
import { fetchNotesAction } from '../../redux/actions';
import { useSelector } from 'react-redux';

export default function Notes() {
  const { notes, error, loading } = useSelector((state) => state.notes);

  return (
    <div className="notes">
      <NoteHeader />
      <Outlet />
      {loading && <p style={{ fontSize: '24px' }}>Loading...</p>}
      {!loading && !error && (!notes || notes.length === 0) && (
        <p style={{ fontSize: '24px' }}>Create your first note.</p>
      )}
      {!error && <NotesList notes={notes} />}
      {error && <ErrorPage error={error} />}
    </div>
  );
}

export async function loader() {
  try {
    await store.dispatch(fetchNotesAction());
    return null;
  } catch (error) {
    return error;
  }
}
